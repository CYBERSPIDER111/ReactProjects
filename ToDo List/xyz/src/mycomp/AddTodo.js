import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e)=> {
          e.preventDefault();
          if(!desc || !title){
            alert("Either title or description is blank")
          }
          else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }


  return (
    <div className='container my-3'>
         <h3>Add a ToDo</h3>
      <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="Title" className="htmlForm-label">ToDo Title</label> <br></br>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="htmlForm-control" id="title" aria-describedby="emailHelp"/>
      </div>
  <div className="mb-3">
    <label htmlFor="desc" className="htmlForm-label">ToDo Description</label> <br></br>
    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="htmlForm-control" id="desc"/>
  </div>
  <button type="submit" className="btn btn-sm btn-success">Add ToDo</button>
</form>
    </div>
  )
}

export default AddTodo
