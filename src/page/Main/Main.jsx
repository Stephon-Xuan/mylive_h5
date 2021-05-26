import { TabBar } from "antd-mobile";
import React from "react";
import { Home } from "../Home/Home.jsx"
import { LivingRoom } from "../LivingRoom/LivingRoom.jsx";
import { Mine } from "../Mine/Mine.jsx";
import { TabList } from '../Sort/Sort'
import { Header } from './Header/Header'
import $api from '../../api'
// import { IconFont } from '../../components/IconFont/IconFont'
import { imgPathTo } from '../../utils/utils'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  BrowserRouter,
} from "react-router-dom";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "homeTab",
      hidden: false,
      fullScreen: true, //是否全屏
    };
  }

  // history = useHistory()

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
                    `url(${imgPathTo('首页.svg')}) center center /  21px 21px no-repeat`,
                  
                }}
                className={'icon-shouye'}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    `url(${imgPathTo('首页.svg')}) center center /  21px 21px no-repeat`,
                }}
                className={'icon-shouye'}
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
            {this.state.selectedTab === "homeTab" && <Home></Home>}
            
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    `url(${imgPathTo('分类.svg')}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    `url(${imgPathTo('分类.svg')}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            title="分类"
            key="sort"
            // badge={"new"}
            selected={this.state.selectedTab === "sortTab"}
            onPress={() => {
              this.setState({
                selectedTab: "sortTab",
              });
              // window.location.replace('/sort')
            }}
            data-seed="logId1"
          >
            {/* {this.renderContent("Koubei")} */}
             <Header title='分类'></Header>
            {this.state.selectedTab==='sortTab' && <TabList></TabList>}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    `url(${imgPathTo('直播间.svg')}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    `url(${imgPathTo('直播间.svg')}) center center /  21px 21px no-repeat`,
                }}
              />
            }
            title="我的直播间"
            key="living"
            // dot
            selected={this.state.selectedTab === "greenTab"}
            onPress={() => {
              this.setState({
                selectedTab: "greenTab",
              });
            }}
          >
            {/* {this.renderContent("Friend")} */}
            {this.state.selectedTab ==='greenTab' && <LivingRoom></LivingRoom>}
          </TabBar.Item>
          
          <TabBar.Item
            icon={{
              uri:
                `${imgPathTo('个人中心.svg')}`,
            }}
            selectedIcon={{
              uri:
                `${imgPathTo('个人中心.svg')}`,
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
            {this.state.selectedTab === "mineTab" && <Mine></Mine>}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
