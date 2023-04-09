import React from 'react'

export default function Search({search,setSearch,handleSubmit}) {
  return (
    <form onSubmit={ (e)=> e.preventDefault()} >
      <input
      className='search' 
      type="text" 
      placeholder='Search'
      value={search}
      onChange={(e)=> setSearch(e.target.value)}
       />
    </form>
  )
}