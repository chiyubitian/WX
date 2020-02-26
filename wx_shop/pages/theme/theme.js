// pages/theme/theme.js
import Base from "../../utils/base.js"
let base = new Base()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        baseurl: base.baseurl,
        topimg:"",
        products:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log(options)
        let { themeid } = options;
        let page = options.page || 1;
        
        this.themeData({ themeid, page})
    },
    // 获取主题数据
    themeData(params) {
        // let { themeid, page } = params
        let url = "http://127.0.0.1:3004/v1/home/getThemeById"
        let result = base.get(url, params)
        result.then((res) => {
            let { topimg, products} = res.data.data
            this.setData({
                topimg, products
            })
            console.log(res)
        }).catch((err) => {
            console.log(err)
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