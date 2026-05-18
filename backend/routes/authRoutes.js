import express from 'express'
import { googleAuth, login, logout, register } from '../controller/auth.js'

const authRoute=express.Router()



authRoute.post("/register",register)
authRoute.post("/login",login)
authRoute.get("/logout",logout)
authRoute.post("/googlelogin",googleAuth)

export default authRoute