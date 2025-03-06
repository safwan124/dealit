import React from 'react';
import workImg from './assets/web.png';
import './style.css';
import { Col } from 'react-bootstrap';

const Work3: React.FC = () => {
    return (
        <section className="container my-5">
            <div className="row align-items-center work-card">
                <Col md={6} xs={12}>
                    <h3 className='p-3'>HomeNest - Real Estate Listing Platform</h3>
                    <p className='p-3'>HomeNest connects buyers, sellers, and agents with a seamless real estate experience, making property transactions effortless.  
                    Featuring advanced search filters, virtual tours, and real-time market insights, finding the perfect home is easier than ever.  
                    With secure deals and verified listings, we ensure a trustworthy and efficient property search journey.</p>
                </Col>
                <div className="col-md-6 text-center">
                    <img src={workImg} alt="Project" className="img-fluid dgdProImg" />
                </div>
            </div>
        </section>
    );
};

export default Work3;
