import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
// import { TiDeleteOutline } from "react-icons/all-files";

const Todolist = () =>{
    return(
        <div className="col-lg-12">
            <form action="" className="todo-list-con">
                <input type="checkbox" className="checkbox" />
                <span className="todo-title">Learn about React</span>
                
                <button type="button" className="delete-btn">
                    <IoIosCloseCircleOutline fontSize="20" color="red"/>
                </button>
            </form>
        </div>
    )
}

export default Todolist;