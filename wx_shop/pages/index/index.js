//index.js
//获取应用实例
import Base from "../../utils/base.js"
let base = new Base()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiper: {
            indicatorDots: true,
            vertical: false,
            autoplay: true,
            interval: 5000,
            duration: 300,
            circular: true,
            previousMargin: "15rpx",
            nextMargin: "15rpx"
        },
        baseurl: base.baseurl,
        banners: [],
        themes: [],
        products: []
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.indexData()
    },
    // 获取首页数据
    indexData(){
        let url = "http://127.0.0.1:3004/v1/home/getHome"
        let result = base.get(url)
        result.then((res) => {
            console.log(res)
            let {
                banners,
                themes,
                products
            } = res.data.data
            this.setData({
                banners,
                themes,
                products
            })
            console.log(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    },
    // 点击进入主题
    toTheme(e){
        // console.log(e.currentTarget.dataset.id)
        let themeid = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: `/pages/theme/theme?themeid=${themeid}`
        })
    },
    // 点击进入详情页
    toDetail(e) {
        // console.log(e.currentTarget.dataset.id)
        let _id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: `/pages/detail/detail?_id=${_id}`
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})