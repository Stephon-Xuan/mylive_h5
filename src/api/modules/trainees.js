import baseEnv from "../../common/js/config.js";
import axios from "../../common/http.js";

class Trainees {
  // 直播课绑定学员
  bindTraninees(params) {
    return axios
      .post(`${baseEnv.webUrl}/trainees/bindTraninees`, params)
      .then((res) => {
        return res.data;
      });
  }
  // 编辑学员作业
  editTrainees(params) {
    return axios
      .post(`${baseEnv.webUrl}/trainees/editTrainees`, params)
      .then((res) => {
        return res.data;
      });
  }
  //获取学员信息
  getTraineesInfo(room_id) {
    //通过类型进行搜索
    return axios
      .get(`${baseEnv.webUrl}/trainees/getTraineesInfo`, {
        params: { room_id },
      })
      .then((res) => {
        return res.data.data;
      });
  }

  //用户获取自己作业信息
  getUserTraineesInfo(params) {
    //通过类型进行搜索
    return axios
      .get(`${baseEnv.webUrl}/trainees/getUserTraineesInfo`, { params })
      .then((res) => {
        return res.data.data;
      });
  }
}

const trainees = new Trainees();
export default trainees;
