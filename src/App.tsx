import React from 'react';
import {TodoListItem} from './TodoListItem'


function App() {
  const todos:Todo[]=[
    {text:'Reconcile the invoices with tppl',completed:true},
    {text:'Reconcile the bank statements',completed:false}
  ]
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
