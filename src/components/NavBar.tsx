import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import reactLogo from '../assets/logot.png';
import '../style.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#home">
          <img
            alt="Logo"
            src={reactLogo}
            width="350" // Adjust width if necessary
            height="auto"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
