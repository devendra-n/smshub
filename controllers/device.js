import UserModel from '../model/user.model.js'
const Save=async(req,res)=>{
  try{
    const {pin,deviceId,model}=req.body;
    const resp=await UserModel.updateOne({pin},{
      $addToSet:{
        devices:{deviceId,name:model}
      }
    })
    res.json({status:true})
  }
  catch(e){
    console.log(e)
    res.json({status:e})
  }
}
export default Save;