/*
登陆的路由组件
 */

import React, {Component,useState} from 'react'
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
import './Login.css'
import { Route, useHistory } from "react-router-dom";
import $api from '../../api'

export const Login =() => {
  const history = useHistory()
  const [email,setEmail] = useState('')
  const [username,setName] = useState('')
  const [password,setPassword] = useState('')

  const toRegister = () => {
    history.push('/register')
  }

  const handleLogin =() =>{
    if(!email || !password){
      Toast.fail('请填写完整的用户信息', 1);
      return
    }
    if(email.indexOf('@') < 0){
      Toast.info('邮箱格式不正确', 1);
      return
    }

    const params ={
      account:email,
      password
    }

    $api.userApi.userLogin(params).then(data =>{
      Toast.success('登录成功', 1);
      console.log(data)
      if(data && data.code === 200){
        localStorage.setItem("user_id",data.user_id)
        history.push('/')
        return
      }
      Toast.fail('登录失败', 1);
    }).catch(e =>{
      console.log("错误",e)
      Toast.fail('登录失败', 1);
    })
    console.log({email,password})
    
  }

  return (
    <div>
      <NavBar
          icon={<Icon type="left" />}
        onLeftClick={() => window.history.back()}
      >在线微课</NavBar>
      {/* <Logo/> */}
      
      <WingBlank>
          <div className="login_wrap">
              <img src="http://localhost:8080/img/logo.1a2850a7.jpg"></img>
              <List>
                  {/* {msg ? <div className='error-msg'>{msg}</div> : null} */}
                  <WhiteSpace/>
                  <InputItem placeholder='请输入邮箱' onChange={val => {setEmail(val)}}>邮箱</InputItem>
                  <WhiteSpace/>
                  <InputItem placeholder='请输入密码' type="password" onChange={val => {setPassword(val)}}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
                  <WhiteSpace/>

                  <Button type='primary' onClick={handleLogin}>登&nbsp;&nbsp;&nbsp;陆</Button>
                  <WhiteSpace/>
                  <Button onClick={toRegister}>还没有账户</Button>
              </List>
          </div>
      </WingBlank>
    </div>
  )
}
