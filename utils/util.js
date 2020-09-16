const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
/*
var index=require('../data/data_index.js');
var discovery=require('../data/data_discovery.js');
var index_next=require('../data/data_index_next.js');
var discovery_next=require('../data/data_discovery.js');

function getDate(url){
return new Promise(function(resolve,reject){
  wx.request({
    url: 'url',
     data:{},
     headers:{

  },
     success:function(res){
       console.log("success"),
       resolve(res);
     },
     fail:function(res){
console.log("ohmygod"),
reject(res);
}
  })
   
})
}
function getDate2(){
  return index.index
}
function next(){
  return index_next.next
}
module.exports.getDate=getDate;
module.exports.getDate2=getDate2;
*/