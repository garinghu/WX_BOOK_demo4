//logs.js
var postsData = require('../../data/data.js')
Page({
  onLoad: function () {

    // this.data.postList = postsData.postList
    this.setData({
       postList:postsData.postList,
       reviewList:postsData.reviewList
      });
  },
  onPostTap:function(event){
    var postId=event.currentTarget.dataset.postid;
  console.log(postId);
    wx.navigateTo({
      url: 'logs-detail/logs-detail?id='+postId
      
    })

  },
})
