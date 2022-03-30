import React from 'react';
import '../Todo.css'

const TodoItem=(props)=>{
    
    return (
        
        <div className='todolist'> 
        <ul id='myList'>
        <li  onClick={props.handleToggle}>
         {props.task}
         <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
         <i id='editButton' className="fa fa-edit" onClick={props.handleEdit}></i>
         <i id='deleteButton' className="fa fa-trash" onClick={props.handleDelete}></i>
         </li>
         </ul>
        </div>
    )
}

export default TodoItem;