import React from 'react';
import { ListGroup } from "react-bootstrap";

function TodoList(props) {
  return (
    <ListGroup className="tasksList">
      {props.list.map(item => (
        <ListGroup.Item as="li"
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <span onClick={() => props.handleComplete(item._id)}>
            {item.text}
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}


export default TodoList;
