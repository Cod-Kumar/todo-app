import React from 'react';
import TodoContainer from './TodoContainer';
import Todolist from './Todolist';

const MainBlock = () =>{
    return(
       <div id="main_block" className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-10 offset-1"> 
            {/* Todo Container */}
            <TodoContainer />
       </div>
    )
}

export default MainBlock;