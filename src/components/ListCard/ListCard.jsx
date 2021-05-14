import Item from "antd-mobile/lib/popover/Item";
import React from "react";
import ReactDOM from 'react-dom';

export const ListCard = (props)=> {
       const { listItem } = props
        return(
            <div>
                <div style={{ padding: '0 15px',marginTop:'5px' }}>
                {/* <div
                    style={{
                    lineHeight: '50px',
                    color: '#888',
                    fontSize: 18,
                    borderBottom: '1px solid #F6F6F6',
                    }}
                   
                >{111}</div> */}
                <div style={{ display: '-webkit-box', display: 'flex', 
                        padding: '15px 0', 
                        backgroundColor:'#fff'
                    }}
                     onClick={()=>{ console.log('这节直播课')}}
                >
                    <img style={{ height: '64px', width:'96px', marginRight: '15px' }} src={listItem.image} alt="" />
                    <div style={{ lineHeight: 1 }}>
                    <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{listItem.title}</div>
                    {/* <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>35</span></div> */}
                    <div style={{}}><span>{ listItem.description }</span></div>
                    </div>
                </div>
                </div>
            </div>
        )
    }