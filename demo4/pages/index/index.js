Page({
    onTap: function ( ) {
        // wx.navigateTo({
        //     url:"../posts/post"
        // });
        wx.switchTab({
          url: '/pages/post/post'
          
        })
        
    }
})