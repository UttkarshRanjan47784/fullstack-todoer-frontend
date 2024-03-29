import React from 'react'
import Register from '../components/auth/Register'

import Header from '../components/auth/Header'

export default function RegisterPage() {
  return (
    <>
      <Header />
      <div className='login-page h-dvh flex justify-center'>
        <div className='register-wrapper h-1/3 w-1/2 mt-24 border-2 border-black flex justify-center items-center md:h-1/2'>
            <Register />
        </div>
    </div>
    </>
  )
}
