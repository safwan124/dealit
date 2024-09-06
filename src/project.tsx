import React from 'react';
import workImg from './assets/web.png';
import { Row, Col } from 'react-bootstrap';
import './style.css';

const Work: React.FC = () => {
    return (
        <section className="work container my-5">
            <h2 className="text-center my-5">Our Work</h2>
            <Row className="align-items-center work-card">
                <Col md={6} xs={12} className="text-center">
                    <img src={workImg} alt="Project" className="img-fluid dgdProImg" />
                </Col>
                <Col md={6} xs={12}>
                    <h3>CMS - Clinical Management System</h3>
                    <p>Clinical management helps doctors streamline their treatment...</p>
                </Col>
            </Row>
        </section>
    );
};

export default Work;
