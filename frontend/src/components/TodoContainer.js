import React, { useState } from 'react'
import { IoIosAdd } from "react-icons/io";
import Todolist from './Todolist.js'

const TodoContainer = () =>{

    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState({});

    const inputHandler = (e) => {
        // console.log(e.target.value);
        setInputText(e.target.value);
        setTask({
            title: e.target.value,
            description: e.target.value
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        // setTodos([
        //     ...todos, {text: inputText, completed: false, id: Math.random() *1000}
        // ]);
        setInputText("");

        let request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        };

        await fetch('http://127.0.0.1:3000/api/tasks', request)
                .then(response => response.json())
                .then(response => {
                    todos.push(response)
                    setTodos(todos)
                    console.log(todos)
                });
        
    }

    React.useEffect( async () => {
        await fetch('http://127.0.0.1:3000/api/tasks')
        .then(response => {
            if(response.ok)
            return response.json();
            else 
            throw response;
        })
        .then(data => {
            setTodos(data.data);
            });
    }, []);

    return(
        <div>
            <div className="todo-count">
                <h3>You have {todos.length} Todos</h3>
            </div>
            <div id="todo-input">
                <form action="" className="col-lg-12">
                    <input type="text" value={ inputText } onChange={ inputHandler } placeholder="Write here.." className="todo-inp" required/>
                    
                    <label htmlFor="todo-inp" className="todo-add">
                        <IoIosAdd className="todo-i"/>
                        <input type="submit" name="todo-inp" onClick={ submitHandler } value=""/> 
                    </label>
                </form>
            </div>

            {todos.map((todolist) =>(
                <Todolist key={todolist.id} text={todolist.title}/>
            ))}
            
        </div>
    )
}

export default TodoContainer;