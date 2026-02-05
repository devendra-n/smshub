import UserModel from '../model/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import {setUser} from './userAuth.js'
const handleRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Validation: Check if all fields are present
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // 2. Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "User with this email already exists" });
    }

    // 3. Hash the password (using await instead of callback)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Generate PIN
    // Note: Use padStart to ensure it's always 8 digits if a leading zero occurs
    const pin = Math.floor(Math.random() * 99999999); 

    // 5. Create the model
    const newUser = new UserModel({
      pin,
      name,
      email,
      password: hashedPassword,
    });

    // 6. Save to DB (CRITICAL: Must use await)
    const result = await newUser.save();
    const token=await setUser({name,email})

    // 7. Send success response
    res.cookie("auth",token).status(201).json({ token});

  } catch (error) {
    console.error("Registration Error:", error);
    // Send a generic error message to client, log the real one on server
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default handleRegister;
