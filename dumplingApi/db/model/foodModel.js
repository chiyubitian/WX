// 创建和用户表相关的数据模型

const mongoose = require('mongoose')
let foodSchema= mongoose.Schema({
    name:{ type:String,required:true },
    price:{ type:String,required:true },
    desc:{ type:String,required:true },
    img:{ type:String,required:true },  //图片的路径  图片的base64数据
    foodType:{ type:String,required:true },
   
})
let  foodModel = mongoose.model('foods',foodSchema)

module.exports = foodModel