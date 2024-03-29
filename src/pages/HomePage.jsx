import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import HomeHeader from '../components/home/HomeHeader'
import ToDoWrapper from '../components/home/ToDoWrapper'
import axios from 'axios';

export default function HomePage() {

  const navigate = useNavigate()

  async function verifyUser(){
    let token = localStorage.getItem(`todoer-user-token`);
    if (token == null){
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
  }

  useEffect (()=>{
      verifyUser();
  }, [])

  return (
    <div>
        <HomeHeader />
        {/* name={username} */}
        <ToDoWrapper />
    </div>
  )
}
