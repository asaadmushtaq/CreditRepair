import React from 'react';
import { IMAGES } from '../../../assets';
import { FooterComponent } from '../../HomePage';
import Navbar from '../../HomePage/Navbar';

function CompanyProfiles() {
    return (
        <div>
            <Navbar />
            <div className="cr__header section__padding pb-3" id="home">
                <div className="cr__header-content mr-0">
                    <h1 className="gradient__text">Company Profile</h1>
                </div>
            </div>
            <div className='row section__padding py-5'>
                <div className='col-12 col-md-4'>
                    <img src={IMAGES.CREDITREPAIR} alt="" />
                </div>
                <div className='col-12 col-md-8 align-self-center'>
                    <p className='text-light font-16 mt-4 mt-md-0'>Creditciti Consulting Firm has 12 years of experience in evaluating credit and guiding our clients to assert their legal rights. We are honest, dependable and can help you achieve results in a fraction of the time without making costly errors. We pride ourselves in understanding each client’s situation and create a plan of action according to his/her needs. We are committed to helping you every step of the way and improve your credit profile on the path to financial freedom. We will take every measure under the law to repair and restore your credit.</p>
                </div>
            </div>
            <div className='section__padding pt-0 pb-5'>
                <p className='text-light font-16 mt-4 mt-md-0'>We will lead you in the right financial direction so you can be better equipped and prepared to make financial decisions. Creditciti empowers you with current financial knowledge that affects your credit score and purchasing power. Our focus is always on you, your story, and your determination to make a change in your financial life.</p>
            </div>
            <div className='section__padding pt-0'>
                <p className='text-light font-16 mt-4 mt-md-0'>In addition to disputing inaccurate, incomplete and negligent credit reporting, we will educate you on how to build and maintain your credit reports with the 3 major bureaus ( Experian, Equifax, and Transunion ). Our company is dedicated to you and your credit needs. If your credit has a few blemishes or in need of a complete overhaul, call us today at (877) 775.6106 for a FREE credit consultation.</p>
            </div>
            <FooterComponent />
        </div>
    );
};

export default CompanyProfiles;
