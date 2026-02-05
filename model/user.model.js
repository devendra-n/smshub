import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
 name:{
   type:String,
   required:true
 },
 email:{
   type:String,
   required:true,
   unique:true,
 },
 pin:{
   type:Number,
   required:true
 },
 password:{
   type:String,
   required:true
 },
 devices:[{deviceId:String,name:String}]
},{timestamp:true});

const model=mongoose.model("users",userSchema);
export default model;