import React from 'react'

export default function Todo({todo, handleToggle}) {
  function handleOnChange(){
    handleToggle(todo.id);
  }
  return (
    <div className='todo'>
            <input type="checkbox" checked={todo.completed} onChange={handleOnChange}/>
            <span>{todo.name}</span>
    </div>
  )
}
