import {getUser} from './userAuth.js';
import Sms from '../model/sms.model.js';
const getSms=async(req,res)=>{
  const  user=await getUser(req);
  if (!user) return res.json({"Error":"Please Login to continue"});
  //const deviceId=user?.devices[0]?.deviceId;
  const data=await Sms.find()
  res.json(data)
  
  
}

export default getSms;