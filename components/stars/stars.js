// components/stars/stars.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    rate:{
      type:Number,
      value:0
    },
    starsize:{
      type:Number,
      value:20
    },
     fontsize: {
      type: Number,
      value: 20
    },
    fontcolor:{
      type:String,
      value:"#ccc"
    },
    istext:{
      type:Boolean,
      value:true,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    lights:[],
    halfs:[],
    grays:[],
    ratetext:""
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  lifetimes:{
    attached:function(){
      var that = this;
      // console.log(that.properties.rate)
      var rate = that.properties.rate;
      var intRate = parseInt(rate);
      var light = parseInt(intRate/2);
      var half = parseInt(intRate%2);
      var gray = 5 - light - half;
      // console.log(light, half, gray);
      var lights = [];
      var halfs = [];
      var grays = [];
      for (var index = 1 ;index<=light;index++){
        lights.push(index);

      }
      for (var index = 1; index <= half; index++) {
        halfs.push(index);

      }
      for (var index = 1; index <= gray; index++) {
        grays.push(index);

      }
      var ratetext = rate && rate>0 ? rate.toFixed(1):"未评分";
      that.setData({
        lights:lights,
        halfs:halfs,
        grays:grays,
        ratetext:ratetext

      })
      // console.log(lights, halfs, grays)
    }
  }
})
