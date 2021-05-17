import React, { useState,useEffect } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import Reflv from './Reflv.jsx'
import { Barrage } from './Barrage'
import { getQueryVariable } from '../../utils/utils'
import { Notice } from '../../components/Notice/Notice'
import $api from '../../api/index'

export const LivePlay = (props)=>{

  const [roomInfo,setRoomInfo] = useState(null)


    useEffect(()=>{
      // console.log("跳转过来的属性值",props.location.state)
      console.log("房间号",getQueryVariable('id'))
      
      // setRoomId(getQueryVariable('id'))
      
      $api.livingRoomApi.getRoomDetail({id:getQueryVariable('id')}).then(data =>{
        console.log("获取直播间信息成功",data)

        setRoomInfo(data)
      }).catch(e =>{
        console.log("请求错误",e)
      })
    },[])


    if(!roomInfo){
      return null
    }


    return(<div>
        <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => window.history.go(-1)}
                // rightContent={[
                //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                //     <Icon key="1" type="ellipsis" />,
                // ]}
        >
          {/* <img style={{
                width: '22px',
                height: '22px',
                borderRadius:'50%'
              }}
              src={roomInfo.avatar}></img> */}
          { roomInfo.title ? roomInfo.title :'直播间' }
        </NavBar>
              <div style={{padding:'5px 20px',backgroundColor:"#191919",color:'#fff'}}>
                <div style={{display:'flex',alignItem:'center',height:'50px'}}>
                    <img style={{
                      width: '40px',
                      height: '40px',
                      borderRadius:'50%'
                      }}
                      src={roomInfo.avatar}>
                      </img>
                      <span style={{lineHeight:"40px"}}> { roomInfo.name } </span>
                </div>
                
                {
                roomInfo.description && 
                  <div style={{}}>
                    {/* <p>直播详情：</p> */}
                    直播课描述：{roomInfo.description}
                  </div>
                // <Notice title = {roomInfo.description}></Notice>
                }
              </div>
              
            
            {/* 直播区域 */}
          {/* <Reflv url={'http://xiaogan.live.cjyun.org/video/s10139-xg.flv'} type="flv"/> */}
                
              {/* <Reflv url={'http://player0007.tudou-21vglb.com/flv/002/040/745/902040745.flv'} type="flv"/> */}
            
            {/* 弹幕区域 */}
            <div style={{backgroundColor:'#191919'}}>
                <p>弹幕</p>
                <Barrage></Barrage>
            </div>
            


    </div>)
}