import Item from "antd-mobile/lib/popover/Item";
import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import {
  Modal,
  Toast,
  Badge 
} from 'antd-mobile'

const alert = Modal.alert;

export const ListCard = (props)=> {
       const user_id =localStorage.getItem('user_id')  
       const { listItem } = props


       useEffect(()=>{
        //    console.log("是否已购买",listItem.isPay)
       },[listItem])
	   
        return(
            <div  style={{width:'100%'}}>
             
     
   
                <div style={{ padding: '0 15px',marginTop:'5px',width:'100%'}}>
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
                        backgroundColor:'#fff',
                        width:'100%'
                    }}
                >
                    <img style={{ height: '64px', width:'96px', marginRight: '15px' }} src={listItem.image} alt="" />
                    <div style={{ lineHeight: 1 }}>
                    <div style={{fontWeight: 'bold',marginBottom:'5px'}}>{listItem.title}<Badge text={''} style={{ marginLeft: 12 }} /></div>
                    <div style={{ marginBottom: '8px',display:'flex',alignItem:'center',width:'100%'}}>
                        <img style={{
                            width: '22px',
                            height: '22px',
                            borderRadius:'50%'
                        }}
                        src={listItem.avatar}></img>    
                        <span style={{lineHeight:'22px'}}>
                            {listItem.name}
                        </span>
                        
                    </div>
                    {/* <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>35</span></div> */}
                    <div style={{}}>
                            {listItem && !listItem.isPay && <span style={{margin:'5px',color:'red',fontWeight:'bold'}}>{(listItem.integral_fee && listItem.integral_fee !==0) ? '￥'+ listItem.integral_fee : '免费'}</span>}
                            <span>{ listItem.description }</span>
                        </div>
                          
                    </div>
                    
                </div>
                </div>
               
            </div>
        )
    }