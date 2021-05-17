/*
登陆的路由组件
 */

import React, {Component} from 'react'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Button,
  Icon
} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import './Register.css'


const ListItem = List.Item

export class Register extends Component {
  state = {
    emial:'',
    username: '',  // 用户名
    password: '',  // 密码
  }

  register = () => {
    this.props.register(this.state)
  }

  // 处理输入数据的改变: 更新对应的状态
  handleChange = (name, val) => {
    // 更新状态
    this.setState({
      [name]: val  // 属性名不是name, 而是name变量的值
    })
  }

  toRegister = () => {
    this.props.history.replace('/register')
  }

  render() {

    // const {msg, redirectTo} = this.props.user
    // 如果redirectTo有值, 就需要重定向到指定的路由
    // if(redirectTo) {
    //   return <Redirect to={redirectTo}/>
    // }

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
                    <InputItem placeholder='请输入昵称' onChange={val => {this.handleChange('username', val)}}>昵称:</InputItem>
                    <WhiteSpace/>
                    <InputItem placeholder='请输入用户名' onChange={val => {this.handleChange('username', val)}}>邮箱:</InputItem>
                    <WhiteSpace/>
                    <InputItem placeholder='请输入密码' type="password" onChange={val => {this.handleChange('password', val)}}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
                    <WhiteSpace/>

                    <Button type='waring' onClick={this.register}>注&nbsp;&nbsp;&nbsp;册</Button>
                </List>
            </div>
        </WingBlank>
      </div>
    )
  }
}