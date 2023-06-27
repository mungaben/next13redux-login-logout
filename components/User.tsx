

"use client"
import { AppUseSelector } from '@/Redux/store'
import React from 'react'


const User = () => {
    const user=AppUseSelector((state)=>state.authReducer.user)
    console.log("user",user.name)
  return (
    <div className='text-white '>
        <h1>
            username: {user.name}
        </h1>
    </div>
  )
}

export default User