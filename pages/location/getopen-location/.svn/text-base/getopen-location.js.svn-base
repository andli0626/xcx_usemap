// get-location.js
var util = require('../../../utils/utils.js')
var formatLocation = util.formatLocation

Page({
  data: {
    hasLocation: false,
  },
  getLocation: function () {
    var that = this

    // 获取当前位置
    wx.getLocation({
      success: function (res) {
        console.log(res)
        that.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude)
        })
        // 查看当前位置
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
        })
      }
    })
  },
  clear: function () {
    this.setData({
      hasLocation: false
    })
  },
  onLoad: function () {

    var that = this
    // 获取当前位置 返回JSON
    wx.getLocation({
      success: function (res) {
        console.log(res)

        // 设置 全局参数值
        that.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude)
        })

        // 查看当前位置
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
        })

      }
    })
  }

})