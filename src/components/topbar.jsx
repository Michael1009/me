import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./css/topbar.css"

class TopBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" className="navbar">
                <Navbar.Brand >Michael Chang</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="mr-auto">
                    <Nav.Link href="">Home</Nav.Link>
                    <Nav.Link href="">About</Nav.Link>
                    <Nav.Link href="">Projects</Nav.Link>
                    <Nav.Link href="">Resume</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default TopBar;
