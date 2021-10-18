import React,{useState} from 'react';
import {TodoListItem} from './TodoListItem'


function App() {
  const initialtodos:Todo[]=[
    {text:'Reconcile the invoices with tppl',completed:true},
    {text:'Reconcile the bank statements',completed:false}
  ]
  const [todos,settodos]=useState(initialtodos)
  console.log(todos)
  const toggleTodo=(selectedTodo:Todo)=>{
    const newTodo=todos.map((todo)=>{
      if(todo===selectedTodo){
        return{
          ...todo,
       completed:!todo.completed

        }
      }
    })
    settodos(newTodo)
  }
  return (
    <div className="App">
      <h1>React ToDo List App with Typescript</h1>
      <ul>
      <TodoListItem todo={todos[0]}/>
      <TodoListItem todo={todos[1]}/>
      </ul>
      
    </div>
  );
}

export default App;
