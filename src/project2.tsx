import React from 'react';
import workImg from './assets/web.png';
import { Row, Col } from 'react-bootstrap';
import './style.css';

const Work2: React.FC = () => {
    return (
        <section className="work container my-5">
            <Row className="align-items-center work-card">
                <Col md={6} xs={12} className="text-center">
                    <img src={workImg} alt="Project" className="img-fluid dgdProImg" />
                </Col>
                <Col md={6} xs={12}>
                    <h3 className='p-3'>Stayz - Online Hotel Booking Platform</h3>
                    <p className='p-3'>Stayz simplifies hotel bookings with a seamless and user-friendly experience, ensuring hassle-free reservations.  
                    Designed for travelers and hoteliers, it offers real-time availability, secure payments, and instant confirmations.  
                    With smart filters and personalized recommendations, finding the perfect stay has never been easier.</p>
                </Col>
            </Row>
        </section>
    );
};

export default Work2;
