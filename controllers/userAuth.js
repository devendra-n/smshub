import jwt from 'jsonwebtoken';
import userModel from '../model/user.model.js';

const setUser=async(obj)=>{
  const secret=process.env.SECRET;
 return jwt.sign(obj,secret)
}
const getUser=async(req)=>{
  const secret=process.env.SECRET;
  try{
    const token=req.headers?.authorization.split(" ")[1]
    const user=jwt.verify(token,secret);
    const info=await userModel.find({email:user.email});
    return info;
  }
  catch(e){
    
    return null;
  }
}
export {getUser,setUser};