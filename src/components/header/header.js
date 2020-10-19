import React from "react";
import {Navbar,Nav} from 'react-bootstrap';
function Header() {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">ToDo</Navbar.Brand>
            <Nav className="mr-auto">
             <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header;