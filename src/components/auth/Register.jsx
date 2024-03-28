import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Register() {

  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  const navigate = useNavigate()

  let handleUsernameChange = (event) => {
      setUsername(event.target.value);
  }
  let handlePasswordChange = (event) => {
      setPassword(event.target.value);
  }


  let handleRegister = async (event) => {
    event.preventDefault();
    if (username.length == 0 || password.length == 0){
        alert(`Please Credentials!`);
        return;
    }
    let user = {
        username : username,
        password : password
    }
    try {
      let response = await axios.post(`http://localhost:5000/register`, user);
      if (response.data.stat == `fail`)
        throw new Error(response.data.msg)
      localStorage.setItem(`todoer-user-token`, `${response.data.msg}`);
      alert(`Success`);
      navigate(`/home`)
    } catch (error){
      alert(error.message)
    }
  }

  let handleGoToLogin = (event) => {
    event.preventDefault();
    navigate(`/`);
  }

return (
  <form className=' p-3 space-y-3 w-full md:w-3/4 text-center'>
      <h1 className='text-2xl'>REGISTER</h1>
      <input className='border-2 text-center border-black mx-auto w-3/4 rounded-full p-3 block'
      type='text' name='username' value={username} onChange={handleUsernameChange}></input>
      <input className='border-2 text-center border-black mx-auto w-3/4 rounded-full p-3 block'
      type='text' name='password' value={password} onChange={handlePasswordChange}></input>
      <input className='bg-orange-500 block mx-auto px-3 py-2 cursor-pointer' 
      type='submit' onClick={handleRegister} value={`REGISTER`}></input>
      <button className='block mx-auto px-3 py-2 cursor-pointer hover:underline' 
         onClick={handleGoToLogin} >Already have an account? Login</button>
  </form>
)
}
