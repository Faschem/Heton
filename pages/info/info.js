// pages/info/info.js
const db = wx.cloud.database()
const umCollection = db.collection("user_Messages")
Page({

  
  /**
   * 页面的初始数据
   */
  data: {
    nickname: "loading...",
    age: "loading...",
    sex: "loading...",
    email:"loading...",
    edu:"loading...",
    school:"loading..."
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //1、引用数据库   
    const db = wx.cloud.database({})
    //2、开始查询数据了  news对应的是集合的名称  
    const umCollection = db.collection("user_Messages") 
    umCollection.get({
      //如果查询成功的话    
      success: res => {
        console.log(res.data[res.data.length-1])
        const num = res.data.length-1;
 
        this.setData({
          nickname: res.data[num].nickname,
          age: res.data[num].age,
          sex: res.data[num].sex,
          email: res.data[num].email,
          edu: res.data[num].edu,
          school: res.data[num].school
        })
      }
    })
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