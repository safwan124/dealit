import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';
import reactLogo from './assets/Deal IT Solutions.png';

const Footer: React.FC = () => {
    return (
        <footer className="footer text-white p-5">
            <Container>
                <Row>
                    <Col md={6} xs={12} className="mb-3">
                        <h5><img
                            alt="Logo"
                            src={reactLogo}
                            width="150"
                            height="auto"
                        /> &nbsp;</h5>
                        <p>&copy; {new Date().getFullYear()} Deal IT Solutions. All Rights Reserved.</p>
                    </Col>
                    <Col md={3} xs={12} className="mb-3">
                        <h5>Contact Us</h5>
                        <p>Email: contact@dealitsolutions.com</p>
                        <p>Phone: +91 99860 42912</p>
                    </Col>
                    <Col md={3} xs={12}>
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3">
                                <a href="https://www.instagram.com" className="text-white" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-instagram"></i> Instagram
                                </a>
                            </li>
                            <li className="ms-3">
                                <a href="https://www.youtube.com" className="text-white" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-youtube"></i> YouTube
                                </a>
                            </li>
                            <li className="ms-3">
                                <a href="https://www.linkedin.com" className="text-white" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-linkedin"></i> LinkedIn
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
