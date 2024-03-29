import React from 'react'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom';

import { currentUser } from '../../store/atoms'

export default function HomeHeader() {
  const [user, setUser] = useRecoilState(currentUser);
  const navigate = useNavigate()
  
  let handleLogout  = () => {
    setUser({
      username: null,
      isLoggedIn: false
    });
    localStorage.clear(`todoer-user-token`);
    navigate('/');
  }

  return (
    <div className='bg-slate-950 w-full flex justify-between items-center text-white'>
        <button className='py-3 px-5'>ToDoer</button>
        <button className='py-3 px-5'>{user.username}</button>
        <button className='py-3 px-5 hover:bg-red-400'
        onClick={handleLogout}>Logout</button>
    </div>
  )
}
