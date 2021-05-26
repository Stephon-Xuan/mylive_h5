import { SearchBar, Button, WhiteSpace, WingBlank,NavBar,Icon} from 'antd-mobile';
import React, { useEffect, useState } from 'react'
import $api from '../../api'
 import { Route, useHistory } from "react-router-dom";


export const GetRecord = () => {
    const user_id =localStorage.getItem('user_id')  
    const history = useHistory()

    const [record,setRecord] = useState([])

     useEffect(()=>{
        $api.analysisApi.getAnalysisList({user_id}).then(data =>{
        if(data && data.length > 0){
            console.log("数据------",data)
             if(data[0].visit_history){
                const visit_history = JSON.parse(data[0].visit_history)
                setRecord(visit_history)
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
          >访问记录</NavBar>

        {record && record.map((item,index)=>{
            return <div key={index} style={{margin:'10px'}}>
                <Button onClick={()=>{goTolivingRoom(item)}}>{item.title}</Button>
            </div>
        })}
  </div>);
}

