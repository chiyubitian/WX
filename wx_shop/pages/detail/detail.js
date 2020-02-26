// pages/theme/theme.js
import Base from "../../utils/base.js"
import Shopcar from "../../pages/shopcar/shopcarmodel.js"
let base = new Base()
let shopcar = new Shopcar()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        button:{
            defaultSize: 'default',
            primarySize: 'default',
            warnSize: 'default',
            disabled: false,
            plain: false,
            loading: false
        },
        selector:{
            array: [0,1,2,3,4,5,6,7,8,9,10],
            value: 1
        },
        
        baseurl: base.baseurl,
        shop_detail:{},
        tab_title: ["商品详情", "商品参数", "售后保障"],
        tab_context: ["111", "222", "333"],
        select_index: 0,
        all_num : 0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log(options)
        // let { themeid } = options;
        this.detailData(options)
        this.allNum()
    },
    // 获取单个商品数据
    detailData(params) {
        // let { themeid, page } = params
        let url = "http://127.0.0.1:3004/v1/home/getGoodsById"
        let result = base.get(url, params);
        result.then((res) => {
            let shop_detail = res.data.data[0]
            this.setData({
                shop_detail
            })
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    },
    bindPickerChange(e){
        this.setData({ selector: { value: e.detail.value}})
        console.log(e)
    },
    // tab切换
    toggle(e){
        let { index } = e.currentTarget.dataset
        this.setData({ select_index:index })
        console.log(e)
    },
    // 点击添加购物车
    addCart(e){
        let {shop_detail} = this.data
        shop_detail.num = this.data.selector.value
        shopcar.addCarData(shop_detail)
        this.allNum()
    },
    // 购物车总量
    allNum(e) {
        let all_num = shopcar.allNum()
        this.setData({ all_num })
    },
    // 点击进入购物车
    toCart(e) {
        wx.switchTab({
            url: `/pages/shopcar/shopcar`
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