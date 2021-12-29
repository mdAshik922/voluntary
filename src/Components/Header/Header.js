import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Group from './Group 1329.png';
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
    
  <Navbar.Brand href="#home" >  <img width="25%"style={{marginRight: '60%'}} src={Group} alt="Group"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={NavLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={NavLink} to="/donate#donation">Donation</Nav.Link>
      <Nav.Link as={NavLink} to="/event#event">Event</Nav.Link>
      <Nav.Link as={NavLink} to="/blog#blog">Blog</Nav.Link>
      
    </Nav>
    <Nav>
      {/* <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link> */}
      <Link to="/login"><Button variant="primary" style={{marginRight: '10px'}} >Register</Button></Link>
      
      <Button variant="dark" >Admin</Button>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;