import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useRecoilState } from "recoil"

import HomeHeader from '../components/home/HomeHeader'
import ToDoWrapper from '../components/home/ToDoWrapper'
import { currentUser } from '../store/atoms';
import WeatherBoard from '../components/home/WeatherBoard';
import TodoListForm from '../components/home/TodoListForm';

export default function HomePage() {

  const navigate = useNavigate()
  const [activeUser, setActiveUser] = useRecoilState(currentUser)
  const [render, setRender] = useState(false)

  async function verifyUser(){
    let token = localStorage.getItem(`todoer-user-token`);
    if (token == null){
      alert(`Error : Unauthorized No Token`)
      navigate("/")
      return false
    }
    let response = await axios.get(`http://localhost:5000/home`, {
        headers : {
          authorization : token
        }
    })
    if (response.data.stat == false){
      alert(`Error : Unauthorized User Not Found`)
      console.log(response.data.msg)
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

  async function loadHome(){
    if (activeUser.isLoggedIn == false){
      console.log(`Hehe`)
      let temp = await verifyUser()
      console.log(temp)
      if(temp == true){
        console.log(`user verified`)
        setRender(true);
      }
    }
    else{
      setRender(true)
      alert(`HOME : Welcome ${activeUser.username}`)
    }  
  }

  useEffect (()=>{
    loadHome()
  }, [])

  return (
    (render)?<div>
    <HomeHeader />
    <WeatherBoard />
    <TodoListForm />
    <ToDoWrapper />
</div>:<div>Verifying User...</div>
  )
}
