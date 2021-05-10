// import logo from './logo.svg';
// import './App.css';
import { Button } from "antd-mobile";
import { Main } from "./page/Main/Main";
import { Login } from "./page/Login/Login";
import { Register } from "./page/Register/Register";
import { LivePlay } from "./page/LivingRoom/LivePlay";
import { SearchContent } from "./page/SearchContent/SearchContent.jsx";
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
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/search" component={SearchContent}></Route>
          <Route path="/" component={Main}></Route>
          {/* <Route component={NotFound} /> */}
        </Switch>
        {/* </Router> */}
      </BrowserRouter>
      {/* <Main></Main> */}
    </div>
  );
}

export default App;
