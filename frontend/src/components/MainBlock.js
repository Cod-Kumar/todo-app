import React from 'react';
import TodoContainer from './TodoContainer';

const MainBlock = () =>{
    return(
       <div id="main_block" className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-10 offset-1"> 
            <div className="todo-count">
                <h3>You have 3 Todos</h3>
            </div>

            {/* Todo Container */}
            <TodoContainer />
       </div>
    )
}

export default MainBlock;