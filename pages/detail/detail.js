Page({
  data: {
    film: {},
    showLoading: true,
    options: null,
    name: null,
    url:null,
  },
  onLoad: function (options) {
    var that = this
    wx.setNavigationBarTitle({
      title: options.title
    })
    //使用本地模拟数据
    var postData = require('../../data/detail1.js');
    if (options.id % 2 === 0) {
      postData = require('../../data/detail2.js');
    }
    var data = postData.detail;
    // console.log("detail  data====" + data);
    that.setData({
      name: options.title,
      url:options.image,
      film: data,
      showLoading: false
    })
  },

})
