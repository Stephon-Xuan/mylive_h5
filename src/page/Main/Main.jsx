import { TabBar } from "antd-mobile";
import React from "react";
import { Home } from "../Home/Home.jsx"
import { LivingRoom } from "../LivingRoom/LivingRoom.jsx";
import { Mine } from "../Mine/Mine.jsx";
import { TabList } from '../Sort/Sort'
import { Header } from './Header/Header'
import $api from '../../api'

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "homeTab",
      hidden: false,
      fullScreen: true, //是否全屏
    };
  }

  componentDidMount(){
    // this.$api.reqLivingList()
    console.log($api.livingRoomApi.getRoomList())
  }

  renderContent(pageText) {
    return (
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          textAlign: "center",
        }}
      >
        <div style={{ paddingTop: 60 }}>
          Clicked “{pageText}” tab， show “{pageText}” information
        </div>
        {/* <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
          Click to switch fullscreen
        </a> */}
      </div>
    );
  }

  render() {
    return (
      <div
        style={
          this.state.fullScreen
            ? { position: "fixed", height: "100%", width: "100%", top: 0 }
            : { height: 400 }
        }
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat",
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat",
                }}
              />
            }
            selected={this.state.selectedTab === "homeTab"}
            // badge={1}
            onPress={() => {
              this.setState({
                selectedTab: "homeTab",
              });
            }}
            data-seed="logId"
          >
            <Header title='首页'></Header>
            {/* {this.renderContent("Life")} */}
            <Home></Home>
            {/* <List></List> */}
            
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat",
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat",
                }}
              />
            }
            title="分类"
            key="sort"
            badge={"new"}
            selected={this.state.selectedTab === "sortTab"}
            onPress={() => {
              this.setState({
                selectedTab: "sortTab",
              });
            }}
            data-seed="logId1"
          >
            {/* {this.renderContent("Koubei")} */}
             <Header title='分类'></Header>
            <TabList></TabList>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat",
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat",
                }}
              />
            }
            title="我的直播间"
            key="living"
            dot
            selected={this.state.selectedTab === "greenTab"}
            onPress={() => {
              this.setState({
                selectedTab: "greenTab",
              });
            }}
          >
            {/* {this.renderContent("Friend")} */}
            <LivingRoom></LivingRoom>
          </TabBar.Item>
          
          <TabBar.Item
            icon={{
              uri:
                "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg",
            }}
            selectedIcon={{
              uri:
                "https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg",
            }}
            title="个人中心"
            key="mine"
            selected={this.state.selectedTab === "mineTab"}
            onPress={() => {
              this.setState({
                selectedTab: "mineTab",
              });
            }}
          >
            {/* {this.renderContent("My")} */}
            <Header title="个人中心"></Header>
            <Mine></Mine>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
