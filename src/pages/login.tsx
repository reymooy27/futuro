import { signIn } from 'next-auth/react'
import React from 'react'

export default function Login() {

  const CALLBACK_URL = process.env.VERCEL_URL ? process.env.VERCEL_URL : 'http://localhost:3000'

  const handleSignIn = ()=>{
    signIn('google', {callbackUrl: CALLBACK_URL})
  }

  return (
    <div className='h-full w-screen flex justify-center items-center absolute'>
      <button 
        className='w-[200px] h-11 p-5 bg-blue-500 rounded' 
        onClick={handleSignIn}>
          Login with Google
      </button>
    </div>
  )
}