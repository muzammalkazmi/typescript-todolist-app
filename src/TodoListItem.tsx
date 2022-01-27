import React from 'react'



export const TodoListItem:React.FC<Props>=({todo,toggleTodo})=> {
    return (
        <div>
           <li><label style={{textDecoration:todo.completed?'line-through':'none'}}>
               <input 
               type='checkbox' 
               checked={todo.completed}
               onClick={()=>toggleTodo(todo)}
               />
              
               {todo.text}
           </label>
               
               </li>
            
        </div>
    )
}
