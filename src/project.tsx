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
                    <h3 className='p-3'>CMS - Clinical Management System</h3>
                    <p className='p-3'>Our Clinical Management System simplifies patient records, appointments, and billing, enhancing workflow efficiency.  
                    Designed for doctors and healthcare providers, it ensures seamless coordination and improved patient care.  
                    With automated reports and real-time data access, managing clinics has never been easier.</p>
                </Col>
            </Row>
        </section>
    );
};

export default Work;
