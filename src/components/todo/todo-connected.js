import React, { useContext, useEffect, useState } from "react";
// import useAjax from "../hooks/useAjax";
import TodoForm from "./form.js";
import TodoList from "./list.js";
import { Navbar, Container, Pagination, Button } from "react-bootstrap";
import { SiteContext } from "../../context/settings/context";
import Auth from "../../context/auth/auth";
import axios from "axios";
import "./todo.scss";

const ToDo = () => {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const settingContext = useContext(SiteContext); // {display,items,sort,setDisplay,setItems,setSort}
  const todoAPI = "https://todonedaltasks.herokuapp.com/api/v1/todo";

  const _addItem = (item) => {
    item.due = new Date();
    fetch(todoAPI, {
      method: "post",
      mode: "cors",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then((savedItem) => {
        setList([...list, savedItem]);
      })
      .catch(console.error);
  };

  const _toggleComplete = (id) => {
    //there is a problem in this functionality --> update the complete after two clicks
    let item = list.filter((i) => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;

      fetch(url, {
        method: "put",
        mode: "cors",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      })
        .then((response) => response.json())
        .then((savedItem) => {
          let newList = list.map((listItem) =>
            listItem._id === item._id ? savedItem : listItem
          );
          setList(newList);
        })
        .then(_getTodoItems)
        .catch(console.error);
    }
  };

  const _getTodoItems = () => {
    fetch(todoAPI, {
      method: "get",
      mode: "cors",
    })
      .then((data) => data.json())
      .then((data) => {
        setList(data);
      })
      .catch(console.error);
  };
  // todoAPI, {params: {ID: 12345}
  const _delTodoItems = (id) => {
    axios
      .delete(`${todoAPI}/${id}`)
      .then(setList([...list])) //need to be auto updated
      .then(_getTodoItems)
      .catch(console.error);
  };
  const _sortTasks = () => {
    console.log(list, "receved here");
    let sortType = settingContext.sort;
    switch (sortType) {
      case "difficulty":
        let sorted = list.sort((a, b) => b.difficulty - a.difficulty);
        setList([...sorted]);
        break;

      default:
        setList(list);
        break;
    }
  };
  const _showCompletedTasks = () => {
    let completed = settingContext.display
      ? list.filter((task) => task.complete)
      : list.filter((task) => !task.complete);
    setList([...completed]);
  };
  useEffect(_getTodoItems, []);
  useEffect(_sortTasks, [settingContext.sort]);
  useEffect(_showCompletedTasks, [settingContext.display]);

  // Get current posts
  const indexOfLastTask = currentPage * settingContext.items;
  const indexOfFirstTask = indexOfLastTask - settingContext.items;
  console.log(list);
  const currentItems = list.slice(indexOfFirstTask, indexOfLastTask);
  let items = [];
  for (let i = 1; i <= Math.ceil(list.length / settingContext.items); i++) {
    items.push(
      <Pagination.Item
        key={i}
        onClick={(e) => setCurrentPage(e.target.textContent)}
      >
        <Button>{i}</Button>
      </Pagination.Item>
    );
  }

  return (
    <>
      <Container>
        <Navbar className="counterNav" bg="dark" variant="dark">
          <h2>
            There are {list.filter((item) => !item.complete).length} Items To
            Complete
          </h2>
          <Button onClick={() => settingContext.setSort("difficulty")}>
            Sort by difficulty
          </Button>
          <Button
            onClick={() => settingContext.setDisplay(!settingContext.display)}
          >
            Uncompleted Tasks
          </Button>
        </Navbar>

        <section className="todo">
          <Auth action="edit">
            <div>
              <TodoForm handleSubmit={_addItem} />
            </div>
          </Auth>
          <Auth action="read">
            <div className="TodoList">
              <TodoList
                list={currentItems}
                handleComplete={_toggleComplete}
                handleDelete={_delTodoItems}
              />
            </div>
          </Auth>
        </section>
      </Container>
      <Auth action="read">
        <Pagination className="pagination">
          <Pagination.Prev />
          {items}
          <Pagination.Next />
        </Pagination>
      </Auth>
    </>
  );
};

export default ToDo;
