const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    //  _id:{type:String,required:true},
    token:{type:String,default:null},
    isbild:{type:Boolean,default:false},
    user: { type: String, default: null },
    pass: { type: String, default: null },
    openid: { type: String, required: true },
    session_key: { type: String, required: true },
    nickName: { type: String, default: null },
    avatarUrl: { type: String, default: null },
    ctime: { type: Date, default: Date.now }

})

let userModel = mongoose.model('user', userSchema)
module.exports = userModel