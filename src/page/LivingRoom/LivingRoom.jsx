import { ListShow } from '../../components/ListShow/ListShow'
import {
  NavBar,
  WingBlank,
  InputItem,
  WhiteSpace,
  Button
} from 'antd-mobile'
import { livingRoomData } from './livingRoomData'
import { useEffect, useState } from 'react'
import $api from '../../api'
import { Route, useHistory } from "react-router-dom";



export const LivingRoom = ()=>{
    const user_id =localStorage.getItem('user_id')
    const [channel,setChannel] = useState([])

    const history = useHistory()
    
    const handleGoTo = (id) => {
            history.push(`/channel?id=${id}`,id)
       }

    useEffect(()=>{
        $api.channelApi.getChannelList(user_id).then(data=>{
            console.log("专栏列表请求成功",data)
            setChannel(data)
        }).catch(e =>{
            console.log("错误",e)    
        })
    },[])


    return(
        <div>
            <NavBar>我的直播间</NavBar>
             {
                channel.map((item,index) =>{
                    return <div key={index}>
                        {/* <ListCard listItem={item}></ListCard>    */}
                        <div
                            onClick={()=>{handleGoTo(item.channel_id)}} 
                            style={{height:'50px',padding:'10px',backgroundColor:'#fff',margin:'10px 0'}}>
                            {item.channel_name}
                            </div>

                        </div>
                })
            }
            
        </div>
    )
}