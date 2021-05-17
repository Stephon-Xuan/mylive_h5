import axios from "../../common/http.js";

const baseEnv = {
  webUrl: "http://localhost:8512",
};

class Carousel {
  /**
   * @description: 获取直播间列表
   * @author: Stephon
   * @param {type}
   * @return {type}
   */
  getCarouselList(params) {
    //通过输入的信息进行搜索
    return axios
      .get(`${baseEnv.webUrl}/carousel/carouselList`, { params: params })
      .then((res) => {
        return res.data.data;
      });
  }
}

const carouselApi = new Carousel();
export default carouselApi;
