Page({
  openLocation: function (e) {

    console.log(e)

    var value = e.detail.value
    console.log(value)

    // 位置查看 通过原生内置地图（腾讯地图）
    wx.openLocation({
      longitude: Number(value.longitude),
      latitude: Number(value.latitude),
      name: value.name,
      address: value.address
    })

  }
})
