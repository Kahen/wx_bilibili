Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 首页导航数据
    navList:[],
    //被点击的首页导航菜单索引
    currentIndexNav:0
  },

  /**
   * 获取首页导航数据
   */
  getNavList(){
    let that=this;
    // 利用小程序内置发送请求方法
    wx.request({
      url:"https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/navList",
      success(res){
        // console.log(res);
        if(res.data.code===0){
          that.setData({
            navList:res.data.data.navList
          })
        }
      }
    })
  },
  /**
   * 点击首页导航数据
   */
  activeNav(e){
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 1 获取首页导航数据
    this.getNavList();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})