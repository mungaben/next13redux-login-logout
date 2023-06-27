

"use client"

import { logIn, logOut } from "@/Redux/authSlice"
import { AppDispatch } from "@/Redux/store"
import { useState } from "react"
import { useDispatch } from "react-redux"

  

const Login = () => {
    const [name, setname] = useState("")
    const dispatch=useDispatch<AppDispatch>()

  const handleLogin = () => {
    console.log("user",name);
    
    dispatch(logIn(name))
    setname("")
  }
  const handleLogOut=()=>{
    dispatch(logOut())
  }
  return (
    <div className=' text-[#fafafa] flex flex-col '>
        <input type="text" name="user" id="username" value={name} onChange={(e)=>setname(e.target.value)} className="text-black"  />
        <h1>
            <button onClick={()=>handleLogin()} >Login</button>
        </h1>
        <div>
            <h1>
                <button onClick={()=>handleLogOut()} >logout</button>
            </h1>
        </div>
        
    </div>
  )
}

export default Login