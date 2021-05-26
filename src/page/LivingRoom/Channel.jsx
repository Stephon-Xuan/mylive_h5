import React, {Component, useEffect, useState} from 'react'
import { ListShow } from '../../components/ListShow/ListShow'

import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Button,
  Icon,
  Toast
} from 'antd-mobile'
import { getQueryVariable } from '../../utils/utils'
import { Route, useHistory } from "react-router-dom";
import $api from '../../api'

export const Channel =() =>{
    const [channel,setChannel] = useState({
        avatar: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1818070732,1009095059&fm=26&gp=0.jpg",
        channel_id: 1,
        channel_name: "新建专栏",
        name: "用5555",
        user_id: "RGmP7jpNuXRleQhHBHGmLnIjkKUaPA8i"
    })

    const [lecture,setLecture] = useState([])

    useEffect(()=>{
        const user_id =localStorage.getItem('user_id')
        const channel_type = getQueryVariable('id')
         const params = {
            user_id,
            channel_type
        }
         $api.channelApi.channelDetail(params).then(data=>{
            console.log("专栏信息请求成功",data)
            setChannel(data)
         }).catch(e =>{
             console.log("请求错误")
         })

         $api.livingRoomApi.getRoomList(params).then(data=>{
            console.log("请求成功",data)
            setLecture(data)
        }).catch(e =>{
            console.log("错误",e)
        })
    },[])
    
    return(
        <div>
        <NavBar
          icon={<Icon type="left" />}
          onLeftClick={() => window.history.back()}
          >{channel.channel_name}</NavBar>
        
        {/* <div style={{backgroundColor:'#d4d2d2',height:'100px',color:'',fontSize:'20px',display:'flex',alignItems:'center'}}> */}
            {/* <img src></img> */}
            {/* <div>封面</div> */}
            {/* <div>专栏名称：{channel.channel_name}</div> */}
            {/* <div>用户</div> */}
        {/* </div> */}

        

         <ListShow listData={ lecture }></ListShow>
        </div>
        
       
    )
}