import { Spinner } from '@chakra-ui/react'
import { signIn } from 'next-auth/react'
import React, { useState } from 'react'

export default function Login() {

  const [loading, setLoading] = useState<boolean>(false)
  
  const CALLBACK_URL = process.env.VERCEL_URL ? process.env.VERCEL_URL : 'http://localhost:3000'

  const handleSignIn = ()=>{
    setLoading(true)
    signIn('google', {callbackUrl: CALLBACK_URL})
    .then((onfullfilled)=> setLoading(false))
    .catch(onrejected=> setLoading(false))
  }


  return (
    <div className='h-screen w-screen flex justify-center items-center absolute'>
      <button 
        className='w-[200px] h-11 flex justify-center items-center p-5 bg-blue-500 hover:opacity-80 transition-all ease-in-out duration-300 rounded' 
        onClick={handleSignIn}
      >
        {loading ? <Spinner/> : "SignIn with Google"}
      </button>
    </div>
  )
}