 const mongoose=require('mongoose');
 const Schema=mongoose.Schema;

 let  shopCarSchema=new Schema({
     uid:  {type:String,required:true},
     list: {type:Array,required:true},
     ctime: { type: Date, default: Date.now }

 })
/*
uid:'',
list:[
    {
        goodsId:'',
        num:'',
    }
]

*/ 
 let shopCarModel=mongoose.model('shopcar',shopCarSchema)
 module.exports=shopCarModel