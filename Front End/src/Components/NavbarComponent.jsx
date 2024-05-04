import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Form, FormControl, Button,NavDropdown } from 'react-bootstrap';
import MovieSearch from './MovieSearch';

export default function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='d-flex justify-content-between fixed-top' >
      <Container >
        <Navbar.Brand href="/">Ticket-Booking</Navbar.Brand>
        <Form className="d-flex flex-grow-1 justify-content-center ">
          {/* <FormControl
            type="search"
            placeholder="Search ur Movies"
            className="me-2"
            aria-label="Search"
          /> */}
          <MovieSearch/>
          {/* <Button variant="outline-success" type='submit'>Search </Button> */}
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between'>
          <Nav className="ms-auto flex-grow-1 justify-content-evenly">
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="/tickets">My Tickets</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Logout</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/admin">Admin</Nav.Link>
            {/* <Nav.Link href="/login">Login</Nav.Link> */}
            <Nav.Link href="#services" >My Tickets</Nav.Link>
            {/* <Nav.Link href="#contact" ><Link to={'/location'}>Select ur locations</Link></Nav.Link> */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


