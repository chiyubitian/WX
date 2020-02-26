const jwt = require('jsonwebtoken');
const screat = 'sjlfslfdfdsfwoiklsajafderewflsfj' 
module.exports={
  createToken(payload,expires){
    let token =jwt.sign(payload,screat,{expiresIn:expires})
    return token
  },
  verifyToken(token){
    return     jwt.verify(token,screat)
  //  return new Promise((resolve,reject,next)=>{
  //    jwt.verify(token,screat,(err,data)=>{
  //       if(err){
  //         reject(err)
  //       }else{
  //         resolve(data,next)
  //       }
  //    })
  //  })
  }
}
