import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import reactLogo from '../assets/Deal IT Solutions.png';
import '../style.css';
import { useState } from 'react';

type NavBarProps = {
  setActiveSection: (section: string) => void;
};

const NavBar: React.FC<NavBarProps> = ({ setActiveSection }) => {

  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" className="navbar">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#" onClick={() => setActiveSection('home')}>
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
            <Nav.Link href="#" onClick={() => setActiveSection('home')}>Home</Nav.Link>
            <Nav.Link href="#" onClick={() => setActiveSection('services')}>Services</Nav.Link>
            <Nav.Link href="#" onClick={() => setActiveSection('about')}>About</Nav.Link>
            <Nav.Link href="#" onClick={() => setActiveSection('contact')}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
