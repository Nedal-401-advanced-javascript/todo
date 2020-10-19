import React, { useState } from 'react';
import useForm from '../hooks/useForm'
import { Button,Jumbotron,Container,FormControl,FormGroup,FormLabel,Form } from 'react-bootstrap';


function TodoForm(props) {
const [handleInputChange, handleSubmit, item] = useForm(props.handleSubmit)
  return (
    <>
      <Container className="p-3">
    <Jumbotron>
      <h3>Add Item</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>
            <span>To Do Item</span>
            <FormControl
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange}
            />
          </FormLabel>
          <FormLabel>
            <span>Difficulty Rating</span>
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
          </FormLabel>
          <FormLabel>
            <span>Assigned To</span>
            <FormControl type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </FormLabel>
          <Button type="submit">Add Item</Button>
        </FormGroup>
      </Form>
    </Jumbotron>
  </Container>
    </>
  );

}

export default TodoForm;
