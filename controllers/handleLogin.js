import User from '../model/user.model.js'
import bcrypt from 'bcryptjs'
import {setUser} from './userAuth.js'
const Login=async(req,res)=>{
  try {
    const {email,password}=req.body;
    const user=await User.findOne({email})
    console.log(user)
    if (user) {
      
       const result = await bcrypt.compare(password,user.password);
       if(result){
         const token=await setUser({email,name:user.name});
         res.json({token});
       }
       else{
         res.json({"status":false,info:"Something went wrong"});
       }
      
      
      
      
      
    }
    else{
      res.json({"status":false,info:"Account does not exists"});
    }
  } 
  catch (e) {
    
   res.json({"status":false,info:"Something went wrong"}); 
  }
  
}
export default Login;