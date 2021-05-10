import React, { Component } from 'react';
import { Button, InputItem } from 'antd-mobile';
import './LivingRoom.css'


export default class barrage extends Component{

    chatLiveRoom(){
        console.log("发送")
    }

    render(){
        return(
            <div>
                <div className={"chat-container"}>
                 {
                    ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'].map((item,index) =>{
                        return <div key={index}>{ "名称" + item }</div>
                    })
                 }
                </div>
                <section className={"barrage-msg"}>
                    <InputItem   placeholder="请输入弹幕"  />
                    <Button type="primary"  onClick={this.chatLiveRoom()}>发送</Button>
                </section>
            </div>
        )
    }
       
    

}