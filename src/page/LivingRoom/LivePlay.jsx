import React, { useEffect } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import Reflv from './Reflv.jsx'
import Barrage from './Barrage'

export const LivePlay = ()=>{

    return(<div>
        <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
                // rightContent={[
                //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                //     <Icon key="1" type="ellipsis" />,
                // ]}
        >xxxx的直播间
        </NavBar>
        
            {/* 直播区域 */}
          <Reflv url={'http://xiaogan.live.cjyun.org/video/s10139-xg.flv'} type="flv"/>
                
            {/* 弹幕区域 */}
            <p>弹幕</p>
            <Barrage></Barrage>


    </div>)
}