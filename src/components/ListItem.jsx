import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

export default function ListItem({message,handleDelete,handleChangeChecked}) {
  return (
    <div>
      <li className='list' >
        <input 
        className='input'
        type="checkbox" 
        onChange={()=>handleChangeChecked(message.id)}
        checked={message.checked}
        />
        <label onDoubleClick={()=>handleChangeChecked(message.id)} >{message.message}</label>
        <FaTrashAlt 
        className='trash'
        role="button"
        tabIndex='0'
        onClick={()=> handleDelete(message.id)}
        />
      </li>
    </div>
  )
}
