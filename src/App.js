// import logo from './logo.svg';
// import './App.css';
import { Button } from "antd-mobile";
import { Main } from "./page/Main/Main";
import { Login } from "./page/Login/Login";
import { Register } from "./page/Register/Register";
import { LivePlay } from "./page/LivingRoom/LivePlay";
import { Channel } from "./page/LivingRoom/Channel";
import { SearchContent } from "./page/SearchContent/SearchContent.jsx";
import { GetRoom } from "./page/GetRoom/GetRoom";
import { GetRecord } from "./page/GetRecord/GetRecord";
import { HomeWork } from "./page/HomeWork/HomeWork";
import { NotFound } from "./page/NotFound/NotFound";
import { TabList } from "./page/Sort/Sort";
import Api from "./api/index";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  BrowserRouter,
} from "react-router-dom";

import "antd-mobile/dist/antd-mobile.css";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <BrowserRouter>
        <Switch>
          <Route path="/livePlay" component={LivePlay}></Route>
          <Route path="/Channel" component={Channel}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/search" component={SearchContent}></Route>
          <Route path="/getRoom" component={GetRoom}></Route>
          <Route path="/getRecord" component={GetRecord}></Route>
          <Route path="/homework" component={HomeWork}></Route>
          <Route path="/" component={Main}>
            {/* <Router path="" component={}></Router> */}
            {/* <Route path="/sort" component={TabList}></Route> */}
          </Route>
          <Route component={NotFound} />
        </Switch>
        {/* </Router> */}
      </BrowserRouter>
      {/* <Main></Main> */}
    </div>
  );
}

export default App;
