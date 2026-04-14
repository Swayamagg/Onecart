import User from "../model/user.js"
import validator from "validator"
import bcrypt from "bcrypt"
import { genToken } from "../config/token.js";

export const register=async(req,res)=>{
    try {
       const {name,email,password}=req.body;
       const userExist=await User.findOne({email})
     if(userExist){
        return res.status(400).json({message:"user already exists"})
     } 
     if(!validator.isEmail(email)){
        return res.status(400).json({message:"Enter vaild email"})
     }
     if(!password||password.length<8){
        return res.status(400).json({message:"Enter strong password"})
     }
     let hashPassword=await bcrypt.hash(password,10)
     const user=await User.create({name,email,password:hashPassword})
     let token=await genToken(user._id)
     res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite:"Strict",
        maxAge:7*24*60*60*1000
     })
     return res.status(201).json(user)
    } catch (error) {
       return res.status(500).json({message:`Register error ${error}`}) 
    }
}

export const login=async(req,res)=>{
try {
   let {email,password}=req.body;
   const user=await User.findOne({email});
   if(!user){
      return res.status(404).json({message:"user not found"})
   }
   let isMatch=await bcrypt.compare(password,user.password)
   if(!isMatch){
      return res.status(400).json({message:"password not match"})
   }
   let token=await genToken(user._id)
     res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite:"Strict",
        maxAge:7*24*60*60*1000
     })
     return res.status(201).json({message:"login successfully"})
} catch (error) {
   return res.status(500).json({message:`Login error ${error}`})
}
}

export const logout=async(req,res)=>{
   try {
      res.clearCookie("token")
      return res.status(200).json({message:"logout successfully"})
   } catch (error) {
      return res.status(500).json({message:`Logout error ${error}`})
   }
}