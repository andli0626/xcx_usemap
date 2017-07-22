
var app = getApp()

Page({

  data: {
    userInfo: {}
  },

  // 事件处理函数
  bindViewTap: function () {
    
  },

  // 页面加载（只调用一次）
  onLoad: function () {
    console.log('onLoad')
    var that = this

    // 调用应用实例的方法 获取全局数据：userInfo
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

  }

})




