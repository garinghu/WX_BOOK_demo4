var postsData = require('../../../data/data.js')
Page({
    onLoad:function(option){
        var postId=option.id;
        console.log(postId);
        var postData=postsData.postList[postId];
        this.setData({
            postList:postsData.postList,
            postData: postData
        })

    }
})