// custom-tab-bar/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color: "#eee",
    selectedColor: "#000",
    tabList: [{
      "pagePath": "/pages/index/index",
      "iconPath": "/assets/imgs/indexselected.png",
      "selectedIconPath": "/assets/imgs/index.png",
      "text": "首页"
    }, {
      "pagePath": "/pages/product/product",
      "iconPath": "/assets/imgs/product.png",
      "selectedIconPath": "/assets/imgs/productselected.png",
      "text": "商品"
    }]
  },
  switchTab(e) {
    const data = e.currentTarget.dataset
    const url = data.path
    let index = data.index
    if (index === 0){
      console.log(this.data.tabList[index].iconPath)
      console.log(this.data.tabList[1].iconPath)
      this.data.tabList[index].iconPath = '/assets/imgs/indexselected.png'
      this.data.tabList[1].iconPath = '/assets/imgs/product.png'
    }else{
      console.log(this.data.tabList[index].iconPath)
      console.log(this.data.tabList[0].iconPath)
      this.data.tabList[index].iconPath = '/assets/imgs/productselected.png'
      this.data.tabList[0].iconPath = '/assets/imgs/index.png'
    }
    wx.switchTab({
      url
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})