// miniprogram/pages/new/detail/detail.js
wx.cloud.init()
Page({

  /**
   * 页面的初始数据
   */
  
    data:{
      dataList:[],
      userList:[]
    },
    getData(){
    var a=this
wx.cloud.database().collection('poster')
      .orderBy('date','desc') //按发布排序
      .get({
        success(res) {
          console.log("请求成功", res)
          a.setData({
            dataList: res.data
          })
        },
        fail(res) {
          console.log("请求失败", res)
        }
      })

    },
    getUser(){
      var m=this
wx.cloud.database().collection('poster_users')
      .orderBy('date','desc') //按发布排序
      .get({
        success(res) {
          console.log("请求成功", res)
          m.setData({
            userList: res.data
          })
        },
        fail(res) {
          console.log("请求失败", res)
        }
      })
    },
  
  

  

  /**
   * 页面的初始数据
   */
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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