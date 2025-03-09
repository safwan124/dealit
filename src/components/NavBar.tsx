import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import reactLogo from '../assets/Deal IT Solutions.png';
import '../style.css';
import { useState } from 'react';

const NavBar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" className="navbar">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          <img
            alt="Logo"
            src={reactLogo}
            width="350"
            height="auto"
            className="d-inline-block align-top companylogo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          className="navbar-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={() => setExpanded(false)}>Services</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>About</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
