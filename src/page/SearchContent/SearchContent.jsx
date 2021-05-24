import React, {Component, useMemo, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { SearchBtn } from './SearchBtn.jsx'
import {
  NavBar,
  Icon
} from 'antd-mobile'
import { ListShow } from '../../components/ListShow/ListShow'
import $api from '../../api'

export const SearchContent = () => {
        const [list,setList] = useState([])
        const listData = useMemo(()=>{
            return list  
        },[list])

        const getValue = (val) =>{
            console.log("拿到值",val)
            const params ={
                keyword:val
            }
            $api.livingRoomApi.getRoomList(params).then(data =>{
                setList(data)
            }).catch(e=>{
                console.log("请求失败",e)
            })
        }
        return(
            <div>
               <NavBar
                icon={<Icon type="left" />}
                onLeftClick={() => window.history.back()}
               >在线微课-搜索</NavBar>
                <SearchBtn getValue={getValue}></SearchBtn>
                <ListShow listData={listData}></ListShow>
            </div>
        )
    }
