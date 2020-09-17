wx.cloud.init()
var app=getApp()
let id=''
let shoucang=false
let content=''
let name=''
let dianzan=false
let pinglun=[]
Page({
  
  data:{
    imageUrl:"../../../images/shoucang.png",
    dianzanUrl:"../../../images/nice-no.png",
    detailList:[]
  },
 
  onLoad(options){
    var a=this
    id=options.id
    console.log("详情页接受的id",id)
    wx.cloud.database().collection("poster")
    .doc(id)
    .get({success(res) 
      {      console.log("详情页成功", res)
        shoucang=res.data.shoucang
      dianzan=res.data.dianzan
      a.setData({
        detailList: res.data,
        imageUrl: shoucang ? "../../../images/shoucang2.png" :"../../../images/shoucang.png",
        dianzanUrl: dianzan ? "../../../images/nice-yes.png": "../../../images/nice-no.png"
      })
      if(res.data.pinglun){
          pinglun=res.data.pinglun
          console.log("pinglun=",pinglun)
      }
    
      

    },
    fail(res) {
      console.log("请求失败", res)
    }
    })
    
    
  },
  clickMe(){
    if(shoucang){
      this.setData({
        imageUrl:"../../../images/shoucang.png"
      })
      shoucang=false
    }else{
      this.setData({
        imageUrl:"../../../images/shoucang2.png"
      })
      shoucang=true
    }
    wx.cloud.callFunction({
      name:"shoucang",
      data:{
id: id,
shoucang:shoucang
      }
    })
    /*  wx.cloud.database().collection("poster")
      .doc(id)
      .update({
        data:{
          shoucang:shoucang
        }
      })*/
      .then(res=>{
console.log("改变成功")
      })
      .catch(res=>{
        console.log("改变失败")
      })
    
  },
  clickMe2(){
    if(dianzan){
      this.setData({
        dianzanUrl:"../../../images/nice-no.png"
      })
      dianzan=false
    }
    else{
      this.setData({
        dianzanUrl:"../../../images/nice-yes.png"
      })
      dianzan=true
    }
    wx.cloud.callFunction({
      name:"dianzan",
      data:{
id: id,
dianzan:dianzan
      }
    })
  },
  //获取评论内容
  getContent(event){
    content=event.detail.value
console.log("获取输入的值",event.detail.value)
  },

  getName(event){
    name=event.detail.value
console.log("获取输入的值",event.detail.value)
  },
  fabiao(){
    if(name.length<2){
      wx.showToast({
        icon:none,
        title:"名字不可以少于两个字哦"
      })
      return
    }
    if(content.length<4){
      wx.showToast({
        icon:none,
        title:"评论不可以太短哦"
      })
      return
    }
let pinglunItem={}
pinglunItem.content=content
pinglunItem.name=name
pinglun.push(pinglunItem)
console.log("评论的值",pinglunItem)
  
  wx.cloud.callFunction({
   name:"commu",
    data:{
      id:id,
      pinglun:pinglun
    }
  }).then(res=>{
console.log("发表成功",res)
  }).catch(res=>{
console.log("发表",res)
  })
}
})
