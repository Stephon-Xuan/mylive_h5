 
 import { ListCard } from '../ListCard/ListCard'
 import React, { useEffect, useMemo, useState } from "react";
 import $api from '../../api'
 import { Route, useHistory } from "react-router-dom";
 import {
  Modal,
  Toast
} from 'antd-mobile'

const alert = Modal.alert;

 export const ListShow = (props) =>{
     const user_id =localStorage.getItem('user_id')  
     const { listData } = props
     const [userAnalysis,setUserAnalysis] = useState([])
     const history = useHistory()


     useEffect(()=>{
        // 获取用户数据
        $api.analysisApi.getAnalysisList({user_id}).then(data =>{
            // 过滤数据
            setUserAnalysis(data)
            // console.log("列表数据",listData,userAnalysis)
        }).catch(e =>{
            console.log("错误",e)
        })
      },[])

      const listData1 = useMemo(()=>{
          if(userAnalysis.length === 0) return listData
          let userInfo = userAnalysis.length > 0 ? userAnalysis[0] : {}
          const roomList = userInfo.room_list ? JSON.parse(userInfo.room_list) : []
          const temp = roomList.map(item =>{
              return item.room_id
          })
          const result = listData.map(item=>{
            let isPay = false
            if(temp.includes(item.id)){
                isPay = true
                // console.log("存在不用购买",temp,item.id)
            }
            return {...item,isPay}
        })
        // console.log("结果",result)
        return result

      },[userAnalysis,listData])

      const handleGoTo = (listItem) => {
            // 其实可以用isPay来判断 TODO

	        // history.push(`/livePlay?id=${id}`)
            // 判权
            // 1.如果是自己的课
            let userInfo ={}
            if(userAnalysis.length > 0){
               userInfo = userAnalysis[0]
            }

            if(!userInfo.user_id || !user_id){
                Toast.fail('用户不存在，请注册登录！', 1);
                return
            }

            if(listItem.user_id === user_id || !listItem.integral_fee){
                history.push(`/livePlay?id=${listItem.id}`,listItem.id)
                return
            }
            const roomList = userInfo.room_list ? JSON.parse(userInfo.room_list) : []

            // if(roomList.length > 0){
            //   let flag = roomList.some(item=>{
            //       return  item.room_id === listItem.id
            //     })
            //     if(flag){
            //         console.log("已经购买过")
            //         history.push(`/livePlay?id=${listItem.id}`,listItem.id)
            //         return
            //     }
            // }
            
            // 已经购买过
            if(listItem.isPay){
                 console.log("已经购买过")
                history.push(`/livePlay?id=${listItem.id}`,listItem.id)
                return
            }



            //2.如果是别人的课，分是否购买了
            alert('购买', '你是否要使用积分购买', [
                    { text: '取消', onPress: () => console.log('cancel') },
                    {
                        text: '确定',
                        onPress: () =>
                        new Promise((resolve) => {
                            try{
                                console.log(userInfo.integral_surplus,listItem.integral_fee)
                                if(+userInfo.integral_surplus >= +listItem.integral_fee){
                                const integral_surplus = userInfo.integral_surplus - listItem.integral_fee
                                const temp = []
                                temp.push({room_id:listItem.id,title:listItem.title},...roomList.slice(0,9))
                                const params = {
                                    user_id,
                                    room_list:JSON.stringify(temp),
                                    integral_surplus
                                }
                                $api.analysisApi.addAnalysis(params).then(data=>{
                                    if(data.code === 200){
                                        Toast.success('购买成功', 1);
                                        history.push(`/livePlay?id=${listItem.id}`,listItem.id)
                                    }else{
                                        Toast.fail('购买失败', 1);
                                    }
                                    
                                }).catch(e=>{
                                    console.log("数据错误",e)
                                })
                            }else{
                                 Toast.info('积分不足', 1);
                            }
                            }catch(e){
                                console.log("错误",e)
                            }
                            
                            setTimeout(resolve, 1000);
                        }),
                    },
            ])
       }
       
    if (!listData || listData.length === 0) {
        return null
    }

    return (<div>
        {
            listData1.map((item,index) =>{
                return <div 
                            key={index} 
                        >
                            <div
                                onClick={()=>{handleGoTo(item)}}
                            >
                                <ListCard 
                                    listItem={item}
                                ></ListCard> 
                            </div>
                          
                        </div>
            })
        }
    </div>)
}