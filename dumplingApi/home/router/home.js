const express=require('express');
const router=express.Router();
const goodsModel=require('../../db/model/goodsModel.js');
const themesModel=require('../../db/model/themeModel.js');
const goodsTypeModel=require('../../db/model/goodsTypeModel.js');
const bannersModel=require('../../db/model/bannerModel.js');
/**
 * @api {get} getHome 获取首页信息
 * @apiName getHome
 * @apiGroup api
 *
 * 
 *
 * @apiSuccess {Array} banners banners of the goods.
 * @apiSuccess {Array} themes  themes of the goods.
* @apiSuccess {Array} products  products of the goods.
 */
router.get("/getHome",(req,res)=>{
  console.log(Date.now())
   let homedata={
      banners:[],
      themes:[],
      products:[] 
   }
   bannersModel.find()
      .then((data) => {
      homedata.banners=data
      return themesModel.find()
   })
      .then((data) => {
      // console.log(data)
      homedata.themes=data
      return goodsModel.find().limit(10)
   })
   .then((data)=>{
    homedata.products=data
    res.send({err:0,msg:'ok',data:homedata})
   })
   .catch((err)=>{
    console.log(err)
   })
  
})
//获取主题
/**
 * @api {get} getThemeById/:themeid/:page获取主题信息根据id 柯分页
 * @apiName getThemeById
 * @apiGroup api
 *
 * @apiParam {Number} page  数据页码数
* @apiParam {Number} themeid 主题id
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.get("/getThemeById",(req,res)=>{
   let page=Number(req.query.page||1)
   let pagesize=5
   let _id=req.query.themeid
   let themedata={
      topimg:'',
      products:[] 
   }
   themesModel.find({_id:_id})
   .then((data)=>{
   //   console.log(data);
      themedata.topimg=data[0].themetop||'暂无'
      return goodsModel.find({themeid:_id}).skip((page-1)*pagesize).limit(pagesize)
   })
   .then((data)=>{
    console.log(data);

    themedata.products=data
     console.log(themedata);
    res.send({err:0,msg:'ok',data:themedata})
   })
   .catch((err)=>{
    console.log(err)
   })
  
})
//获取单个商品
/**
 * @api {get} getGoodsById/:id 获取单个商品信息
 * @apiName getGoodsById
 * @apiGroup api
 *
 * @apiParam {Number} _id 商品id
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.get("/getGoodsById",(req,res)=>{
   let _id=req.query._id
   goodsModel.find({_id})
   .then((data)=>{
      res.send({err:0,data:data,msg:'ok'})
   })
   .catch((err)=>{
    console.log(err)
   })
  
})
/**商品相关*/ 
/**
 * @api {get} goodslist/ 获取所有商品信息
 * @apiName goodslist
 * @apiGroup api
 *
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.get("/goodslist",(req,res)=>{
	console.log(Date.now())
   goodsModel.find()
   .then((data)=>{
   		res.send(data)
   })
   .catch((err)=>{
   	console.log(err)
   })
	
})

router.get("/themelist",(req,res)=>{
	console.log(Date.now())
 themesModel.aggregate([{
   '$group':{'_id':'$type',
             'info':{'$push':{imgPath:'$imgPath',name:'$name',size:'$size'} 
            }
   }
}
])
.then((data)=>{
  res.send(data)
   console.log(data)
 })
 .catch((err)=>{
   console.log(err)
 })
	
})
/**
 * @api {get} goodsType/ 获取类别信息
 * @apiName goodsType
 * @apiGroup api
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
//查找类别
router.get("/goodsType",(req,res)=>{
  console.log(Date.now())
   // goodsTypeModel.insertMany({_id:6,name:'111',imgPath:'22222'})  
   goodsTypeModel.find()
      .then((data) => {
      res.send(data)
   })
   .catch((err)=>{
    console.log(err)
   })
  
})
/**
 * @api {get} /goodsByType/:type 根据类别查找商品
 * @apiName goodsByType
 * @apiGroup api
 *
 * @apiParam {Number} type type unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
//根据类别查找商品
router.get("/goodsByType",(req,res)=>{
  console.log(Date.now())
   // 

   // goodsTypeModel.insertMany({_id:6,name:'111',imgPath:'22222'}) 
   let type=req.query.type;
   console.log(type) 
   // goodsTypeModel.aggregate([
   //  {
   //    $lookup:{
   //      from:'goodsModel',
   //      localField:'_id',
   //      foreignField:"type",
   //      as:'list'
   //    }
   //  }])
   let list={info:'',name:'',imgPath:''}
   goodsTypeModel.find({_id:type})
   .then((data)=>{
 
      list['name']=data[0].name
      list['imgPath']=data[0].imgPath
      return goodsModel.find({type})   
   })
   .then((data)=>{
      console.log(list)
      list['info']=data
      console.log(list)
    res.send(list)
   })
   .catch((err)=>{
    console.log(err)
   })
  
})
module.exports=router		