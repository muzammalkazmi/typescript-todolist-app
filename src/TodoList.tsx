import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList:React.FC<Props>=({todo,toggleTodo})=> {
    return (
        <div>
            {todo.map((todos)=>(
                <TodoListItem key={todos.text} 
                todo={todo}
                toggleTodo={toggleTodo}/>
            ))
        }
        </div>
    )
}
