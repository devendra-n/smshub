import mongoose from 'mongoose';
/*
ghp_
os0UhMj3qMsSIyrHKC
J3iIwqdNyV2r4PDsIF 
 
*/
const smsSchema=new mongoose.Schema({
  deviceId:String,
  deviceModel:String,
  alias:String,
  sms:[{address:Number,data:[{id:Number,time:String,body:String}]} ]
})

const smsModel=mongoose.model("sms",smsSchema);
export default smsModel;