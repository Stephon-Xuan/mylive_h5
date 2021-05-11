// import ajax from "../ajax";
import axios from "../assets/js/http.js";

const baseEnv = {
  webUrl: "http://localhost:8512",
};

class LivingRoom {
  /**
   * @description: 获取直播间列表
   * @author: Stephon
   * @param {type}
   * @return {type}
   */
  getRoomList(params) {
    if (params && params.type) {
      //通过类型进行搜索
      return axios
        .get(`${baseEnv.webUrl}/livingRoom/roomListByType`, { params: params })
        .then((res) => {
          return res.data.data;
        });
    } else {
      //通过输入的信息进行搜索
      return axios
        .get(`${baseEnv.webUrl}/livingRoom/roomList`, { params: params })
        .then((res) => {
          return res.data.data;
        });
    }
  }

  /**
   * @description: 获取直播间详情
   * @author: Stephon
   * @param {type}
   * @return {type}
   */
  getRoomDetail(params) {
    return axios
      .get(`${baseEnv.webUrl}/livingRoom/roomDetail`, { params: params })
      .then((res) => {
        return res.data.data;
      });
  }

  /**
   * @description: 新增直播间
   * @author: Stephon
   * @param {type}
   * @return {type}
   */
  addRoom(params) {
    return axios
      .post(`${baseEnv.webUrl}/livingRoom/addRoom`, params)
      .then((res) => {
        return res.data;
      });
  }

  /**
   * @description: 编辑直播间
   * @Date: 2020-09-03 00:42:17
   * @author: Stephon
   * @param {type}
   * @return {type}
   */
  editRoom(params) {
    return axios
      .post(`${baseEnv.webUrl}/livingRoom/editRoom`, params)
      .then((res) => {
        return res.data;
      });
  }

  //删除直播间
  deleteRoom(params) {
    console.log("参数", params);
    return axios
      .get(`${baseEnv.webUrl}/livingRoom/deleteRoom`, { params })
      .then((res) => {
        return res.data.data;
      });
  }
}
const livingRoomApi = new LivingRoom();
export default livingRoomApi;
