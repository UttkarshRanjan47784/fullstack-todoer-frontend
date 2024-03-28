import React, { useEffect } from 'react'
import Login from '../components/auth/Login'

export default function LoginPage() {

  return (
    <div className='login-page h-dvh flex justify-center'>
        <div className='login-wrapper h-1/3 w-1/2 mt-24 border-2 border-black flex justify-center items-center md:h-1/2'>
            <Login />
        </div>
    </div>
  )
}
