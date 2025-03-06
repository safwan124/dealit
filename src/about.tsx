import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <Container>
        <div className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Deal IT Solutions</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold">Deal IT Solutions</span>, we specialize in building cutting-edge 
            digital solutions that empower businesses to thrive in the modern era. From <span className="text-blue-600">web 
            and mobile app development</span> to <span className="text-blue-600">ERP integrations</span> and <span className="text-blue-600">
            data analytics</span>, our team of experts delivers scalable and customized technology solutions 
            tailored to your business needs.
            </p>
            
            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            With a strong foundation in <span className="font-semibold">ReactJS, Flutter, Business Central, 
            Power BI</span>, and other advanced technologies, we aim to bridge the gap between 
            innovation and business efficiency. Whether you're a startup or an enterprise, we 
            provide smart, cost-effective solutions to accelerate your growth.
            </p>

            <div className="mt-8">
            <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                Get in Touch
            </a>
            </div>
        </div>
        </div>
    </Container>
  );
};

export default About;
