import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import Navbar from '../HomePage/Navbar';

export default function AboutUs() {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <div className="cr__header section__padding pb-3" id="home">
                    <div className="cr__header-content mr-0">
                        <h1 className="gradient__text">About Us</h1>
                        <p className='mt-5 font-weight-bolder'>What is Credit Repair?</p>
                        <p className='mt-3 text-left'>Credit Repair is a software platform created in 2022. Our software is used by professional credit repair companies to streamline their operations, and can also be used by consumers for personal use.</p>

                        <div className='d-flex align-self-center mt-5'>
                            <FaUserGraduate className='aboutus-usericon text-light' />
                        </div>
                        <div className='d-flex align-self-center mt-3'>
                            <p>
                                {"Credit Repair"}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='container section__padding pt-0' style={{ maxWidth: "880px" }}>
                    <div className='row mt-3 pb-5'>
                        <div className='col-12 col-md-6'>
                            <p className='text-light text-left mt-4'>Hi, I'm Credit Repair founder and CEO</p>
                            <p className='text-light text-left mt-4'>In 2022, I created Credit Repair in order to automate the process of sending dispute letters to credit bureaus. Writing these letters usually requires lots of time, research, and expert level knowledge. Credit Repair makes this easy.</p>
                            <p className='text-light text-left mt-4'>One of the most successful strategies in credit repair involves sending carefully crafted letters to credit bureaus, debt collectors, and creditors</p>
                            <p className='text-light text-left mt-4'>There weren't ANY credit repair software platforms that made it easy to generate these letters on your own. So I said fine, we'll just make one ourselves - and in 2022 we brought Credit Repair to life.</p>
                        </div>
                        <div className='col-12 col-md-6'>
                            <p className='text-light text-left mt-4'>Credit Repair made the process of repairing MY OWN credit such a breeze that we knew we were onto something great. Before we knew it, people and businesses were lining up to get access to the platform before it had even officially launched.</p>
                            <p className='text-light text-left mt-4'>It has now evolved into a complete professional credit repair software solution - whether you're an individual repairing your own credit or a professional company repairing credit for your clients.</p>
                            <p className='text-light text-left mt-4'>Our goal is to help credit repair businesses run their companies efficiently, and empower anyone who wants to easily create and send dispute letters to credit bureaus. Customer satisfaction is our top priority, and we want to see every single customer be as successful as possible.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
