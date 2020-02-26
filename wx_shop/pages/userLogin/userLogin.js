// pages/my/my.js
import Base from "../../utils/base.js"
import Storage from "../../utils/storage.js"
let base = new Base()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        
    },
    formBindsubmit(e){
        let url = "http://127.0.0.1:3004/v1/user/userlogin"
        let data = e.detail.value
        let {username , password} = data
        let reg = /^[\w]{2,20}$/
        let user_test = reg.test(username)
        let pass_test = reg.test(password)
        if (!user_test || !pass_test){
            wx.showToast({
                title: '请输入正确格式',
            })
            return false
        }
        base.post(url , data)
        .then((res)=>{
            console.log(res.data)
            let { err } = res.data
            if (err === -1){
                wx.showToast({
                    title: '用户名或密码不符',
                })
            }
            else if(err===0){
                wx.showToast({
                    title: '登录成功',
                })
                Storage.setStorage("login", res.data.data)
                wx.switchTab({
                    url: `/pages/index/index`,
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