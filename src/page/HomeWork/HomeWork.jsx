import { SearchBar, Button, WhiteSpace, WingBlank,NavBar,Icon,Tabs,Badge,InputItem,Toast} from 'antd-mobile';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import $api from '../../api'
 import { Route, useHistory } from "react-router-dom";
import { getQueryVariable } from '../../utils/utils'
import Input from 'antd-mobile/lib/input-item/Input';


export const HomeWork = () => {
    const user_id =getQueryVariable('user_id') 
    const room_id =getQueryVariable('room_id')  
    const history = useHistory()

    const [examineInfo,setExamineInfo] = useState([])
    const [myAnswer,setMyAnswer] = useState([])
    const [score,setScore] = useState('')
    const [tabPage,setTabPage] = useState(0)

    const getExamineInfo = () =>{
      $api.examineApi.getExamineInfo(room_id).then(data=>{
        console.log("答案数据获取数据成功",data)
        if(data && data.examine_list){
          const examine_list =JSON.parse(data.examine_list)
          const temp = examine_list.map(item =>{
            return {...item,stu_answer:''}
          })
          setExamineInfo(temp)
        }

      }).catch(e=>{
        console.log("数据错误",e)
      })

    }

    const getUserTraineesInfo = ()=>{
      const params = {
        user_id,
        room_id
      }
      $api.traineesApi.getUserTraineesInfo(params).then(data=>{
        console.log("获取数据成功",data)
        if(data && data.length > 0){
          const stu_answer =JSON.parse(data[0].stu_answer)
          console.log("学生的答案",stu_answer)
          // const temp = stu_answer.map(item =>{
          //   return {...item,stu_answer:''}
          // })
          setScore(data[0].score)
          setMyAnswer(stu_answer)
        }
        
      }).catch(e=>{
        console.log("数据错误",e)
      })

    }
     useEffect(()=>{
      console.log({user_id,room_id})
        // 查看考核题目
      getExamineInfo()

  },[])

  const tabs = useMemo(()=>{
    return [{title:<Badge>{'我的作业'}</Badge>,type_id:1},{title:<Badge>{'我的答案'}</Badge>,type_id:2}]
  })

   const handleTabChange =(tab,index)=>{
      if(tab.type_id === 2){
        getUserTraineesInfo()
      }
   }

   const handleSubmit = () =>{
    const params = {
      user_id,
      room_id,
      stu_answer:JSON.stringify(examineInfo)
    }

     console.log("提交作业",examineInfo)

     $api.traineesApi.editTrainees(params).then(data=>{
        console.log("获取数据成功",data)
        if(data && data.code === 200){
          Toast.success('提交成功', 1);
          // setTabPage(2)
        }
      }).catch(e=>{
        console.log("数据错误",e)
      })
    
   }

  console.log("作业信息",examineInfo,myAnswer)
  return (<div>
       <NavBar
          icon={<Icon type="left" />}
          onLeftClick={() => window.history.back()}
          >作业页</NavBar>
        <Tabs tabs={tabs}
          initialPage={tabPage}
          onChange={(tab, index) => { handleTabChange(tab,index) }}
        >
          <div>
          {examineInfo && examineInfo.map((item,index)=>{
            return <div key={index} style={{margin:'10px'}}>
              <p style={{backgroundColor:'#fbf1cb',margin:0,padding:'10px',fontWeight:'bold',fontSize:'16px'}}>问题:{item.problem}</p>
              <InputItem 
                style={{height:'50px'}} 
                 onChange={e => item.stu_answer = e}
                >  
              </InputItem>
            </div>
        })}

           {
             (examineInfo && examineInfo.length > 0) &&
             <WingBlank>
              <Button type="warning" onClick={()=>handleSubmit()}>提交答案</Button>
          </WingBlank>
          }
          </div>
          <div>
            <p style={{marginBottom:'20px',padding:'10px',display:'flex',justifyContent:'flex-end'}}>
              <span style={{fontSize:'16px',color:'red'}}>{score ? '分数:'+ score :'未评分' }</span>
              {/* 分数：100 */}
              {/* 未评分 */}
            </p>
             {myAnswer && myAnswer.map((item,index)=>{
            return <div key={index} style={{margin:'10px'}}>
              <p style={{backgroundColor:'#fff',margin:0,padding:'10px',fontWeight:'bold',fontSize:'16px'}}>问题:{item.problem}</p>
              <p style={{backgroundColor:'#fff',margin:0,color:'#ffa200',padding:'10px',fontWeight:'bold',fontSize:'16px'}}>参考答案:{item.answer}</p>
              <p style={{backgroundColor:'#fff',margin:0,padding:'10px',fontWeight:'bold',fontSize:'16px'}}>我的答案:{item.stu_answer}</p>

             
              {/* <InputItem 
                style={{height:'50px'}} 
                 onChange={e => item.stu_answer = e}
                >  
              </InputItem> */}

              
            </div>
        })}
          </div>
         

    </Tabs>
  </div>);
}

