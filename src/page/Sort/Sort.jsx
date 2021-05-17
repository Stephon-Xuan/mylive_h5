import React, {Component, useMemo} from 'react';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import { ListShow } from '../../components/ListShow/ListShow';
import { sortData } from './sortData'

const tabs = [
  { title: <Badge>个人成长</Badge> },
  { title: <Badge>赚钱理财</Badge> },
  { title: <Badge>享受生活</Badge> },
  { title: <Badge>其他</Badge> },
];


export const TabList = () => {
  const {personal_growth} = sortData

  const listData1 = useMemo(()=>{
    return personal_growth
  })

  return(
  <div>
    <Tabs tabs={tabs}
      initialPage={0}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
    >
      <div style={{backgroundColor: '#fff' }}>
         {<ListShow listData={ listData1 }></ListShow>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        Content of second tab
        {/* <List></List> */}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        Content of third tab
        {/* <List></List> */}
      </div>
    </Tabs>
  </div>
  )
}

