import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useRecoilState } from "recoil"

import HomeHeader from '../components/home/HomeHeader'
import ToDoWrapper from '../components/home/ToDoWrapper'
import { currentUser } from '../store/atoms';
import WeatherBoard from '../components/home/WeatherBoard';
import TodoForm from '../components/home/TodoForm';

export default function HomePage() {

  const navigate = useNavigate()
  const [activeUser, setActiveUser] = useRecoilState(currentUser)
  const [count, setCount] = useState(0)

  async function verifyUser(){
    let token = localStorage.getItem(`todoer-user-token`);
    if (token == null){
      alert(`Error : Unauthorized`)
      navigate("/")
      return false
    }
    let response = await axios.get(`http://localhost:5000/home`, {
        headers : {
          authorization : token
        }
    })
    if (response.data.stat == false){
      alert(`Error : Unauthorized`)
      navigate("/")
      return false
    }
    if (response.data.stat == true){
      setActiveUser({
        username : response.data.msg,
        isLoggedIn : true
      })
      return true
    }
  }

  useEffect (()=>{
    if (activeUser.isLoggedIn == false)
      verifyUser();
    else
      alert(`HOME : Welcome ${activeUser.username}`)    
  }, [])

  return (
    <div>
        <HomeHeader />
        <WeatherBoard />
        <TodoForm />
        <ToDoWrapper />
        <button className='bg-orange-400 w-20'
        onClick={() => {
          setCount((p) => p+1)
        }}>{count}</button>
    </div>
  )
}
