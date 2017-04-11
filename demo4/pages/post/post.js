var app = getApp();
Page({
  onLoad:function(event){
    var id="3948354";
    var bookname=app.globalData.doubanBase+"/v2/book/"+id;
    this.getBookData(bookname);
    

  },
  getBookData:function(url){
    var that=this;
     wx.request({
      url: url,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
       //console.log(res);
        that.processDoubanData(res.data);

      },
      fail: function (error) {
        // fail
        console.log(error)
      }
    })
  },
  processDoubanData:function(bookDouban){
    var books=[];
    var title=bookDouban.title;
    var img=bookDouban.img;
    var summary=bookDouban.summary;
    var temp={
      title:title,
      booksrc:img,
      content:summary,
      bookid:bookDouban.id
    };
    // console.log(temp)
     books.push(temp);
     console.log(books);
    this.setData({
       books:books
      });
  }

  
})