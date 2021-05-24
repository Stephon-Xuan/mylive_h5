import { List, Button ,WingBlank,Card, WhiteSpace} from 'antd-mobile';
import React, { useEffect, useState } from "react";
import $api from '../../api'
const Item = List.Item;

export const Mine =() => {
  const user_id =localStorage.getItem('user_id')  
  const [userInfo,setUserInfo] = useState({
    age: 18,
    avatar: "http://p1.music.126.net/HHld8HW1sje1MP6PuzFWZg==/109951164045790653.jpg",
    createTime: null,
    email: "3@qq.com",
    id: "cpMTduWM9VVYVkavefZsTQkwSlLnSkYp",
    name: "新用户",
    password: "123456",
    updateTime: null,
    visit_total: null,
    visited_total: null,
    integral_total:0
  })

  useEffect(()=>{
    $api.userApi.getUserInfo(user_id).then(data =>{
      // console.log("数据",data)
      if(data && data.code === 200){
        setUserInfo(data.data)
      }
      
    }).catch(e=>{
      console.log("错误",e)
    })

  },[])
 

  return (<div>
      <List renderHeader={() => '个人信息'} className="my-list">
          <Item>
              <div style={{padding:'5px 20px',backgroundColor:"#d7dbde",color:'#fff'}}>
              <div style={{display:'flex',alignItem:'center',height:'50px'}}>
                  <img style={{
                    width: '40px',
                    height: '40px',
                    borderRadius:'50%'
                    }}
                    src={userInfo.avatar}>
                    </img>
                    <span style={{lineHeight:"40px",marginLeft:'5px'}}> { userInfo.name } </span>
              </div>
              
              {
              // roomInfo.description && 
                <div style={{}}>
                  {/* <p>直播详情：</p> */}
                  {'这个人很懒，什么都没写'}
                </div>
              // <Notice title = {roomInfo.description}></Notice>
              }
            </div>


          </Item>
          <Item 
              // thumb="https://alifei03.cfp.cn/creative/vcg/800/new/VCG41N1136358850.jpg"
              // extra={'1405028323@qq.com'}
              width={'100px'}
              >
                  邮箱
                  <span style={{float:'right',color:'#ada2a2'}}>{userInfo.email}</span>
          </Item>
          <Item
              // thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              // arrow="horizontal"
              onClick={() => {}}
              >积分
                  <span style={{float:'right',color:'#ada2a2'}}>{userInfo.integral_total}</span>
              </Item>
          {/* <Item
          thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
          onClick={() => {}}
          arrow="horizontal"
          >
          My Cost Ratio
          </Item> */}
          <Item>
              <WingBlank>
                  <Button type="warning" onClick={()=>{window.location.assign('/login')}}>退出登录</Button>
              </WingBlank>
          </Item>
      </List>
      
  </div>);
}


