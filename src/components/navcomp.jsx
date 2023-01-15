import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




export default function Navcomp() {
  return (
    
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/home"><h2>Presentacion</h2></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/acercademi"><h3>Acerca de mi</h3></Nav.Link>
          <Nav.Link href="/estudiosycursos"><h3>Estudios y cursos</h3></Nav.Link>
          <Nav.Link href="/proyectos"><h3>Proyectos</h3></Nav.Link>

        </Nav>
        <Nav>
          <Nav.Link href="#deets">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
            3464-588276</Nav.Link>
          
          
          <Nav.Link eventKey={2} href="https://www.linkedin.com/in/joaqu%C3%ADnfrattin/">
            linkedin
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
