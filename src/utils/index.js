// 自己封装hxios.get

let baseUrl = "https://autumnfish.cn/wx/"

let hxios = {
  get(url) {
    return new Promise((resolve, rejext) => {
      wx.request({
        url: baseUrl + url, //开发者服务器接口地址",
        // data: 'data', //请求的参数",
        method: 'GET',
        dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
        success: res => {
          resolve(res)
        },
        fail: res => {
          rejext(res)
        },
        complete: () => {}
      });
    })
  }
}

export default hxios;
