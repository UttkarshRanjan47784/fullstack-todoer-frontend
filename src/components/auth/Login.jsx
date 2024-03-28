import React, { useState } from 'react'
import axios from 'axios'

export default function Login() {

    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('')

    let handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    let handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }


    let handleLogin = async (event) => {
        event.preventDefault();
        let user = {
            username : username,
            password : password
        }
        let response = await axios.post(`http://localhost:5000/register`, user);
        localStorage.setItem(`todoer-user-token`, `${response.data}`);
        console.log(localStorage.getItem(`todoer-user-token`));
    }

  return (
    <form className=' p-3 space-y-3 w-full md:w-3/4'>
        <input className='border-2 text-center border-black mx-auto w-3/4 rounded-full p-3 block'
        type='text' name='username' value={username} onChange={handleUsernameChange}></input>
        <input className='border-2 text-center border-black mx-auto w-3/4 rounded-full p-3 block'
        type='text' name='password' value={password} onChange={handlePasswordChange}></input>
        <input className='bg-orange-500 block mx-auto px-3 py-2 cursor-pointer' 
        type='submit' onClick={handleLogin} value={`LOGIN`}></input>
    </form>
  )
}
