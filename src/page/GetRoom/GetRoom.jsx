import { SearchBar, Button, WhiteSpace, WingBlank,NavBar,Icon} from 'antd-mobile';
import React, { useEffect, useState } from 'react'
import $api from '../../api'
 import { Route, useHistory } from "react-router-dom";


export const GetRoom = () => {
    const history = useHistory()
    const user_id =localStorage.getItem('user_id')  

    const [roomList,setRoomList] = useState([])

     useEffect(()=>{
        $api.analysisApi.getAnalysisList({user_id}).then(data =>{
        if(data && data.length > 0){
            console.log("数据------",data)
             if(data[0].room_list){
                const room_list = JSON.parse(data[0].room_list)
                setRoomList(room_list)
            }
        }
    }).catch(e=>{
      console.log("错误",e)
    })
  },[])

  const goTolivingRoom =(listItem) =>{
      console.log("跳转的值",listItem)
       history.push(`/livePlay?id=${listItem.room_id}`,listItem.room_id)
  }
  
  return (<div>
       <NavBar
          icon={<Icon type="left" />}
          onLeftClick={() => window.history.back()}
          >已购买记录</NavBar>

        {roomList && roomList.map((item,index)=>{
            return <div key={index} style={{margin:'10px'}}>
                <Button onClick={()=>{goTolivingRoom(item)}}>{item.title}</Button>
            </div>
        })}
  </div>);
}

