import React from 'react'
import Box from './Box'

import { useState } from 'react'

export default function App() {
  const [data,setData] = useState(JSON.parse(localStorage.getItem('todo'))
)

  const handleChangeChecked= (id)=>{
    console.log(`${id}`);
    const newData = data.map(item=>
      item.id === id ? {...item,checked: !item.checked}: item
    )
   setLocalStorage(newData)
  }

  const handleDelete = (id)=>{
    const newData = data.filter(item=>{
      return item.id !== id
    })
    setLocalStorage(newData)
  }
  
  const setLocalStorage = (item)=>{
    setData(item)
    localStorage.setItem('todo',JSON.stringify(item))
  }

  const [newData,setNewData]= useState('')

  const addItem = (item)=>{
    const id = data.length ? data[data.length -1].id + 1 : 1
    const myNewData = {id,checked:false,message:item}
    const listItems = [...data,myNewData]
    setLocalStorage(listItems)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
  if(!newData) return;
  addItem(newData)
  setNewData('')
  }

  const [search, setSearch] = useState('')

  return (
    <div>
      <Box 
      data={data.filter(item=> ((item.message).toLowerCase()).includes(search.toLowerCase()))} 
      handleDelete={handleDelete}
      handleChangeChecked={handleChangeChecked}
      newData={newData}
      setNewData={setNewData}
      handleSubmit={handleSubmit}
      search={search}
      setSearch={setSearch}
      />
    </div>
  )
}

