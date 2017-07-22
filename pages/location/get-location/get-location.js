// get-location.js
var util = require('../../../utils/utils.js')
var formatLocation = util.formatLocation

Page({
  data: {
    hasLocation: false,
  },
  getLocation: function () {
    var that = this
    wx.getLocation({
      success: function (res) {
        console.log(res)
        that.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude)
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
    wx.getLocation({
      success: function (res) {
        console.log(res)
        that.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude)
        })
      }
    })
  }

})