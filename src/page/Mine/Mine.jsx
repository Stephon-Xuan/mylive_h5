import { List, Button ,WingBlank,Card, WhiteSpace} from 'antd-mobile';
import React from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
const Item = List.Item;
const Brief = Item.Brief;

export class Mine extends React.Component {
  state = {
    disabled: false,
  }
  btnFn(){
    // this.props.history.push('/login')
  }

  render() {
    return (<div>
        <List renderHeader={() => '个人信息'} className="my-list">
            {/* <Item
                arrow="horizontal"
                // thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                multipleLine
                onClick={() => {}}
                >
                <img src="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" />Title <Brief>subtitle</Brief>
            </Item> */}
            <Item>
                {/* <Card>
                <Card.Header
                    title="This is title"
                    thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                    extra={<span>this is extra</span>}
                />
                <Card.Body>
                    <div>This is content of `Card`</div>
                </Card.Body>
                <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                </Card> */}
                <div style={{padding:'5px 20px',backgroundColor:"#d7dbde",color:'#fff'}}>
                <div style={{display:'flex',alignItem:'center',height:'50px'}}>
                    <img style={{
                      width: '40px',
                      height: '40px',
                      borderRadius:'50%'
                      }}
                      src={'http://p1.music.126.net/HHld8HW1sje1MP6PuzFWZg==/109951164045790653.jpg?param=180y180'}>
                      </img>
                      <span style={{lineHeight:"40px",marginLeft:'5px'}}> { 'stephon' } </span>
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
                    <span style={{float:'right',color:'#ada2a2'}}>{'1405028323@qq.com'}</span>
            </Item>
            <Item
                // thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                // arrow="horizontal"
                onClick={() => {}}
                >积分
                   <span style={{float:'right',color:'#ada2a2'}}>{'888'}</span>
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
}

