import React, { memo } from 'react'

const ToDoItem = memo((props) => {
  return (
    <div className='grid grid-cols-1 bg-gray-800 text-white py-3 px-3 space-y-3'>
        <div className='text-center py-1 px-3'>{props.taskName}</div>
        <div className='grid grid-cols-2'>
            <button className='bg-orange-400 hover:bg-orange-500 py-1 px-3 rounded-full'>DONE</button>
            <button className='bg-orange-400 hover:bg-orange-500 py-1 px-3 rounded-full'>DELETE</button>
        </div>
        {/* <hr className='w-full col-span-5 mt-2' /> */}
    </div>
  )
})

export default ToDoItem
