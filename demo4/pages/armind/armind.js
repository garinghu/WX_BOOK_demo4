var app = getApp();
var postsData = require('../../data/data.js');
Page({ 
 data: { 
  navbar: ['通知', '记录'], 
  currentTab: 0,
 }, 
 onLoad: function () {

    // this.data.postList = postsData.postList
    this.setData({
       recommendList:postsData.recommendList
      });
  },
 navbarTap: function(e){ 
  this.setData({ 
   currentTab: e.currentTarget.dataset.idx 
  }) 
 },
 onTap:function(event){
     var lala=event.currentTarget.dataset.lala;
     lala=1;
     console.log(lala);
     this.setData({ 
        lala:lala
  })
 }
}) 