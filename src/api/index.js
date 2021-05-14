/*
包含了n个接口请求的函数的模块
函数返回值为: promise
 */

import ajax from "./ajax";

// // 注册接口
// export const reqRegister = (user) => ajax('/register', user, 'POST')
// // 登陆接口
// export const reqLogin = ({username, password}) => ajax('/login',{username, password}, 'POST')
// // 更新用户接口
// export const reqUpdateUser = (user) => ajax('/update', user, 'POST')
// // 获取用户信息
// export const reqUser = () => ajax('/user')

// // 获取用户列表
// export const reqUserList = (type) => ajax('/userlist', {type})

// // 获取当前用户的聊天消息列表
// export const reqChatMsgList = () => ajax('/msglist')

// // 修改指定消息为已读
// export const reqReadMsg = (from) => ajax('/readmsg', {from}, 'POST')

// 直播间
// export const reqLivingList = () => ajax("/livingRoom/roomDetail");

// export default class Api {
//   reqLivingList = () => ajax("/livingRoom/roomDetail");
// }

import livingRoomApi from "./modules/livingRoom";
import carouselApi from "./modules/carousel";
// import userApi from "./modules/user";

const apiObj = {
  livingRoomApi,
  carouselApi,
  //   userApi,
};
// console.log("api------", apiObj, livingRoomApi.getRoomList());
export default apiObj;
