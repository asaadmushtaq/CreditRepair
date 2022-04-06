import React from 'react';
import { IMAGES } from '../../assets';
import { ClientPartners, FooterComponent } from '../HomePage';
import Navbar from '../HomePage/Navbar';

function Services() {
    return (
        <div>
            <Navbar />
            <div className="cr__header section__padding pb-3" id="home">
                <div className="cr__header-content mr-0">
                    <h1 className="gradient__text">Services</h1>
                </div>
            </div>
            <div className='p-3 bg-white'>
                <div className='row my-4 services-right-side-container'>
                    <div className='col-12 col-md-7 d-flex justify-content-center align-self-center'>
                        <p className='gradient__subtext font-30'>
                            {"Free Credit Consultation"}
                        </p>
                    </div>
                    <div className='col-12 col-md-5'>
                        <img className='services-img-right-side' src={IMAGES.FREE_CREDIT_CONSULTATION} alt="" />
                    </div>
                </div>
                <div className='row my-4'>
                    <div className='col-12 col-md-5'>
                        <img className='services-img-left-side' src={IMAGES.OUR_CREDIT_EXPERTS} alt="" />
                    </div>
                    <div className='col-12 col-md-7 justify-content-center align-self-center'>
                        <p className='gradient__subtext font-30'>
                            {"Our Credit Experts Help You With the Following Disputes and Removals"}
                        </p>
                        <ol className='ml-3 font-16'>
                            <li>Bankruptcy</li>
                            <li>Public Records</li>
                            <li>Repossessions</li>
                            <li>Foreclosure</li>
                            <li>Judgements </li>
                            <li>Credit Fraud</li>
                            <li>Late Payments</li>
                            <li>Collections</li>
                            <li>Identity Theft</li>
                            <li>Excessive Inquiries</li>
                            <li>Liens</li>
                            <li>Reporting Errors</li>
                            <li>Charge-Offs</li>
                            <li>Student Loan</li>
                        </ol>
                    </div>
                </div>
                <div className='row my-4 services-right-side-container'>
                    <div className='col-12 col-md-7 d-flex justify-content-center align-self-center'>
                        <p className='gradient__subtext font-30'>
                            {"Validation Letter"}
                        </p>
                    </div>
                    <div className='col-12 col-md-5'>
                        <img className='services-img-right-side' src={IMAGES.VALIDATION_LETTER} alt="" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-5'>
                        <img className='services-img-left-side' src={IMAGES.GOODWILL_LETTER} alt="" />
                    </div>
                    <div className='col-12 col-md-7 d-flex justify-content-center align-self-center'>
                        <p className='gradient__subtext font-30'>
                            {"Goodwill Letter"}
                        </p>
                    </div>
                </div>
                <div className='row my-4 services-right-side-container'>
                    <div className='col-12 col-md-7 d-flex justify-content-center align-self-center'>
                        <p className='gradient__subtext font-30'>
                            {"Recommendation Letter"}
                        </p>
                    </div>
                    <div className='col-12 col-md-5'>
                        <img className='services-img-right-side' src={IMAGES.RECOMMENDATION_LETTER} alt="" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-5'>
                        <img className='services-img-left-side' src={IMAGES.CREDIT_MONITERTING} alt="" />
                    </div>
                    <div className='col-12 col-md-7 d-flex justify-content-center align-self-center'>
                        <p className='gradient__subtext font-30'>
                            {"Credit Monitoring"}
                        </p>
                    </div>
                </div>
                <div className='row my-4 services-right-side-container'>
                    <div className='col-12 col-md-7 d-flex justify-content-center align-self-center'>
                        <p className='gradient__subtext font-30'>
                            {"Financial Management Tools"}
                        </p>
                    </div>
                    <div className='col-12 col-md-5'>
                        <img className='services-img-right-side' src={IMAGES.FINANCIAL_MANAGEMENT_TOOLS} alt="" />
                    </div>
                </div>
            </div>
            <ClientPartners />
            <FooterComponent />
        </div>
    );
};

export default Services;


