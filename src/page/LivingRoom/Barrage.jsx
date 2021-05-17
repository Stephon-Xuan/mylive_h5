import React, { Component, useEffect, useMemo } from 'react';
import { Button, InputItem } from 'antd-mobile';
import {sockBarrage,socketBarrage} from "../../api/socket"
import './LivingRoom.css'


export const Barrage = () =>{
    // 获取进来的用户id

    // 缺陷：连接不到同一个webSocket,拿到相同的数据   TODO
    useEffect(()=>{
        //加入直播间
        sockBarrage.joinRoom("当前用户")

        console.log("请求弹幕")
        socketBarrage.on("chatLiveRoom",res=>{
            console.log("弹幕列表",res)
        })
    },[])

    const barrageList = useMemo(()=>{
        return [
            {
                name:'有抱负的幻想',
                avatar:'https://t11.baidu.com/it/u1=3874979290&u2=862217382&fm=76',
                msg:"好看，学到了"
            },
            {
                name:'工藤新一',
                avatar:'https://tse4-mm.cn.bing.net/th/id/OIP.Grcz77jHvJ9MiU-8Nh61uAHaEK?w=316&h=180&c=7&o=5&pid=1.7',
                msg:"真好，长见识了，哈哈哈"
            },
            {
                name:'大陈',
                avatar:'https://tse3-mm.cn.bing.net/th/id/OIP.54yL3RVXgEUbEwxnMEMQCQHaNK?w=115&h=187&c=7&o=5&pid=1.7',
                msg:"楼上真的是"
            },
            {
                name:'花有重开日@人无再少年',
                avatar:'https://tse2-mm.cn.bing.net/th/id/OIP.RxrLEIWqLW9wN5tCvSLgugHaNK?w=115&h=182&c=7&o=5&pid=1.7',
                msg:"不错！！！！！！！！！！！！！"
            },
            {
                name:'🌸小怪兽',
                avatar:'https://thirdwx.qlogo.cn/mmopen/ta7KmdrFAxY1WF3icaDPoQibhGbjxNn5ibkgcWY0ruya29KkicskpeRMhQKvoiaOp7yPzVtgWe8uPnajR1x9UO1oBXGFDchBZ9jXm/132',
                msg:"咿呀"
            },
        ]
    })





    const chatLiveRoom = () => {
        console.log("触发弹幕")
        sockBarrage.roomChat("x555")
    }
        return(
            <div>
                <div className={"chat-container"}>
                 {
                    barrageList.map((item,index) =>{
                        return <div key={index}>
                                <div style={{padding:'5px 20px',backgroundColor:"#191919",color:'#fff',borderRadius:'5px'}}>
                                        <div style={{display:'flex',alignItem:'center',height:'35px'}}>
                                            <img style={{
                                            width: '30px',
                                            height: '30px',
                                            borderRadius:'50%'
                                            }}
                                            src={item.avatar}>
                                            </img>
                                            <span style={{lineHeight:"30px",color:'#948585',marginLeft:'5px'}}> { item.name } </span>
                                        </div>
                                        <div style={{padding:'0 30px'}}>
                                            {item.msg}
                                        </div>
                                    </div>
                            </div>
                    })
                 }
                </div>
                <section className={"barrage-msg"} style={{backgroundColor:"#fff"}}>
                    <InputItem   placeholder="请输入弹幕"  style={{width:'250px'}}/>
                    <Button type="primary" 
                      style={{width:"100px",backgroundColor:'#f63838'}}
                      onClick={() => chatLiveRoom()}>发送</Button>
                </section>
            </div>
        )
    }
       
    

