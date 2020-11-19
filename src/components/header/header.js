import React from "react";
import Login from "../../context/auth/login.js";

import {
  Navbar,
  Nav,
  Form,
  Col,
  InputGroup,
  Button,
  FormControl,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">ToDo</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
      <Login />
    </Navbar>
  );
}

export default Header;
