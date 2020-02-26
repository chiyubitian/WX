// pages/my/my.js
import Base from "../../utils/base.js"
import Storage from "../../utils/storage.js"
let base = new Base()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        user_id:"",
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        let { _id } = options
        this.setData({ user_id: _id})
    },
    formBindsubmit(e){
        let url = "http://127.0.0.1:3004/v1/user/binduser"
        let data = e.detail.value
        
        data._id = this.data.user_id
        console.log(data)
        base.post(url , data)
        .then((res)=>{
            console.log(res.data)
            let { err } = res.data
            if(err===0){
                wx.showToast({
                    title: '绑定成功',
                })
                let data = Storage.getStorage("user")
                data.isbild = true
                Storage.setStorage("user", data)
                wx.switchTab({
                    url: `/pages/my/my`,
                })
            }
        })
        .catch((err)=>{
            console.log(err)
        })
        // console.log(e.detail.value)
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