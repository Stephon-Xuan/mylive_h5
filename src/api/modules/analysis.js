import axios from "../../common/http.js";

const baseEnv = {
  webUrl: "http://localhost:8512",
};

class Analysis {
  //获取数据分析数据
  getAnalysisList(params) {
    return axios
      .get(`${baseEnv.webUrl}/analysis/analysisList`, { params: params })
      .then((res) => {
        return res.data.data;
      });
  }

  //设置数据分析-历史记录
  addAnalysis(params) {
    return axios
      .post(`${baseEnv.webUrl}/analysis/addAnalysis`, params)
      .then((res) => {
        return res.data;
      });
  }
}

const analysisApi = new Analysis();
export default analysisApi;
