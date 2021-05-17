const env = process.env
const baseUrl = env.NODE_ENV==="development"?"http://localhost":"https://www.example.com"
const baseEnv = {
    env:env.NODE_ENV,//当前环境
    mode:env.VUE_APP_CURRENTMODE,//当前模式
    webUrl : env.VUE_APP_CURRENTMODE==="electron"?`${baseUrl}:8512`:"/webserve",
    socketUrl : {
        //barrage:`${baseUrl}:8511/barrage`,
        barrage:env.NODE_ENV==="development"?`${baseUrl}:8511/barrage`:`${baseUrl}/barrage`,
    },
    //livingUrl : env.NODE_ENV==="development"?`${baseUrl}:8000/live`:`${baseUrl}/live/live`
    livingUrl : env.NODE_ENV==="development"?`${baseUrl}:8000/live`:`${baseUrl}/live/live`

}

export default baseEnv