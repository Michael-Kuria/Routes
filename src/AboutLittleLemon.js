import TodoList from "./components/TodoList";
import { useRef, useState } from "react";
import {v4} from 'uuid';

function AboutLittleLemon() {

    const [todos, setTodos] = useState([]);
    //todoText.current.value
    const todoText = useRef();

    function handleAddTodo(e){
        const name = todoText.current.value;
        if(name === '') return
        
        setTodos( prevTodos => {
            return [...prevTodos, {id: v4(), name:name, completed: false}]
        });
        todoText.current.value = null;
    }

    function handleToggle(id){
        const todosCopy = [...todos];
        const foundTodo = todosCopy.find(t => t.id === id);
        foundTodo.completed = !foundTodo.completed;
        setTodos(todosCopy);

    }

    function handleClearCompleted(e){
        const noncompletedTodos = todos.filter(todo => !todo.completed);
        setTodos(noncompletedTodos);
    }

    return (
        <div className="form-container">
            <div className="form">
                <label>What do you want to do?</label>
                <input type="text" ref={todoText}/>
                <button className="form-btn" onClick={handleAddTodo}>Add Todo</button>
                <button className="form-btn" onClick={handleClearCompleted}>Clear Completed</button>
            </div>
            <div className="more-info">
                <span className="not-completed">{todos.filter(todo => !todo.completed).length} Not Completed</span>
                <TodoList todos={todos} handleToggle = {handleToggle} />
            </div>
            
        </div>
        
    )
}

export default AboutLittleLemon
