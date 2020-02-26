 const mongoose=require('mongoose');
 const Schema=mongoose.Schema;

 let  goodsSchema=new Schema({

     typeName:  {type:String,required:true},
     type:      {type:Number,required:true},
     themeid:   {type:Number,required:true},
     name:      {type:String,required:true},
     price:     {type:String,required:true},
     unit:      {type:String,required:true},
     aid:       {
     	type: Schema.Types.Number,//如果AScheme的_id type为String，这里对应写String
　　　　 ref:'goodsTypeModel'
     },
     imagePath:      {type:String,required:true},
     ctime: { type: Date, default: Date.now }

 })

 let goodsModel=mongoose.model('goods',goodsSchema)
 module.exports=goodsModel