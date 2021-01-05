
//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    wx.cloud.init({

      traceUser: true,

  })
  this.globalData = {
    nowuseropid:null
  }
},
})
globalData: {
  userInfo: null
}