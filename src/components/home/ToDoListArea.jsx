import React from 'react'

export default function ToDoListArea() {

    let content = [
        <li key='a'>This course is made for people who want to learn DSA from A to Z for free in a well-organized and structured manner.</li>,
        <li key='b'>This course is made for people who want to learn DSA from A to Z for free in a well-organized and structured manner.</li>,
        <li key='c'>This course is made for people who want to learn DSA from A to Z for free in a well-organized and structured manner.</li>,
        <li key='d'>This course is made for people who want to learn DSA from A to Z for free in a well-organized and structured manner.</li>,
        <li key='e'>This course is made for people who want to learn DSA from A to Z for free in a well-organized and structured manner.</li>,
        
    ]

    let showBigger = (event) => {
        // event.target.className = `bg-purple-500 row-span-3 p-3`
        // event.target.innerText = content
        console.log(event.target.innerText.length)
    }

    let showSmaller = (event) => {
        event.target.className = `bg-purple-500 row-span-2 p-3`
        event.target.innerText = content.slice(0, 50)
    }

    // onMouseOver={showBigger} onMouseLeave={showSmaller}

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-3'>
        {/* <div className='bg-purple-500 p-3 h-64 overflow-auto'>1</div>
        <div className='bg-purple-500 p-3 h-64 overflow-auto'>2</div>
        <div className='bg-purple-500 p-3 h-64 overflow-auto'>3</div>
        <div className='bg-purple-500 p-3 h-64 overflow-auto'>4</div>
        <div className='bg-purple-500 p-3 h-64 overflow-auto'>5</div>
        <div className='bg-purple-500 p-3 h-64 overflow-auto'>6</div> */}
    </div>
  )
}
