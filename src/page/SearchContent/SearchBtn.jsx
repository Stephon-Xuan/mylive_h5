import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import React, { useState } from 'react'

// 装饰
export const SearchBtn = (props) => {
  const { getValue } = props
  const [value,setValue] = useState('')
  
  const clear = () => {
    setValue('');
  };

  const onSubmit =(val)=>{
    getValue(val)
  }


  return (<div>
    <SearchBar 
      placeholder="支持搜索直播课与用户昵称" 
      maxLength={8}
      onClear={clear}
      onSubmit={val => onSubmit(val)}
    />   
  </div>);
}

