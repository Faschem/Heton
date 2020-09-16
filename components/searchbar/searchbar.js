// components/searchbar/searchbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isnavigator:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    getSearch:function(event){
      var event= event.detail;
      console.log(event);
      this.triggerEvent('searchinput',event)
    }
  }
})
