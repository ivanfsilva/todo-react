import React from 'react';

import TodoContext from '../contexts/TodoContext';
import Navbar from './Navbar';
import TodoList from './TodoList';

//npm install react-router-dom @types/react-router-dom

const App = () => { 
    return(
        <TodoContext>
            <div className="uk-container">
                <Navbar></Navbar>
                <TodoList></TodoList>           
            </div>      
        </TodoContext>
    );
}

export default App;