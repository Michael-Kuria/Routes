import React from 'react'

export default function Todo({todo}) {
  return (
    <div className='todo'>
        <label>
            <input type="checkbox" checked={todo.completed}/>
            <span>{todo.name}</span>
        </label>
    </div>
  )
}
