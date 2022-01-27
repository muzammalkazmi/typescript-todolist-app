import React,{useState} from 'react';
import { TodoList } from './TodoList';
let initialTodos:Todo[]=[
  {
    text:'Join the meeting on xoxom',
    completed:true
  },
  {
    text:'meeting with Jack ma',
    completed:false
  }
]

function App() {
  let [todos,setTodos]=useState(initialTodos)
  const toggleTodos=(selectedTodo:Todo)=>{
const newTodo=todos.map((todo)=>{
  if(todo===selectedTodo){
    return{
      ...todo,
      completed:!todo.completed
    }
  }
  return todo
})
setTodos(newTodo)
  }
  return(
  <div>
      
      <TodoList todo={todos} toggleTodo={toggleTodos}/>
      
    </div>
  );
}

export default App;
