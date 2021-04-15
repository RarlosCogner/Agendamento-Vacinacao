import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSyringe } from 'react-icons/fa';

export default function index() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand><FaSyringe size="25" /></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Agendar</Nav.Link>
        <Nav.Link as={Link} to="/Schedules">Agendamentos</Nav.Link>
        <Nav.Link as={Link} to="/Testes">Testes</Nav.Link>
      </Nav>
    </Navbar>
  );
}
