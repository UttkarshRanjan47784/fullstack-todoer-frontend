import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useRecoilState } from "recoil"

import HomeHeader from '../components/home/HomeHeader'
import ToDoWrapper from '../components/home/ToDoWrapper'
import { currentUser } from '../store/atoms';

export default function HomePage() {

  const navigate = useNavigate()
  const [activeUser, setActiveUser] = useRecoilState(currentUser)

  async function verifyUser(){
    console.log(`No active user, getting auth token`)
    let token = localStorage.getItem(`todoer-user-token`);
    if (token == null){
      alert(`Error : Unauthorized`)
      navigate("/")
      return
    }
    let response = await axios.get(`http://localhost:5000/home`, {
        headers : {
          authorization : token
        }
    })
    if (response.data.stat == false){
      alert(`Error : Unauthorized`)
      navigate("/")
      return
    }
    if (response.data.stat == true){
      setActiveUser({
        username : response.data.msg,
        isLoggedIn : true
      })
    }
  }

  useEffect (()=>{
    if (activeUser.isLoggedIn == false)
      verifyUser();
    else
      alert(`Welcome ${activeUser.username}`)
  }, [])

  return (
    <div>
        <HomeHeader />
        {/* name={username} */}
        <ToDoWrapper />
    </div>
  )
}
