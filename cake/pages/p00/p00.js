// pages/p00/p00.js
let app = getApp();
//获取云数据库引用
const db = wx.cloud.database();
const admin = db.collection('adminlist');
let name = null;
let password = null; 
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  //输入用户名
  inputName:function(e){
    name = e.detail.detail.value
  },
  //输入密码
  inputPassword(e){
    password = e.detail.detail.value
  },


  //登陆
  login(){
    let that = this;
    //登陆获取用户信息
    admin.get({
      success:(res)=>{
        let user = res.data;
       // console.log(res.data);
        for (let i = 0; i < user.length; i++) {  //遍历数据库对象集合
          if (name === user[i].name) { //用户名存在
            if (password !== user[i].password) {  //判断密码是否正确
              wx.showToast({
                title: '密码错误！！',
                icon: 'success',
                duration: 2500
              })
            } else {
              console.log('登陆成功！')
              wx.showToast({
                title: '登陆成功！！',
                icon: 'success',
                duration: 2500
              })
              wx.switchTab({   //跳转首页
                url: '/pages/p01/p01',  //这里的URL是你登录完成后跳转的界面
              })
            }
          }else{   //不存在
            wx.showToast({
              title: '无此用户名！！',
              icon: 'success',
              duration: 2500
            })
          }
        }
      }
    })
  },


  register(){
    wx.navigateTo({
      url: '/pages/p12/p12'
    })
  },

})

