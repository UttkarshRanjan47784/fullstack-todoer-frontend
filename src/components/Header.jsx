import React from 'react'

export default function Header() {
  return (
    <div className='bg-slate-950 w-full flex items-center text-white justify-between'>
        <button className='py-3 px-5 hover:bg-red-400'>ToDoer</button>
        <button className='py-3 px-5 hover:bg-red-400'>Account</button>
    </div>
  )
}
