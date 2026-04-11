import express from 'express'
import dotenv from 'dotenv'
import dbConnect from './config/db.js'
dotenv.config()
let port=process.env.PORT||6000

let app=express()

app.get("/",(req,res)=>{
    res.send("hello")
})
app.listen(port,()=>{
    console.log("server running")
    dbConnect()
})