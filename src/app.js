import React from 'react';
import { Nav } from 'react-bootstrap';
import Header from './components/header/header'
import ToDo from './components/todo/todo.js';
const App =()=>{
    return(

    <>
        <Header/>
        <ToDo/>
    </>
    )
}

export default App;