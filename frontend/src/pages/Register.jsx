import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import register from '../assets/register.webp'
import { IoEye, IoEyeOutline } from 'react-icons/io5' 
import axios from 'axios'
import { authDataContext}  from '../context/authContext'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../utils/firebase'


const Register = () => {
    const {serverUrl}=useContext(authDataContext)
    const [name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const [show,setShow]=useState(false)

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const result=await axios.post(`${serverUrl}/api/auth/register`,{name,email,password},{withCredentials:true})
            console.log(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    const handleRegister=async()=>{
        try {
            const response=await signInWithPopup(auth,provider)
            let user=response.user;
            let name=user.displayName;
            let email=user.email;
            const result=await axios.post(`${serverUrl}/api/auth/googlelogin`,{name,email},{withCredentials:true})
            console.log(result.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='flex'>
    <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12'>
        <form onSubmit={handleSubmit} className='w-full max-w-md  bg-white p-8 rounded-lg border shadow-sm'>
            <div className='flex justify-center mb-6'>
                <h2 className='text-xl font-medium'>Onecart</h2>
            </div>
            <h2 className='text-xl font-bold text-center mb-6'>Hey there! </h2>
            <div onClick={handleRegister} className='w-[100%] h-[50px] bg-black text-white rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer'>
                <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" className='w-[20px]' />Registration with Google
            </div>
            <div className='w-[100%] h-[20px] flex items-center justify-center gap-[10px] mt-3'>
                <div className='w-[40%] h-[1px] bg-[#96969635]'></div> OR <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
            </div>
            <p className='text-center mb-6 mt-3'>Enter your username and password to Login</p>
            <div className='mb-4'>
                <label className='block text-sm font-semibold mb-2'>Name</label>
                <input type="text" value={name} placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} className='w-full p-2 border rounded' />
            </div>
            <div className='mb-4'>
                <label className='block text-sm font-semibold mb-2'>Email</label>
                <input type="email" value={email} placeholder='Enter your email address' onChange={(e)=>setEmail(e.target.value)} className='w-full p-2 border rounded' />
            </div>
            <div className='relative'>
              <label className='block text-sm font-semibold mb-2'>Password</label>
              {!show && <IoEyeOutline className='w-[20px] h-[20px] cursor-pointer absolute right-1.5 bottom-[10px]' onClick={()=>setShow(prev=>!prev)}/>}
              {show &&<IoEye className='w-[20px] h-[20px] cursor-pointer absolute right-1.5 bottom-[10px]' onClick={()=>setShow(prev=>!prev)}/>}
              <input type={show ? "text" : "password"} value={password} placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} className='w-full p-2 border rounded' /> 
            </div>
            <button type='submit' className='w-full mt-7 bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition'>Sign Up</button>
            <p className='mt-6 text-sm text-center'>
                Already an account?{" "}
                <Link to='/login' className='text-blue-500'>Login</Link>
            </p>
        </form>
    </div>
    <div className='hidden md:block w-1/2 bg-gray-800'>
       <div className='h-full flex flex-col justify-center items-center'>
        <img src={register} alt="Login img" className='h-[750px] w-full object-cover' />
       </div>
    </div>
  </div>
  )
}

export default Register