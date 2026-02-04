import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import Sms from './model/sms.model.js'
dotenv.config()
const PORT=process.env.PORT ||3000;
const app=express()
app.use(express.json())
app.get('/',(req,res)=>{
  res.json({status:true})
})
app.post('/sms',async(req,res)=>{
  res.json(req.body)
  
})
app.get("/sms",async(req,res)=>{
  await mongoose.connect(process.env.MONGO_URL)
  const data=await Sms.find()
  res.json(data)
})


app.listen(PORT,e=>{
  console.log(`Server running at ${PORT}`)
})