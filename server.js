import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import device from './controllers/device.js'
import cors from 'cors';
import cookieParser from 'cookie-parser';
import handleRegister from './controllers/handleRegister.js'
import handleLogin from './controllers/handleLogin.js'
import saveSms from './controllers/saveSms.js'
import getSms from './controllers/getSms.js'
import Sms from './model/sms.model.js';
dotenv.config();
const PORT=process.env.PORT ||3000;
const app=express();
app.use(cookieParser())
app.use(cors())
mongoose.connect(process.env.MONGO_URL);
app.use(express.json());
app.get('/',(req,res)=>{
  res.json({status:true})
});

app.post("/register",handleRegister);
app.post('/sms',saveSms);
app.post("/login",handleLogin)
app.post("/getsms",getSms);
app.post("/device",device)

app.listen(PORT,e=>{
  console.log(`Server running at ${PORT}`)
})