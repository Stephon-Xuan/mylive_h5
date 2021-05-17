// import baseEnv from "@/assets/js/config.js"
// import baseEnv from "../common/js/config";
const baseEnv = {
  socketUrl: {
    barrage: "http://localhost:8511",
  },
};
console.log("socket的链接", baseEnv.socketUrl.barrage);
const socketBarrage = require("socket.io-client")(baseEnv.socketUrl.barrage);
// console.log("socketBarrage", socketBarrage)
// console.log("baseEnv", baseEnv)
// console.log("baseEnv.socketUrl.barrage", baseEnv.socketUrl.barrage)

class SockBarrage {
  //加入房间
  joinRoom(name) {
    socketBarrage.emit("JOINROOM", name);
  }

  //离开房间
  leaveRoom(name) {
    socketBarrage.emit("LEAVEROOM", name);
  }

  //房间内发送消息
  roomChat(data) {
    socketBarrage.emit("ROOMCHAT", data);
  }
}

const sockBarrage = new SockBarrage();
export { sockBarrage, socketBarrage };
