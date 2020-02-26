const express = require('express')
const router =express.Router()
const jwt = require('../../utils/jwt')
const roots = require('./rootList')
const adminModel = require('../../db/model/adminModel')
router.post('/list',(req,res)=>{
  let {userName,passWord} = req.body 
  adminModel.find({},'_id userName passWord rootLevel')
  .then((db)=>{
    console.log(db)

    res.send({err:0,msg:'search ok',list:db})
  })
})
router.post('/add',(req,res)=>{
  let {userName,passWord} = req.body 
  let rootList=roots[0]
  adminModel.insertMany({userName,passWord,rootList})
  .then((db)=>{
    console.log(db)
    res.send({err:0,msg:'添加 ok'})
  })
})
router.post('/del',(req,res)=>{
  let {uid} = req.body 
  adminModel.deleteOne({_id:uid})
  .then((db)=>{
    console.log(db)

    res.send({err:0,msg:'del ok'})
  })
})
router.post('/update',(req,res)=>{
  let {uid,rootLevel} = req.body 
  let rootList=roots[rootLevel]||[]
  if(!rootList.length)  return res.send({err:-1,msg:'权限参数错误'})
  adminModel.update({_id:uid},{rootLevel,rootList})
  .then((db)=>{
    console.log(db)

    res.send({err:0,msg:'修改 ok'})
  })
})
module.exports=router