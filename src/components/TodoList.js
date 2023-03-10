import React from 'react'

import Todo from './Todo'

export default function TodoList({todos, handleToggle}) {
  return (
    <div >
        {todos.map(todo => { return <Todo key={todo.id} todo={todo}  handleToggle = {handleToggle}/>})}
    </div>
  )
}
