const express = require('express');
const request = require('request');
const router = express.Router();
const axios = require('axios')
const jwt = require("../../utils/jwt")
const { AppId, AppSecret } = require('../../config/config').applet
const userModel = require('../../db/model/userModel.js');

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
router.post('/appletlogin', (req, res) => {
   // console.log(req.body)
   let { code, nickName, avatarUrl } = req.body
   // console.log(code)
   wxLogin(code)
      .then((data) => {
         res.send({ err: 0, msg: '登录成功', data })
      })
      .catch((err) => {
         res.send({ err: -1, msg: '登录失败', })
      })
})
// 微信登录
async function wxLogin(code) {
   let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${AppId}&secret=${AppSecret}&js_code=${code}&grant_type=authorization_code`
   let res = await axios.get(url)
   /* .then((response) => {
      let { session_key, openid } = response.data
      console.log(session_key, openid)
      userModel.findOneAndUpdate({ openid }, { session_key, openid }, { upsert: true })
         .then((data) => {
            // console.log(data)
            res.send({ err: 0, msg: '登录成功', token: data._id })
         })
   }) */
   let { session_key, openid } = res.data
   let state = await userModel.findOne({ openid })
   console.log(state)
   if (state) {
      let { _id, isbild, nickName, avatarUrl, ctime } = state
      let token = null
      let expires = 24 * 3600
      token = jwt.createToken({ _id }, expires)
      return { token , _id, isbild, nickName, avatarUrl, ctime }
   }
   else {
      let res = await userModel.insertMany({ session_key, openid })
      console.log("没有", res)
      let { _id, nickName, avatarUrl } = res[0]
   }
   return { session_key, openid }
}
// 绑定用户名
router.post('/binduser', (req, res) => {
   // console.log(req.body)
   let { _id, username, password } = req.body
   console.log(_id, username, password)

   userModel.find({ user: username })
      .then((data) => {
         console.log(data)
         if (data.length) {
            res.send({ err: -1, msg: '该用户名已经被绑定', })
         }
         else {
            return userModel.updateOne({ _id }, { user: username, pass: password, isbild: true })
               .then((data) => {
                  res.send({ err: 0, msg: '绑定成功' })
               })
               .catch((err) => {
                  res.send({ err: -1, msg: '绑定失败', })
               })

         }

      })
      .catch((err) => {
         res.send({ err: -1, msg: '绑定失败', })
      })
})
// 用户名登录
router.post('/userlogin', (req, res) => {
   // console.log(req.body)
   let { username, password } = req.body
   console.log(username, password)

   userModel.find({ user: username, pass: password })
      .then((data) => {
         console.log(data)
         let _id = data[0]._id
         if (!data.length) {
            res.send({ err: -1, msg: '该用户名与密码不正确', })
         }
         else {
            let token = null
            let expires = 24*3600
            token = jwt.createToken({ _id }, expires)
            return userModel.updateOne({ _id }, { token })
               .then((data) => {
               res.send({ err: 0, msg: '登录成功' , data:{ token ,_id , username}})
               })
               .catch((err) => {
               res.send({ err: -1, msg: '登录失败', })
            })

         }

      })
      .catch((err) => {
         res.send({ err: -1, msg: '登录失败', })
      })
})
// request(url,(err,response,body)=>{
//    let {session_key,openid}=JSON.parse(body) 
//    userModel.findOneAndUpdate({openid},{session_key,openid,nickName,avatarUrl},{upsert:true})
//    .then((data)=>{
//       console.log(data)
//       res.send({err:0,msg:'登录成功',token:data._id})
//    })
// })


module.exports = router		