import React from 'react'
import { useRecoilValue } from 'recoil'

import { currentUser } from '../../store/atoms'

export default function HomeHeader() {
const user = useRecoilValue(currentUser)
  return (
    <div className='bg-slate-950 w-full flex justify-between items-center text-white'>
        <button className='py-3 px-5'>ToDoer</button>
        <button className='py-3 px-5'>{user.username}</button>
        <button className='py-3 px-5 hover:bg-red-400'>Logout</button>
    </div>
  )
}
