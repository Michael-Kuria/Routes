import TodoList from "./components/TodoList";
import { useState } from "react";

function AboutLittleLemon() {

    const [todos, setTodos] = useState([{id:"1", name:"First Todo", completed:true},{id:"2", name:"Second Todo", completed:false}]);

    return (
        <div className="form-container">
            <form className="form">
                <label>What do you want to do?</label>
                <input type="text" />
                <button className="form-btn">Add Todo</button>
                <button className="form-btn">Clear Completed</button>
            </form>
            <div className="more-info">
                <span className="not-completed">{todos.filter(todo => !todo.completed).length}</span>
                <TodoList todos={todos} />
            </div>
            
        </div>
        
    )
}

export default AboutLittleLemon
