import React, { Component, useEffect, useMemo, useState, useCallback } from 'react';
import { Button, InputItem } from 'antd-mobile';
import { sockBarrage, socketBarrage } from "../../api/socket"
import './LivingRoom.css'
import { common } from "../../common/js/common"


export const Barrage = (props) => {
    const { roomInfo } = props
    const [value, setValue] = useState('rrr')
    const [barrageItem, setBarrageItem] = useState([])
    const [barrageArr, setBarrageArr] = useState([])
    const [isSend, setIsSend] = useState(true)
    const barrageMsg = []

    // 获取进来的用户id

    const barrageList = useMemo(() => {
        return [
            ...barrageArr
        ]
    }, [barrageArr])

    // 缺陷：连接不到同一个webSocket,拿到相同的数据   TODO
    useEffect(() => {
        //加入直播间
        // console.log("直播间信息", roomInfo)
        if (!roomInfo) return
        console.log(roomInfo.room_id)
        sockBarrage.joinRoom(roomInfo.room_id)
    }, [roomInfo])

    // 获取消息列表
    useEffect(() => {
        socketBarrage.on("chatLiveRoom", res => {
            // console.log("直播间拿到的值", barrageItem, res)
            barrageMsg.push(res)
            setBarrageArr([...barrageMsg])
        })
        // 取消监听
        return () => {
            socketBarrage.off("chatLiveRoom", () => { })
            sockBarrage.leaveRoom(roomInfo.room_id)
        }
    }, [])

    const chatLiveRoom = () => {
        const livingRoom = common.getUrlParam("room")
        let data = {
            room: roomInfo.room_id,
            func: 'chatLiveRoom',
            data: {
                user: roomInfo.name,
                user_id: roomInfo.id,
                name: roomInfo.name,
                avatar: roomInfo.avatar,
                msg: value
            }
        }
        console.log("弹幕消息", barrageArr)
        // 发送弹幕
        sockBarrage.roomChat(data, res => {
            console.log("发送成功", res)
        })
    }

    const handleChange = useCallback((e) => {
        const tempValue = e
        setValue(tempValue)
    }, [])

    return (
        <div>
            <div className={"chat-container"}>
                {
                    barrageList.map((item, index) => {
                        return <div key={index}>
                            <div style={{ padding: '5px 20px', backgroundColor: "#191919", color: '#fff', borderRadius: '5px' }}>
                                <div style={{ display: 'flex', alignItem: 'center', height: '35px' }}>
                                    <img style={{
                                        width: '30px',
                                        height: '30px',
                                        borderRadius: '50%'
                                    }}
                                        src={item.avatar}>
                                    </img>
                                    <span style={{ lineHeight: "30px", color: '#948585', marginLeft: '5px' }}> {item.name} </span>
                                </div>
                                <div style={{ padding: '0 30px' }}>
                                    {item.msg}
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <section className={"barrage-msg"} style={{ backgroundColor: "#fff" }}>
                <InputItem
                    value={value}
                    placeholder="请输入弹幕"
                    style={{ width: '250px' }}
                    onChange={handleChange}
                />
                <Button type="primary"
                    style={{ width: "100px", backgroundColor: '#f63838' }}
                    onClick={() => chatLiveRoom()}>发送</Button>
            </section>
        </div>
    )
}



