 const mongoose=require('mongoose');
 const Schema=mongoose.Schema;

 let  bannerSchema=new Schema({
     name:      {type:String,required:true},
     imagePath: {type:String,required:true},
     ctime: { type: Date, default: Date.now }

 })

 let bannersModel=mongoose.model('banners',bannerSchema)
 module.exports=bannersModel