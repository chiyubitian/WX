const express = require('express')
const router = express.Router()
const Food = require('../../control/foodController')

//查询接口（分页查询  分类查询 关键字查询）
router.post('/getFoods',(req,res)=>{
  let page=Number(req.body.page)||1
  let pageSize=Number(req.body.pageSize)||2
  Food.get(page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'查询ok',list:data})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'查询失败'})})
})
// 分类查询
router.get('/getFoodsByType',(req,res)=>{
  let {foodType} = req.query 
  let page=Number(req.query.page)||1
  let pageSize = Number(req.query.pageSize)||2
  Food.getByType(foodType,page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'查询ok',list:data})
  })
})
// 关键字查询
router.get('/getFoodsByKw',(req,res)=>{
  let page=Number(req.query.page)||1
  let pageSize = Number(req.query.pageSize)||2
  let kw = req.query.kw 
  Food.getByKw(kw,page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'ok',list:data})
  })
})
//删除接口
router.post('/delFood',(req,res)=>{
  let  {foodId}=req.body
  Food.del(foodId)
  .then((data)=>{
    res.send({err:0,msg:'del ok'})
  })
  .catch((err)=>{ 
    res.send({err:-1,msg:'del nook'})
  })
})
//添加数据
router.post('/addFood',(req,res)=>{
  let {name,price,img,foodType,desc} = req.body 
  Food.add(name,price,img,foodType,desc)
  .then((data)=>{res.send({err:0,msg:'添加ok'})})
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'添加失败'})})
})
//修改 
router.post('/updateFood',(req,res)=>{
  let {foodId,name,price,img,foodType,desc} = req.body 
  Food.update(foodId,name,price,img,foodType,desc)
  .then((data)=>{res.send({err:0,msg:'修改ok'})})
  .catch((data)=>{res.send({err:-1,msg:'修改失败'})})
})
module.exports = router