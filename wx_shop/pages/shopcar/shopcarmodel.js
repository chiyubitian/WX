import Base from "../../utils/base.js"
class Shopcar extends Base{
    constructor(){
        super()
    }
    // 获取购物车中的缓存数据
    getCarData(){
        return wx.getStorageSync("shop_car_data")||[]
    }
    // 设置购物车中的缓存数据
    setCarData(data) {
        wx.setStorageSync("shop_car_data",data)
    }
    // 将数据加入购物车
    addCarData(add_info){
        let cart = this.getCarData()          
        // 判断添加的数据在购物车存在？
        let indx = this.isExist(add_info)
        if (indx===-1){
            // 没有重复
            cart.push(add_info)
        }
        else{
            // 数量加            
            cart[indx].num = Number(cart[indx].num) + Number(add_info.num)
        }
        add_info.sel = false
        this.setCarData(cart)
    }
    // 检查数据是否存在
    isExist(info){
        let {_id} = info
        let cart = this.getCarData()
        let indx = -1
        cart.map((item , index)=>{
            if(_id===item._id){
                indx = index 
            }
            return item
        })
        return indx
    }
    // 购物车总数量
    allNum() {
        let  shop_car_data = this.getCarData()
        let num = 0 
        shop_car_data.map((item , index)=>{
        num += Number(item.num)
        return item
        })
        return num
    }
    // 购物车商品选择情况
    changeState(parames){
        let { _id } = parames
        let cart = this.getCarData()
        let newData = cart.map((item)=>{
            if (item._id === _id){
                item.sel = !item.sel
            }
            return item
        })
        this.setCarData(newData)
        let newFilter = cart.filter((item)=>{
            return item.sel
        })
        if (newFilter.length===cart.length){
            return true
        }
        else{
            return false
        }
        
    }

    // 购物车删除商品
    delData(parames) {
        let { _id } = parames
        let cart = this.getCarData()
        let newData = cart.filter((item) => {
            if (item._id === _id) {
                return false
            }
            else{
                return item
            }
            
        })
        this.setCarData(newData)
    }
    // 购物车商品数量
    numState(type,parames) {
        let { _id } = parames
        let cart = this.getCarData()
        let newData = cart.map((item) => {
            if (item._id === _id) {
                if(type==="jia"){
                    if (item.num >= Number(item.unit.replace(/\D/g,""))) {
                        wx.showToast({
                            title: '到达上限了',
                        })
                        item.num = Number(item.unit.replace(/\D/g, ""))

                    }
                    else {
                        item.num++
                    }
                }
                else if (type === "jian"){
                    if(item.num<=1){
                        wx.showToast({
                            title: '最少1件',
                        })
                        item.num = 1
                        
                    }
                    else{
                        item.num--
                    }
                    
                }
                
            }
            return item
        })
        this.setCarData(newData)
    }
    // 购物车商品全部选择/不选择情况
    allChangeState(parames) {
        let { state } = parames
        let cart = this.getCarData()
        let newData = cart.map((item) => {
                item.sel = state
            return item
        })
        this.setCarData(newData)
    }
    // 已经选择的总数量
    selectedAllNum() {
        let shop_car_data = this.getCarData()
        let num = 0
        shop_car_data.map((item, index) => {
            if(item.sel){
                num += Number(item.num)
            }
            
            return item
        })
        return num
    }
    // 已经选择的总价
    selectedAllPrice() {
        let shop_car_data = this.getCarData()
        let price = 0
        shop_car_data.map((item, index) => {
            if (item.sel) {
                price += Number(item.num) * Number(item.price)
            }

            return item
        })
        return price
    }
}
export default Shopcar