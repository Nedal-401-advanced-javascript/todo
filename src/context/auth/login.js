import React from "react";
import { AuthContext } from "./context.js";
import Show from "../show/show";
import {

    Form,
    Col,
    InputGroup,
    Button,
    FormControl,
    DropdownButton,
    Dropdown,
  } from "react-bootstrap";
class Login extends React.Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    console.log("in handleSubmit");
    this.context.login(this.state.username, this.state.password);
  };

  render() {
    console.log("this.context.loggedIn >> ", this.context.loggedIn);

    return (
      <>
        <Show condition={this.context.loggedIn}>
          <button onClick={this.context.logout}>Logout</button>
        </Show>
        <Show condition={!this.context.loggedIn}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Row className="align-items-center">
              <Col xs="auto">
                <Form.Label htmlFor="inlineFormInput" srOnly>
                  User Name
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="inlineFormInput"
                  onChange={this.handleChange}
                  placeholder="username"
                  name="username"
                />
              </Col>
              <Col xs="auto">
                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                  Password
                </Form.Label>
                <InputGroup className="mb-2">
                  <FormControl
                    id="inlineFormInputGroup"
                    onChange={this.handleChange}
                    placeholder="password"
                    name="password"
                  />
                </InputGroup>
              </Col>
              <Col xs="auto">
                <DropdownButton id="dropdown-basic-button" title="Roll">
                  <Dropdown.Item href="#/action-1">Admin</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Leader</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Member</Dropdown.Item>
                </DropdownButton>
              </Col>
              <Col xs="auto">
                <Button type="submit" className="mb-2">
                  Submit
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Show>
      </>
    );
  }
}

export default Login;
