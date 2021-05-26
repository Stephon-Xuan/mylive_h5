import baseEnv from "../../common/js/config.js";
import axios from "../../common/http.js";

class Channel {
  // 添加专栏
  addChannel(params) {
    return axios
      .post(`${baseEnv.webUrl}/channel/addChannel`, params)
      .then((res) => {
        return res.data;
      });
  }

  // 添加专栏
  editChannel(params) {
    return axios
      .post(`${baseEnv.webUrl}channel/editChannel`, params)
      .then((res) => {
        return res.data;
      });
  }

  // 获取专栏列表
  getChannelList(user_id) {
    //通过类型进行搜索
    return axios
      .get(`${baseEnv.webUrl}/channel/channelList`, { params: { user_id } })
      .then((res) => {
        return res.data.data;
      });
  }

  // 删除专栏
  deleteChannel(channel_id) {
    return axios
      .get(`${baseEnv.webUrl}/channel/deleteChannel`, {
        params: { channel_id },
      })
      .then((res) => {
        return res.data.data;
      });
  }
  // 专栏详情
  channelDetail(params) {
    return axios
      .get(`${baseEnv.webUrl}/channel/channelDetail`, {
        params,
      })
      .then((res) => {
        return res.data.data;
      });
  }
}

const channel = new Channel();
export default channel;
