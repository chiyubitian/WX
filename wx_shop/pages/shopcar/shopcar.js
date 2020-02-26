// pages/shopcar/shopcar.js
import Base from "../../utils/base.js"
let base = new Base()
import Shopcarmodel from "../../pages/shopcar/shopcarmodel.js"
let shopcarmodel = new Shopcarmodel()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        shop_car_data:[],
        baseurl: base.baseurl,
        all_sel:false,
        all_num:null,
        all_price:null,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.reFreshData()
        this.allNum()
        this.allPrice()
    },
    // 初始页面获取数据
    reFreshData(){
        // 获取storage数据
        let shop_car_data = shopcarmodel.getCarData()
        this.setData({ shop_car_data })
    },
    // 选择改变
    select(e){
        let { _id } = e.currentTarget.dataset
        // console.log(_id)
        let state = shopcarmodel.changeState({ _id})
        if(state){
            this.setData({ all_sel : true})
        }
        else{
            this.setData({ all_sel: false })
        }
        this.allNum()
        this.allPrice()
        this.reFreshData()
    },
    // 删除
    del(e) {
        let { _id , sel} = e.currentTarget.dataset
        console.log(sel)
        // 如果选择了才删除
        if(!sel){
            wx.showModal({
                title: '提示',
                content: '请选择要删除的商品',
            })
            return false
        }
        shopcarmodel.delData({ _id })
        this.reFreshData()
    },
    // 增加
    jia(e){
        let { _id } = e.currentTarget.dataset
        // console.log(_id)
        shopcarmodel.numState("jia" , { _id })
        this.allNum()
        this.allPrice()
        this.reFreshData()
        
    },
    // 减少
    jian(e) {
        let { _id } = e.currentTarget.dataset
        // console.log(_id)
        shopcarmodel.numState("jian" , { _id })
        this.allNum()
        this.allPrice()
        this.reFreshData()
    },
    // 全选/全不选
    allSelect(e){
        this.all_sel = !this.all_sel
        this.setData({ all_sel: this.all_sel})
        this.allOption(this.all_sel)
    },
    // 全选/全不选改变
    allOption(state) {
        // console.log(e)
        shopcarmodel.allChangeState({ state })
        this.allNum()
        this.allPrice()
        this.reFreshData()
    },
    // 总数
    allNum(){
        let all_num = shopcarmodel.selectedAllNum()
        this.setData({ all_num })
    },
    // 总价
    allPrice() {
        let all_price = shopcarmodel.selectedAllPrice()
        this.setData({ all_price })
    },
    // 结算
    buy(){
        if (!this.data.all_num){
            wx.showToast({
                title: '请至少选择一件商品',
            })
            return false
        }
        else{
            wx.navigateTo({
                url: "/pages/order/order",
            })
        }
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