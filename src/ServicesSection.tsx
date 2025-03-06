import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import cardimg1 from './assets/service.png';
import cardimg2 from './assets/web.png';
import cardimg3 from './assets/app.png';
import './style.css';

const Services: React.FC = () => {
    return (
        <Container className="my-5 text-dark service">
            <div className="text-center mb-4 text-dark">
                <h2>More Than Your Average IT Services</h2>
                <p>At Deal IT we deliver outstanding results across key areas.</p>
                <h2 className="my-5">Our Services</h2>
            </div>
            <Row>
            <Col md={3} xs={6} className="text-center">
                <div className="service-card">
                    <img alt="Logo" src={cardimg1} className="hero-img img-fluid pb-5"/>
                    <h4>Software Services</h4>
                    <p>We develop tailored software solutions to streamline operations.</p>
                </div>
            </Col>
            <Col md={3} xs={6} className="text-center">
                <div className="service-card">
                    <img alt="Logo" src={cardimg2} className="hero-img img-fluid pb-5"/>
                    <h4>Web Development</h4>
                    <p>From sleek websites to robust web application.</p>
                </div>
            </Col>
            <Col md={3} xs={6} className="text-center">
                <div className="service-card">
                    <img alt="Logo" src={cardimg3} className="hero-img img-fluid pb-5"/>
                    <h4>Mobile Development</h4>
                    <p>We craft user-friendly mobile apps with seamless performance.</p>
                </div>
            </Col>
            <Col md={3} xs={6} className="text-center">
                <div className="service-card">
                    <img alt="Logo" src={cardimg1} className="hero-img img-fluid pb-5"/>
                    <h4>ERP Solutions</h4>
                    <p>Enhance productivity with our ERP solutions for business growth.</p>
                </div>
            </Col>
            </Row>
        </Container>
    );
};

export default Services;
