// pages/login/login.js
let app = getApp();
// 获取云数据库引用
const db = wx.cloud.database();
const admin = db.collection('user');//注意，这里就是刚才的集合的名字——user
let name = null;//变量，用于存放用户输入的账号
let password = null;//变量，用于存放用户输入的密码
Page({
  jumpToP01(){
    wx.switchTab({
      url: '/pages/p01/p01',
    })
  },

  /**
   * 页面的初始数据
   */
  data: {

  },
  //输入用户名
  inputName: function (event) {
    name = event.detail.value//将用户输入的账号放到变量里面
  },
  //输入密码
  inputPassword(event) {
    password = event.detail.value//将用户输入的密码放到变量里面a
  },
//登陆函数
login() {
  let that = this;

  //登陆获取用户信息
  if (name === null) {  
    wx.showToast({
      title: '请输入账号！',
      icon: 'none',
    })
  } else {  
    admin.get({
      success: (res) => {
        let user = res.data;
        console.log(res.data);
        for (let i = 0; i < user.length; i++) {  
          if (name === user[i].account.toString()) { 
            if (password !== user[i].password) {  
              wx.showToast({
                title: '密码错误！',
                icon: 'none',
                // duration: 2500
              })
              break
            } else {
              console.log('登陆成功！')
              wx.showToast({
                title: '登陆成功！！',
                icon: 'success',
                // duration: 2500
              
              })
              
              
              app.globalData.nowuseropid = app.globalData.openid
              wx.switchTab({
                url:'/pages/p01/p01',
              })
              break  
            }

          } else {   //不存在
            if (i >= user.length - 1){  // 遍历结束，找不到账号
              wx.showToast({
                title: '无此用户名！！',
                icon: 'none',
                // duration: 2500
              })
            }
          }
        }
      },
      fail:(res) => {
        console.log("数据库get() fail", res)
      }
    })
  }
}
})