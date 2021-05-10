import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { SearchBtn } from './SearchBtn.jsx'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Button
} from 'antd-mobile'

export class SearchContent extends Component {
    render(){
        return(
            <div>
               <NavBar>在线微课-搜索</NavBar>
                <SearchBtn></SearchBtn>
                <div>搜索出来的列表</div>
            </div>
        )
    }
}