import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="DevSpawn Logo"
            src="/DevSpawnLogo.png"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
          />
          DevSpawn
        </Navbar.Brand>
        <Navbar.Text className="text-light">
          AI-Driven Code Auto-Generation Platform
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Header; 