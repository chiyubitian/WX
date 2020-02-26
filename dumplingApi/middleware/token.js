const jwt  = require('../utils/jwt')
module.exports= (req,res,next)=>{
  let { token } = req.query 
  console.log(token)
    if(!token) return res.send({err:-997,msg:'token缺失'})
    try {
      jwt.verifyToken(token)
      next()
    } catch (error) { 
      res.send({err:-998,msg:'token失效'})
    }
}