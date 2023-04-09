import React from 'react'

export default function InputFields({newData,setNewData,handleSubmit}) {
  return (
    <form onSubmit={ handleSubmit} >
      <input
      className='addItem' 
      type="text" 
      placeholder='Add New To Do'
      value={newData}
      onChange={(e)=> setNewData(e.target.value)}
       />
    </form>
  )
}
