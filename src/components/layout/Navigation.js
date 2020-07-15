import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav'

const Navigation = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand>React Pokedex</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>     
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
