import React, { useState } from 'react'
import { IoIosAdd } from "react-icons/io";
import Todolist from './Todolist.js'

const TodoContainer = () =>{

    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);

    const inputHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() *1000}
        ]);
        setInputText("");
    }

    React.useEffect(() => {
        fetch('http://127.0.0.1:8000/api/tasks')
            .then(response => console.log(response));
    }, [])

    return(
        <div>
            <div id="todo-input">
                <form action="" className="col-lg-12">
                    <input type="text" value={ inputText } onChange={ inputHandler } placeholder="Write here.." className="todo-inp" required/>
                    
                    <label htmlFor="todo-inp" className="todo-add">
                        <IoIosAdd className="todo-i"/>
                        <input type="submit" name="todo-inp" onClick={ submitHandler } value=" "/> 
                    </label>
                </form>
            </div>

            {todos.map((todolist) =>(
                <Todolist key={todolist.id} text={todolist.text}/>
            ))}
            
        </div>
    )
}

export default TodoContainer;