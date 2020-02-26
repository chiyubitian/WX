// pages/classfly/classfly.js
import Base from "../../utils/base.js"
let base = new Base()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        nav: [],
        content: {},
        select_index : 0,
        baseurl: base.baseurl,
    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let _id = _id || 1
        this.navData() 
        this.contentData({ type: _id }) 
    },
    // 获取导航数据
    navData() {
        // let { themeid, page } = params
        let url = "http://127.0.0.1:3004/v1/home/goodsType"
        let result = base.get(url);
        result.then((res) => {
            let nav = res.data
            this.setData({ nav })
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    },
    // 获取导航类别的详情数据
    contentData(parames){
        let url = "http://127.0.0.1:3004/v1/home/goodsByType"
        let result = base.get(url, parames)
        result.then((res)=>{
            let content = res.data
            this.setData({ content })
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    toggle(e) {
        let {index , _id} = e.currentTarget.dataset
        this.setData({ select_index : index})
        // console.log(e)
        this.contentData({type : _id})
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