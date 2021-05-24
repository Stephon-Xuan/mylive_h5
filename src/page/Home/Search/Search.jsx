import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import React, { useState } from 'react'

// 装饰
export const SearchBarBtn = () => {
  
  const [value,setValue] = useState('')
  
  const clear = () => {
    setValue('');
  };


  return (<div>
    <SearchBar 
      placeholder="Search" 
      maxLength={8}
    />   
  </div>);
}

