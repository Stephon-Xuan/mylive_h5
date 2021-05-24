import React, {Component, useEffect, useMemo, useState} from 'react';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import { ListShow } from '../../components/ListShow/ListShow';
import { sortData } from './sortData'
import $api from '../../api'

export const TabList = () => {
  const {personal_growth} = sortData
  const [tabList,setTabList] = useState([])
  const [tabItem,setTabItem] = useState({})
  const [lectureList,setLectureList] = useState([])
  const [init,setInit] = useState(true)

  const tabs = useMemo(()=>{
    if(tabList.length === 0){
      return []
    }
    const result = tabList.map(item =>{
      return {title:<Badge>{item.type_name}</Badge>,type_id:item.type_id}
    })
    return result
  },[tabList])

  const listData = useMemo(()=>{
    return lectureList
  },[lectureList])

  useEffect(()=>{
    $api.livingRoomApi.getRoomType().then(data=>{
      setTabList(data)
    }).catch(e=>{
      console.log("错误",e)
    })
  },[])

  const handleTabChange = (tab,index) =>{
    const params = {
      type:tab.type_id
    }
    $api.livingRoomApi.getRoomList(params).then(data=>{
      setLectureList(data)
    }).catch(e =>{
      console.log("请求错误",e)
    })
  }

  // 初始化tab
  useEffect(()=>{
    if(init && tabs.length > 0){
      handleTabChange(tabs[0])
      setInit(false)
    }
  },[tabs,init])


  return(
  <div>
    <Tabs tabs={tabs}
      initialPage={0}
      onChange={(tab, index) => { handleTabChange(tab,index) }}
      // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
    >
       <div style={{backgroundColor: '#fff' }}>
         {<ListShow listData={ listData }></ListShow>}
      </div>
    </Tabs>
  </div>
  )
}

