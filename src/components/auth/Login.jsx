import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {

    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let navigate = useNavigate()

    let handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    let handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }


    let handleLogin = async (event) => {
        event.preventDefault();
        if (username.length == 0 || password.length == 0){
            alert(`Please Enter The Credentials!`);
            return;
        }
        let user = {
            username : username,
            password : password
        }
        let response = await axios.post(`http://localhost:5000/login`, user);
        if (response.data == true)
            navigate('/home');
        else
            alert(`${response.data}`)
    }

    let handleGoToRegister = (event) => {
        event.preventDefault();
        navigate(`/register`);
    }

  return (
    <form className=' p-3 space-y-3 w-full md:w-3/4 text-center'>
        <h1 className='text-2xl'>LOGIN</h1>
        <input className='border-2 text-center border-black mx-auto w-3/4 rounded-full p-3 block'
        type='text' name='username' value={username} onChange={handleUsernameChange}></input>
        <input className='border-2 text-center border-black mx-auto w-3/4 rounded-full p-3 block'
        type='text' name='password' value={password} onChange={handlePasswordChange}></input>
        <input className='bg-orange-500 block mx-auto px-3 py-2 cursor-pointer' 
        type='submit' onClick={handleLogin} value={`LOGIN`}></input>
        <button className='block mx-auto px-3 py-2 cursor-pointer hover:underline' 
         onClick={handleGoToRegister} >Don't have an account? Register</button>
    </form>
  )
}
