// pages/my/my.js
import Base from "../../utils/base.js"
import Storage from "../../utils/storage.js"
let base = new Base()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        user:{},
        islogin:false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        
    },
    // 微信登录
    wxLogin(){
        wx.login({
            success:(res)=>{
                console.log(res)
                this.loginApi({code:res.code})
            }
        })
        
    },
    // 登录api
    loginApi(parames){
        let url = "http://127.0.0.1:3004/v1/user/appletlogin"
        base.post(url, parames)
        .then((res)=>{
            console.log(res.data.data)
            this.setData({ user: res.data.data, islogin:true})
            Storage.setStorage("user", res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    // 绑定用户名
    binduser() {
        let { isbild, _id } = Storage.getStorage("user")
        if (isbild){
            wx.navigateTo({
                url: `/pages/userLogin/userLogin?_id=${_id}`
            })
        }
        else{
            wx.navigateTo({
                url: `/pages/binduser/binduser?_id=${_id}`
            })
        }
        
    },
    // 用户名登录
    userLogin(e){
        this.binduser()
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