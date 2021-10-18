import React from 'react'


export const TodoListItem:React.FC<Props>=({todo})=> {
    return (
        <div>
            <li>
                <label
                style={{textDecoration:todo.completed?'line-through':'undefined'}}>{todo.text}</label>
                    <input type='checkbox' checked={todo.completed}></input>
                
                
            </li>
            
        </div>
    )
}
