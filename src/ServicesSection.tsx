import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import cardimg1 from './assets/service.png';
import cardimg2 from './assets/web.png';
import cardimg3 from './assets/app.png';
import './style.css';

const Services: React.FC = () => {
    return (
        <Container className="my-5 text-dark">
            <div className="text-center mb-4 text-dark">
                <h2>More Than Your Average IT Services</h2>
                <p>At Deal IT we deliver outstanding results across 3 key areas...</p>
                <h2 className="my-5">Our Services</h2>
            </div>
            <Row>
                <Col md={4} xs={12} className="text-center">
                    <div className="service-card">
                        <img alt="Logo" src={cardimg1} className="hero-img img-fluid pb-5"/>
                        <h4>Software Services</h4>
                        <p>We help companies define a clear brand identity...</p>
                    </div>
                </Col>
                <Col md={4} xs={12} className="text-center">
                    <div className="service-card">
                        <img alt="Logo" src={cardimg2} className="hero-img img-fluid pb-5"/>
                        <h4>Web Development</h4>
                        <p>Experts in web design, we craft award-winning...</p>
                    </div>
                </Col>
                <Col md={4} xs={12} className="text-center">
                    <div className="service-card">
                        <img alt="Logo" src={cardimg3} className="hero-img img-fluid pb-5"/>
                        <h4>Mobile Development</h4>
                        <p>From developing a marketing strategy to managing campaigns...</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Services;
