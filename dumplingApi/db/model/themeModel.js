 const mongoose=require('mongoose');
 const Schema=mongoose.Schema;

 let  themeSchema=new Schema({
     _id:      {type:Number,required:true},
     type:  {type:String,required:true},//banner theme
     size:      {type:String,required:true},
     name:      {type:String,required:true},
     imgPath:   {type:String,required:true },
     themetop:   {type:String,required:true },
     ctime: { type: Date, default: Date.now },

 })

 let themesModel=mongoose.model('themes',themeSchema)
 module.exports=themesModel