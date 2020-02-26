// 存放和食品 数据操作的相关信息 数据库的操作
const FoodModel = require('../db/model/foodModel')

async function  add(name,price,img,foodType,desc){
  // async 函数内部只要不出错 肯定走的是then 如果出错走的是catch
   let result =await FoodModel.insertMany({name,price,img,foodType,desc})
   console.log(result)
}
async function get(page,pageSize){
  // 获取总的食品数据数组
  let allFoods =await FoodModel.find()
  // 获取视食品数据 总数量
  let allCount =allFoods.length 
  let foods = await FoodModel.find().skip((page-1)*pageSize).limit(pageSize)
  return  {foods,allCount}
}

// 分类查询+分页
async function getByType(foodType,page,pageSize){
  let allFoods=await FoodModel.find({foodType})
  let allCount=allFoods.length 
  let  foods=await FoodModel.find({foodType}).skip((page-1)*pageSize).limit(pageSize)
  return {foods,allCount}
}
// 关键字查询+分页
async function getByKw(kw,page,pageSize){
 let regex=new RegExp(kw) //查询关键字的正则 
 let  allFoods=await FoodModel.find({$or:[{name:{$regex:regex}},{desc:{$regex:regex}}]})
 let  allCount = allFoods.length
 let  foods=await FoodModel.find({$or:[{name:{$regex:regex}},{desc:{$regex:regex}}]}).skip((page-1)*pageSize).limit(pageSize)
 return {foods,allCount}
}

// 删除
async function del(foodId){
  let result = await  FoodModel.deleteOne({_id:foodId})
  return result
}

// 修改
async function  update(foodId,name,price,img,foodType,desc){
  
  let result  = await FoodModel.updateOne({_id:foodId},{name,price,img,foodType,desc})
   console.log(result)
   return  result
}
module.exports={add,get,getByType,getByKw,del,update}