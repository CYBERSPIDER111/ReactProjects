import './App.css';
import Header from "./mycomp/Header";
import { AddTodo } from "./mycomp/AddTodo";
import { Todos } from "./mycomp/Todos";
import { Footer } from "./mycomp/Footer";
import { About } from "./mycomp/About";
// import { Routes ,Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {                                                           // help to delete Todo from the list
    console.log("I am ondelete of todo", todo)

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.getItem("todos", JSON.stringify(todos));
  }


  const addTodo = (title, desc) => {                                                              // it'll add addToDo in the toDo list
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);


  }



  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <> <Router>
      <Header title="Dev-React App" searchBar={false} />
      <Switch>
        <Route exact path="/" render={() => {
          return (<>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </>)
        }}>

        </Route>
        <Route exact path="/about">
        
          {/* <About /> */}
        </Route>

      </Switch>
      <Footer />
    </Router>
    </>
  );
}


export default App;

