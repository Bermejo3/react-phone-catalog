import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import '../styles/Appbar.css'

export default function Appbar() {

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand to="/" className="titleNavbar">React Phone Catalog</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link><Link to="/" className="linkNavbar">Home</Link></Nav.Link>
        <Nav.Link><Link to="/add" className="linkNavbar">Add</Link></Nav.Link>
      </Nav>
    </Navbar>
  );
}