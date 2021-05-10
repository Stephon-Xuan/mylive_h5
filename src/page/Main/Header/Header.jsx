import { NavBar, Icon } from 'antd-mobile';
import React from 'react'

// ReactDOM.render(
export const Header = (props) => {    
  const { title } = props
  return( <div>
    <NavBar
      mode="dark"
      // leftContent="Back"
      // rightContent={[
      //   <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
      //   // <Icon key="1" type="ellipsis" />,
      // ]}
    >{title}</NavBar>
  </div>
  )
    }
//   , mountNode);