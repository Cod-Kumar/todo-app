import React from 'react'
import { IoIosAdd } from "react-icons/io";
import Todolist from './Todolist.js'

const TodoContainer = () =>{
    return(
        <div>
            <div id="todo-input">
                <form action="" className="col-lg-12">
                    <input type="text" placeholder="Write here.." className="todo-inp" required/>
                    
                    <label htmlFor="todo-inp" className="todo-add">
                        <IoIosAdd className="todo-i"/>
                        <input type="submit" name="todo-inp" value=" "/> 
                    </label>
                </form>
            </div>

            {/* Todo list below */}
            <Todolist />
            <Todolist />
            <Todolist />
            <Todolist />
            <Todolist />
        </div>
    )
}

export default TodoContainer;