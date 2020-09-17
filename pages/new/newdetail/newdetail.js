// miniprogram/pages/new/detail/detail.js
wx.cloud.init()
Page({

  /**
   * 页面的初始数据
   */
  
    data:{
      dataList:[],
      userList:[],
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
    //跳转到详情页
    goxiangqing(event){
      console.log("点击获取数据",event.currentTarget.dataset.id._id,)
      wx.reLaunch({
        url: '/pages/new/xiangqing/xiangqing?id='+event.currentTarget.dataset.id._id,
      })
    },
    /*
  setContainerHeight :function(e){
    var imgWidth=e.detail.height;
    var imgHeight=e.detail.height;
    var sysInfo=wx.getSystemInfoSync();
    console.log("sysInfo:",sysinfo);
    var screenWidth=sysInfo.screenWidth;
    var scale=screenWidth/imgWidth;
    this.setData({
      height:imgHeight*scale
    })
    console.log(this.data.height)
  },
  */

  

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