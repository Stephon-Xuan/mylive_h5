/*
 * @description: 用户接口
 */
import baseEnv from "../../common/js/config.js";
import axios from "../../common/http.js";

class User {
  /**
   * @description: 用户登录接口
   */
  userLogin(params) {
    return axios.post(`${baseEnv.webUrl}/users/login`, params).then((res) => {
      // return res.data
      return res.data;
    });
  }

  /**
   * @description: 获取用户信息
   * @Date: 2020-08-31 16:03:52
   * @author: Stephon
   * @param {type}
   * @return {type}
   */
  getUserInfo(id = "LNsKeo69KLCuGrbNg0nlg2jwQDQub28C") {
    return axios
      .get(`${baseEnv.webUrl}/users/getUserInfo`, { params: { id: id } })
      .then((res) => {
        return res.data;
      });
  }

  /**
   * @description: 新增用户
   */
  addUser(params) {
    console.log("新增用户参数", params);
    return axios.post(`${baseEnv.webUrl}/users/addUser`, params).then((res) => {
      return res.data;
    });
  }

  /**
   * 编辑用户信息
   *
   */
  editUserInfo(params) {
    console.log("编辑用户参数", params);
    return axios
      .post(`${baseEnv.webUrl}/users/editUser`, params)
      .then((res) => {
        return res.data;
      });
  }
}
const user = new User();
export default user;
