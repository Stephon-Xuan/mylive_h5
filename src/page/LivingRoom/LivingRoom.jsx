import { ListShow } from '../../components/ListShow/ListShow'
import {
  NavBar,
  WingBlank,
  InputItem,
  WhiteSpace,
  Button
} from 'antd-mobile'
import { livingRoomData } from './livingRoomData'


export const LivingRoom = ()=>{
    return(
        <div>
            <NavBar>我的直播间</NavBar>
            {/* <List></List> */}
             {/* 加载列表------------------ */}
             <ListShow listData={ livingRoomData }></ListShow>
        </div>
    )
}