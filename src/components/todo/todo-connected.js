import React, { useEffect, useState } from 'react';
import useAjax from '../hooks/useAjax';
import TodoForm from './form.js';
import TodoList from './list.js';

import './todo.scss';



const ToDo = () => {
  // const [formData, setFormData] = useState({});
  const [_addItem, _toggleComplete, _getTodoItems,list] = useAjax();

  

  useEffect(_getTodoItems, []);

  return (
    <>
      <header>
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;
