import React from 'react';
import workImg from './assets/web.png';
import './style.css';

const Work1: React.FC = () => {
    return (
        <section className="container my-5">
            <div className="row align-items-center work-card">
                <div className="col-md-6">
                    <h3>DGD - Donation Goes Digital</h3>
                    <p>
                    A Donation Collecting and Management Application helps religious organizations and NGOs streamline their donations and expenses by automating the tracking of contributions, providing a clear overview of funds received. It simplifies financial management by categorizing donations and expenses, ensuring transparency and accountability. Additionally, the application facilitates donor engagement through personalized communications and reporting, strengthening relationships and encouraging ongoing support.                    </p>
                </div>
                <div className="col-md-6 text-center">
                    <img src={workImg} alt="Project" className="img-fluid dgdProImg" />
                </div>
            </div>
        </section>
    );
};

export default Work1;
