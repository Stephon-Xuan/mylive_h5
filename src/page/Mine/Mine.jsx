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
                <Card>
                <Card.Header
                    title="This is title"
                    thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                    extra={<span>this is extra</span>}
                />
                {/* <Card.Body>
                    <div>This is content of `Card`</div>
                </Card.Body>
                <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
                </Card>
            </Item>
            <Item 
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                extra={'extra content'}>
                    邮箱
            </Item>
            <Item
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                // arrow="horizontal"
                extra={888}
                onClick={() => {}}
                >积分</Item>
            <Item
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
            onClick={() => {}}
            arrow="horizontal"
            >
            My Cost Ratio
            </Item>
            <Item>
                <WingBlank>
                    <Button type="warning" onClick={()=>{window.location.assign('/login')}}>退出登录</Button>
                </WingBlank>
            </Item>
        </List>
        
    </div>);
  }
}

