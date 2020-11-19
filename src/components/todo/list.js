import React, { useContext } from "react";
import { ListGroup, Button, Badge } from "react-bootstrap";
import { SiteContext } from "../../context/settings/context";

function TodoList(props) {
  const settingContext = useContext(SiteContext); // {display,items,sort,setDisplay,setItems,setSort}
  return (
    <ListGroup className="tasksList">
      {props.list.map((item) => (
        <ListGroup.Item
          as="li"
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >

            <Badge pill className={`badge-${item.complete.toString()}`} >
              {item.complete ? <>completed</> : <>pending</>}
            </Badge>
          <div className="task" onClick={() => props.handleComplete(item._id)}>
            {item.text}
          </div>
          <div className="headertask">
          <i>assigned to : {item.assignee}</i>
          <div>difficulty: {item.difficulty}</div>
          <Button onClick={() => props.handleDelete(item._id)}>X</Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TodoList;
