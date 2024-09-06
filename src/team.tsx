import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import member2 from './assets/m2.jpeg';
import member1 from './assets/m1.jpeg';
import member3 from './assets/profile.png';
import './style.css';

const OurTeam: React.FC = () => {
    const teamMembers = [
        { img: member2, name: 'Syed Safwan', designation: 'CTO' },
        { img: member1, name: 'Masood Ali', designation: 'Founder and CEO' },
        { img: member3, name: 'Azhar', designation: 'CFO' }
    ];

    return (
        <Container className="my-5 team">
            <h2 className="text-center mb-5">Our Team</h2>
            <Row>
                {teamMembers.map((member, index) => (
                    <Col md={4} xs={12} className="text-center mb-4" key={index}>
                        <div className="card team-card">
                            <img src={member.img} alt={member.name} className="card-img-top p-3 img-fluid" />
                            <div className="card-body">
                                <h5 className="card-title">{member.name}</h5>
                                <p className="card-text">{member.designation}</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default OurTeam;
