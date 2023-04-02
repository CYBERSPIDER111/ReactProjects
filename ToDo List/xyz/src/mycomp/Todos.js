import React from 'react'
import { Todoitem } from "../mycomp/Todoitem";

export const Todos = (props) => {
  let myStyle={
    minHeight: "70vh"
  }
  return ( 
    <div className="container my-3"  style={myStyle}>
      <br></br>
      <h3 className='my-3'>ToDos List</h3>
      {props.todos.length===0? "No todos to display":
      props.todos.map((todo) => {
        return (
          <> <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} /> 
        <hr/>
        </> )
      })}


    </div>
  )
}


