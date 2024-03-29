import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

import Login from '../components/auth/Login'
import Header from '../components/auth/Header'
import { currentUser } from '../store/atoms';

export default function LoginPage() {
  
  const navigate = useNavigate()
  const [activeUser, setActiveUser] = useRecoilState(currentUser)

  async function verifyUser(){
    console.log(`LOGIN PAGE : No active user, getting auth token`)
    let token = localStorage.getItem(`todoer-user-token`);
    if (token == null){
      return
    }
    let response = await axios.get(`http://localhost:5000/home`, {
        headers : {
          authorization : token
        }
    })
    if (response.data.stat == false){
      return
    }
    if (response.data.stat == true){
      setActiveUser({
        username : response.data.msg,
        isLoggedIn : true
      })
      navigate("/home");
    }
  }

  useEffect (()=>{
    if (activeUser.isLoggedIn == false)
      verifyUser();
    else
      navigate("/home");
  }, [])

  return (
    <>
      <Header />
      <div className='login-page h-dvh flex justify-center'>
        <div className='login-wrapper h-1/3 w-1/2 mt-24 border-2 border-black flex justify-center items-center md:h-1/2'>
            <Login />
        </div>
      </div>
    </>
  )
}
