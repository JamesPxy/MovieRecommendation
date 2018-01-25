//引入本地json数据，这里引入的就是第一步定义的json数据
var postData = require('../../data/indexdata.js');
var data = postData.data;
Page({
  data: {
    films: [],
    hasMore: false,
    showLoading: true,
    start: 0
  },
  onLoad: function () {
    var that = this
    // wx.showLoading({
    //   title: '加载中...',
    // })
    setTimeout(function(){
      that.setData({
        films: data.subjects,
        // start: data.start + data.subjects.length
        start: 0,
        showLoading: false
      });
      // wx.hideLoading()
    },1000);
  },
  viewDetail: function (event) {
    var dataset = event.currentTarget.dataset;
    wx.navigateTo({
      url: '../detail/detail?id=' + dataset.id + '&title=' + dataset.title + '&type=inTheathers'+"&image="+dataset.url
    })
  },
  //配置分享
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '电影快照',
      path: 'pages/douban/in_theathers/in_theathers',
      // imgurl:'',
      success: function (res) {
        // 转发成功
        console.log("转发成功" + res.target)
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败" + res.target)
      }
    }
  }
})
