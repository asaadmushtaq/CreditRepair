import React from 'react';
import Navbar from '../HomePage/Navbar';

export default function ContactUs() {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <div className="cr__header section__padding pb-3" id="home">
                    <div className="cr__header-content mr-0">
                        <h1 className="gradient__text">Contact Us</h1>
                        <p className='mt-5'>If you would like to contact us for any reason, we can be reached in the following ways:</p>
                        <p className='mt-3 font-weight-bold'>For product help, support, or general questions:</p>
                        <p className='mt-3 text-left'>The best way to get help with Credit Repair is to email us at <span className='gradient__text font-weight-bolder'>support@creditrepair.com</span>, or use the blue chat bubble while you are logged into your Credit Repair dashboard.</p>
                        <p className='mt-5 font-weight-bold gradient__text'>To Reach Us By Phone:</p>
                        <p>You may call us at: (123) 123-4567</p>
                        <p className='mt-5 font-weight-bold gradient__text'>Mailing Address:</p>
                        <p>Credit Repair</p>
                        <p>2224 Lockheed St. Belmont Ave.</p>
                        <p>Los Angeles, CA</p>
                        <p>United States</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
