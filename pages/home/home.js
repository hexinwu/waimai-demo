// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['https://bkimg.cdn.bcebos.com/pic/a1ec08fa513d269759ee2b0056b0a5fb43166d227211?x-bce-process=image/resize,m_lfit,w_536,limit_1/format,f_jpg', 'https://i2.chuimg.com/51ebb98c8a1911e6b87c0242ac110003_1024w_684h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90', 'https://img1.baidu.com/it/u=1289743154,2520195095&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 1500,
    duration: 500,
    goodsData: [
     {
      "Title": "肉蛋青菜炒粉",
      "SaleAmount":9.88,
      "Brand":"青原区蛋炒粉热销第一",
      "SaleMount":"月售150，好评率100%",
      "GoodsImage":"https://img1.baidu.com/it/u=3211829650,3159507746&fm=253&fmt=auto&app=138&f=JPEG?w=535&h=500"
     },
     {
      "Title": "新疆腊肉炒饭",
      "SaleAmount":11.88,
      "Brand":"青原区蛋炒饭热销第五",
      "SaleMount":"月售120，好评率98%",
      "GoodsImage":"https://img2.baidu.com/it/u=4034329986,2733745210&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=446"
     },
     {
      "Title": "蛋青菜炒粉",
      "SaleAmount":6.88,
      "Brand":"青原区蛋炒粉热销第三",
      "SaleMount":"月售220，好评率90%",
      "GoodsImage":"https://img1.baidu.com/it/u=3683879758,4193459248&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=404"
     },
     {
      "Title": "新鲜牛肉蛋炒饭",
      "SaleAmount":13.88,
      "Brand":"吉安牛肉炒饭热销第二",
      "SaleMount":"月售95，好评率99%",
      "GoodsImage":"https://img0.baidu.com/it/u=2269494870,2898885482&fm=253&fmt=auto&app=138&f=JPEG?w=690&h=390"
     },
     {
      "Title": "肉蛋青菜炒粉",
      "SaleAmount":9.88,
      "Brand":"青原区蛋炒粉热销第一",
      "SaleMount":"月售150，好评率100%",
      "GoodsImage":"https://img2.baidu.com/it/u=2058351882,20681350&fm=253&fmt=auto&app=138&f=JPEG?w=470&h=285"
     },
     {
      "Title": "火腿蛋炒粉",
      "SaleAmount":10.88,
      "Brand":"五星好评还加蛋",
      "SaleMount":"月售125，好评率95%",
      "GoodsImage":"https://img2.baidu.com/it/u=2058351882,20681350&fm=253&fmt=auto&app=138&f=JPEG?w=470&h=285"
     },
     {
      "Title": "外婆菜老干妈炒饭",
      "SaleAmount":10.88,
      "Brand":"青原区蛋炒饭热销第一",
      "SaleMount":"月售150，好评率100%",
      "GoodsImage":"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00715-3627.jpg"
     },
     {
      "Title": "肉蛋炒饭",
      "SaleAmount":11.88,
      "Brand":"青原区蛋炒粉热销第三",
      "SaleMount":"月售100，好评率100%",
      "GoodsImage":"https://img1.baidu.com/it/u=1818620332,9577135&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=423"
     },
     {
      "Title": "青菜素炒粉",
      "SaleAmount":6.88,
      "Brand":"青原区炒粉热销第八",
      "SaleMount":"月售88，好评率91%",
      "GoodsImage":"https://img1.baidu.com/it/u=3872728867,2985877573&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
     },
     {
      "Title": "蛋炒饭",
      "SaleAmount":6.88,
      "Brand":"青原区炒饭热销第二",
      "SaleMount":"月售100，好评率95%",
      "GoodsImage":"https://img2.baidu.com/it/u=1683657569,2777096544&fm=253&fmt=auto&app=138&f=JPEG?w=519&h=300"
     },
     {
      "Title": "加个鸡蛋",
      "SaleAmount":2,
      "Brand":"约50克",
      "SaleMount":"月售90，好评率100%",
      "GoodsImage":"https://img1.baidu.com/it/u=2131262216,638324176&fm=253&fmt=auto&app=138&f=JPEG?w=650&h=434"
     },
     {
      "Title": "老干妈秘酱",
      "SaleAmount":1,
      "Brand":"约30克",
      "SaleMount":"月售60，好评率100%",
      "GoodsImage":"https://img2.baidu.com/it/u=260360324,46929102&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=284"
     },
     {
      "Title": "加辣",
      "SaleAmount":1,
      "Brand":"约30克",
      "SaleMount":"月售100，好评率100%",
      "GoodsImage":"https://img0.baidu.com/it/u=2885087135,4006159286&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281"
     },
     {
      "Title": "雪碧汽水",
      "SaleAmount":3,
      "Brand":"约330毫升",
      "SaleMount":"月售80，好评率100%",
      "GoodsImage":"https://img0.baidu.com/it/u=1166068609,1831937773&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
     },
     {
      "Title": "芬达汽水",
      "SaleAmount":3,
      "Brand":"约330毫升",
      "SaleMount":"月售150，好评率100%",
      "GoodsImage":"https://img2.baidu.com/it/u=3352064162,1943251066&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
     },
     {
      "Title": "可口可乐",
      "SaleAmount":3,
      "Brand":"约330毫升",
      "SaleMount":"月售50，好评率100%",
      "GoodsImage":"https://img0.baidu.com/it/u=3653010985,2167043508&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
     },
     {
      "Title": "农夫山泉矿泉水",
      "SaleAmount":2,
      "Brand":"约500毫升",
      "SaleMount":"月售160，好评率100%",
      "GoodsImage":"https://img2.baidu.com/it/u=2535733070,3311246040&fm=253&fmt=auto&app=138&f=PNG?w=500&h=323"
     },
     {
      "Title": "招送餐骑士",
      "SaleAmount":500,
      "Brand":"吉安市美团外卖",
      "SaleMount":"月售0",
      "GoodsImage":"https://img2.baidu.com/it/u=2496063554,689042774&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=535"
     },
    ],
    GoodsAmount: 0
  },

  onChange(event) {
    console.log(event.detail);
  },

  jumpDetail: function(){
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})