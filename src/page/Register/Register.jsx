/*
登陆的路由组件
 */

import React, {Component, useState} from 'react'
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
import {Redirect} from 'react-router-dom'
import './Register.css'
import $api from '../../api'
import { Route, useHistory } from "react-router-dom";

export const Register = () => {
  const history = useHistory()
  const [email,setEmail] = useState('')
  const [username,setName] = useState('')
  const [password,setPassword] = useState('')
  const toLogin = () => {
    if(!email || !username || !password){
      Toast.fail('请填写完整的用户信息', 1);
      return
    }
    if(email.indexOf('@') < 0){
      Toast.info('邮箱格式不正确', 1);
      return
    }

    const params ={
      name:username,
      email,
      age:0,
      password
    }

    $api.userApi.addUser(params).then(data =>{
      Toast.success('注册成功', 1);
      history.push('/login')
    }).catch(e =>{
      console.log("错误",e)
      Toast.fail('注册失败', 1);
    })
    console.log({email,username,password})
  }

    return (
      <div>
        <NavBar
          icon={<Icon type="left" />}
          onLeftClick={() => window.history.back()}
          >在线微课-注册</NavBar>
        {/* <Logo/> */}
        
        <WingBlank>
            <div className="login_wrap">
                <img
                  style={{}}
                  src="http://localhost:8080/img/logo.1a2850a7.jpg"></img>
                <List>
                    {/* {msg ? <div className='error-msg'>{msg}</div> : null} */}
                    <InputItem placeholder='请输入昵称' onChange={val => {setName(val)}}>昵称:</InputItem>
                    <WhiteSpace/>
                    <InputItem placeholder='请输入邮箱' onChange={val => {setEmail(val)}}>邮箱:</InputItem>
                    <WhiteSpace/>
                    <InputItem placeholder='请输入密码' type="password" onChange={val => {setPassword(val)}}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
                    <WhiteSpace/>

                    <Button type='waring' onClick={toLogin}>注&nbsp;&nbsp;&nbsp;册</Button>
                </List>
            </div>
        </WingBlank>
      </div>
    )
    }