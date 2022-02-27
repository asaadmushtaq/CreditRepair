import React from 'react';
import { IMAGES } from '../../../assets';
import { ClientPartners, FooterComponent } from '../../HomePage';
import Navbar from '../../HomePage/Navbar';

function HowItWorks() {
    return (
        <>
            <Navbar />
            <div className='bg-white'>
                <div className="cr__header section__padding pb-3" id="home">
                    <div className="cr__header-content mr-0">
                        <h1 className="gradient__text">How It Works?</h1>
                    </div>
                </div>

                <div className='row section__padding py-5'>
                    <div className='col-12 col-md-8 align-self-center'>
                        <p className='font-16 mb-4 mb-md-0'>Creditciti consulting firm works in 30 – 45-day cycles. Please note that at the end of each cycle you will receive 3 credit reports send to you at your home address. These reports are the results of the dispute letters and challenges that were sent on your behalf, and they will show which questionable negative items that have been removed from your credit report during each round of dispute. You simply fax, email, or mail these reports to Creditciti and then check for your progress update.</p>
                    </div>
                    <div className='col-12 col-md-4 d-flex justify-content-center align-self-center'>
                        <img className='certification-img-class' src={IMAGES.CERTIFICATION} alt="" />
                    </div>
                </div>

                <div className='section__padding pt-0 pb-5'>
                    <p className='font-16 mt-4 mt-md-0'>Creditciti will go over specific details of your credit history with you and highlight specific items in your credit history.</p>
                    <p className='font-16 mt-4 mt-md-0'>Will provide complete consultation on your credit report starting from all your identifying info, trade lines, public record and inquires.</p>
                    <p className='font-16 mt-4 mt-md-0'>Send challenge to the 3 major credit bureaus.</p>
                    <p className='font-16 mt-4 mt-md-0'>Provides a complete audit/credit analysis of your report and scores</p>
                    <p className='font-16 mt-4 mt-md-0'>Obtain credit report via IdentityIQ</p>
                    <p className='font-16 mt-4 mt-md-0'>Creditciti will challenge the credit reporting agencies – CRA</p>
                    <p className='font-16 mt-4 mt-md-0'>Creditor challenges and intervention</p>
                    <p className='font-16 mt-4 mt-md-0'>FICO score – 5 elements that make up the score</p>
                    <p className='font-16 mt-4 mt-md-0'>Will send certified mail with return receipts requested</p>
                    <p className='font-16 mt-4 mt-md-0'>Develop an action plan to fix your credit and rebuild your credit</p>
                    <p className='font-16 mt-4 mt-md-0'><span className='font-weight-bold'>NOTE:</span> Its so important to keep a good credit score for every day living necessities-like getting an auto loan, mortgage loan, credit card, insurance premium, rental insurance, etc.</p>

                    <p className='font-16 mt-5'>On-boarding ( New Customer )</p>
                    <p className='font-16 mt-4 mt-md-0'>$0.00 signup fee</p>
                    <p className='font-16 mt-4 mt-md-0'>$In 7 days, you get it all</p>
                </div>
                <ClientPartners />
                <FooterComponent />
            </div>
        </>
    );
};

export default HowItWorks;

