import React from 'react'

export default function HomeHeader() {
  return (
    <div className='bg-slate-950 w-full flex justify-between items-center text-white'>
        <button className='py-3 px-5 hover:bg-red-400'>ToDoer</button>
        <button className='py-3 px-5 hover:bg-red-400'>Tiger</button>
        <button className='py-3 px-5 hover:bg-red-400'>Logout</button>
    </div>
  )
}
