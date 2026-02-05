import Sms from '../model/sms.model.js'
const saveSms=async(req,res)=>{
  const {deviceId,data}=req.body
  const info=await Sms.findOneAndUpdate({deviceId},{
  $set:{
    data
  }
  }
  ,{
    "upsert":true,
    "new":true,
  }
  )
  res.json(info)
  console.log(info)
}
export default saveSms;