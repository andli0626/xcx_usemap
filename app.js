App({

  onLaunch: function () {
    
    

  },

  // 获取用户基本信息
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      // ① 调用接口：登录 获取登录凭证（code）
      wx.login({
        success: function () {
          // ② 调用接口：获取用户基本信息(获取userInfo 设置为全局变量)
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },

  // 初始化全局变量 userInfo
  globalData: {
    userInfo: null
  }

})


