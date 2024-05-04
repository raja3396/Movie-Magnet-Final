import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Form, FormControl, Button,NavDropdown } from 'react-bootstrap';

export default function AdminHeader() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='d-flex justify-content-between fixed-top' >
      <Container >
        <Navbar.Brand href="/">Ticket-Booking</Navbar.Brand>
        <h5 className='admin-dashboard'>Admin Dashboard</h5>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between'>
          <Nav className="ms-auto flex-grow-1 justify-content-evenly">
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">My Tickets</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Logout</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/amovies">Movies</Nav.Link>
            <Nav.Link href="/atheatres">Theatres</Nav.Link>
            <Nav.Link href="/admin" >Bookings</Nav.Link>
            {/* <Nav.Link href="#contact" ><Link to={'/location'}>Select ur locations</Link></Nav.Link> */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


