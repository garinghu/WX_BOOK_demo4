Page({
    loginTap:function(){
        wx.navigateTo({
          url: 'all/all',
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })

    },
    staffTap:function(){
      wx.navigateTo({
        url:'security/security'
      })
    }
})