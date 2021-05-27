import baseEnv from "../../common/js/config.js";
import axios from "../../common/http.js";

class Examine {
  //课程考核
  addExamine(params) {
    return axios
      .post(`${baseEnv.webUrl}/examine/addExamine`, params)
      .then((res) => {
        return res.data;
      });
  }
  // 查看考核题目
  getExamineInfo(room_id) {
    //通过类型进行搜索
    return axios
      .get(`${baseEnv.webUrl}/examine/getExamineInfo`, { params: { room_id } })
      .then((res) => {
        return res.data.data;
      });
  }
  deleteExamine(examine_id) {
    return axios
      .get(`${baseEnv.webUrl}/examine/deleteExamine`, {
        params: { examine_id },
      })
      .then((res) => {
        return res.data.data;
      });
  }
}

const examine = new Examine();
export default examine;
