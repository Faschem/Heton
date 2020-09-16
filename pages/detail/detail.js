// pages/detail/detail.js
import {network} from "../../utils/network.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var id = options.id;
      var type = options.type;
      var that = this;
      that.setData({
        type:type,
        id:id
      })
      network.getItemDetail({
        type : type,
        id:id,
        success: function (item) {
          that.setData({
            item: item
          })
          console.log(item)
        }

      });
      network.getItemTags({
        type : type,
        id: id,
        success:function(tags){
          that.setData({
            tags:tags
          })
        }
      });

      network.getItemComments({
        type:type,
        id:id,
        success:function(data){
          console.log(data);
          var totalComment = data.total;
          var comments = data.interests;
          that.setData({
            totalComment: totalComment,
            comment: comments 
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
    wx.pageScrollTo({
      scrollTop: 0,
    })
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