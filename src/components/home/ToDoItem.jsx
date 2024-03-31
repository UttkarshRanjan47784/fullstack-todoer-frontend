import React, { memo } from 'react'
import { useRecoilState } from "recoil"

import { todos } from '../../store/atoms.jsx'

const ToDoItem = memo((props) => {

  let [superList, setSuperList] = useRecoilState(todos)

  let handleStatChange = () => {
    // saving old value
    let oldSuperList = {...superList}
    //frontend Update (Optimistic Rendering)
    let newArr = superList[props.listName].map((item) => {
      if (item.taskName == props.taskName){
        let stat = item.taskStatus
        item = {
          ...item,
          taskStatus : !stat
        }
        return item;
      }
      return item
    });
    setSuperList((prev) => {
      let temp = {...prev};
      temp[`${props.listName}`] = [...newArr]
      return temp;
    });
    try {
      //backend Update
    } catch (error) {
      //rollback frontend changes
    }
  }

  let handleDelete = () => {
    // saving old value
    let oldSuperList = {...superList}
    //frontend Update (Optimistic Rendering)
    let newArr = superList[props.listName].filter((item) => {
      return (item.taskName != props.taskName)
    })
    setSuperList((prev) => {
      let temp = {...prev};
      temp[`${props.listName}`] = [...newArr]
      return temp;
    });
    try {
      //backend Update
    } catch (error) {
      //rollback frontend changes
    }
  }

  return (
    <div className='grid grid-cols-1 bg-gray-800 text-white py-3 px-3 space-y-3'>
        <div className='text-center py-1 px-3'
        style={(props.stat)?{textDecoration : "line-through"}:null}>{props.taskName}</div>
        <div className='grid grid-cols-2 gap-2'>
            <button className='bg-orange-400 hover:bg-orange-500 py-1 px-3 rounded-full'
            onClick={handleStatChange}>{(props.stat)?`UNDO`:`DONE`}</button>
            <button className='bg-orange-400 hover:bg-orange-500 py-1 px-3 rounded-full'
            onClick={handleDelete}>DELETE</button>
        </div>
        {/* <hr className='w-full col-span-5 mt-2' /> */}
    </div>
  )
})

export default ToDoItem
