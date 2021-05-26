// import baseEnv from "@/assets/js/config.js"
// import baseEnv from "../common/js/config";
const baseEnv = {
  socketUrl: {
    barrage: "http://localhost:8511/barrage", //这里要域名一致，卡了很久，我去。。。。
  },
};
console.log("socket的链接", baseEnv.socketUrl.barrage);
const socketBarrage = require("socket.io-client")(baseEnv.socketUrl.barrage);
console.log({ socketBarrage, baseEnv, url: baseEnv.socketUrl.barrage });

// socketBarrage.on('connect', (res) => {
//     console.log('连接成功',res);
// })
// socketBarrage.on('chatLiveRoom', res => {
//   console.log("拿到的值", res)
// })
class SockBarrage {
  //加入房间
  joinRoom(name) {
    console.log("加入直播间", name);
    socketBarrage.emit("JOINROOM", name);
  }

  //离开房间
  leaveRoom(name) {
    console.log("离开直播间", name);
    socketBarrage.emit("LEAVEROOM", name);
  }

  //房间内发送消息
  roomChat(data) {
    console.log("发送消息", data);
    socketBarrage.emit("ROOMCHAT", data);
  }

  roomConnnet(name) {
    socketBarrage.on(name, (res) => {
      console.log(name, "111连接成功", res);
    });
  }
}

const sockBarrage = new SockBarrage();

// sockBarrage.roomConnnet('connect')
// sockBarrage.roomConnnet('chatLiveRoom')

export { sockBarrage, socketBarrage };
