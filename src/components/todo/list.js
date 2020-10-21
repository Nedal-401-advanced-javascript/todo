import React, { useContext } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { SiteContext } from "../../context/settings/context";

function TodoList(props) {
  const settingContext = useContext(SiteContext); // {display,items,sort,setDisplay,setItems,setSort}
  console.log(settingContext.items, "<<<>>>>><><><><><");
  return (
    <ListGroup className="tasksList">
      {props.list.map((item) => (
        <ListGroup.Item
          as="li"
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <Button onClick={() => props.handleDelete(item._id)}>X</Button>
          <i>assigneed to : {item.assignee}</i>

          <span onClick={() => props.handleComplete(item._id)}>
            {item.text}
          </span>
          {item.complete ? <div>completed</div> : <div>pending</div>}
          <div>difficulty: {item.difficulty}</div>
          
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TodoList;
