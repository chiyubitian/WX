 const mongoose=require('mongoose');
 const Schema=mongoose.Schema;

 let  goodsTypeSchema=new Schema({

     _id:{type:Number,required:true},
     name:      {type:String,required:true},
     imgPath:      {type:String,required:true},
     ctime: { type: Date, default: Date.now }

 })
 let goodsTypeModel=mongoose.model('goodstypes',goodsTypeSchema)
 module.exports=goodsTypeModel