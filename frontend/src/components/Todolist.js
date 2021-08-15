import axios from 'axios';
import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
// import { TiDeleteOutline } from "react-icons/all-files";



const Todolist = ({ todo, deleteHandler }) =>{
    
    return(
        <div className="col-lg-12">
            <form action="" className="todo-list-con">
                <input type="checkbox" className="checkbox" />
                <span className="todo-title">{ todo.title }</span>
                
                <button type="button" className="delete-btn" value={todo.id} onClick={(e) => deleteHandler(e)}>
                    <IoIosCloseCircleOutline fontSize="20" className="del-i" color="red"/>
                </button>
            </form>
        </div>
    )
}

export default Todolist;