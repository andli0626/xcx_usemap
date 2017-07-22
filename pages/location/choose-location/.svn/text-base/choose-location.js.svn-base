var util = require('../../../utils/utils.js')
var formatLocation = util.formatLocation

Page({
  data: {
    hasLocation: false,
  },
  chooseLocation: function () {

    var that = this

    // 位置选择
    wx.chooseLocation({
      success: function (res) {
        console.log(res)
        that.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude),
          locationAddress: res.address
        })
      }
    })
  },
  clear: function () {
    this.setData({
      hasLocation: false
    })
  }
})
