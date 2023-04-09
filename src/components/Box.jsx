import ListItem from "./ListItem"
import InputFields from "./InputFields"
import Search from "./Search"

function Box({data,handleDelete,handleChangeChecked,newData,setNewData,handleSubmit,search,setSearch}) {
    return (
      <>
      <h1 className="title" >Your To Do List</h1>
      <div className="container">
      <InputFields
        newData={newData}
        setNewData={setNewData}
        handleSubmit={handleSubmit}
      />
      <Search
       search={search}
       setSearch={setSearch}
      />
        <div className="box">
          <ul>
         {data.map((message)=>{
         return <ListItem
          key={message.id}
           message={message}
           handleDelete={handleDelete}
           handleChangeChecked={handleChangeChecked}
          
          />
         })}
          </ul>
        </div>
      </div>
      </>
    )
  }
  
  export default Box