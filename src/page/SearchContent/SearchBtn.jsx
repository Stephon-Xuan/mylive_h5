import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import React from 'react'

export class SearchBtn extends React.Component {
  state = {
    value: '',
  };
//   componentDidMount() {
//     this.autoFocusInst.focus();
//   }
  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
//   handleClick = () => {
//     this.manualFocusInst.focus();
//   }
  render() {
    return (<div>
      <SearchBar 
        placeholder="Search" 
        maxLength={8}
        
        // value={this.state.value}
        // placeholder="Search"
        onSubmit={value => console.log(value, 'onSubmit')}
        // onClear={value => console.log(value, 'onClear')}
        // onFocus={() => console.log('onFocus')}
        // onBlur={() => console.log('onBlur')}
        // onCancel={() => console.log('onCancel')}
        // showCancelButton
        // onChange={this.onChange}
      />   
    </div>);
  }
}
