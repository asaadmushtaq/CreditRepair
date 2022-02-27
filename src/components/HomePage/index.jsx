import React from 'react';
import { IMAGES } from '../../assets';
import BlogSection from './Blog';
import FeaturesSection from './FeaturesSection';
import Header from './Header';
import Navbar from './Navbar';
import RegisterSection from './RegisterSection';
import WhatIsCR from './WhatIsCR';

const Homepage = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <WhatIsCR />
        <FeaturesSection />
        <BlogSection />
        <RegisterSection />
        <ClientPartners />
        {/* Footer Start */}
        <FooterComponent />
        {/* Footer End */}

      </div>
    </div>
  );
};

export default Homepage;

export function FooterComponent() {
  return (
    <div className="cr__footer section__padding">
      <div className="cr__footer-links">
        <div className="cr__footer-links_logo">
          <img src={IMAGES.CREDITREPAIR} alt="credit repair" />
          <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
        </div>
        <div className="cr__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="cr__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="cr__footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className="cr__footer-copyright">
        <p>@2022 All rights reserved.</p>
      </div>
    </div>
  )
}

export function ClientPartners() {
  return (
    <div className='bg-white'>
      <div className="cr__header section__padding pb-3" id="home">
        <div className="cr__header-content mr-0">
          <h1 className="gradient__text">{"Partners"}</h1>
        </div>
      </div>
      <div className='section__padding container pt-0'>
        <div className='row container'>
          <div className='col-lg d-flex justify-content-center my-2'>
            <img src={IMAGES.PARTNER_LOGO_ONE} alt="" />
          </div>
          <div className='col-lg d-flex justify-content-center my-2'>
            <img src={IMAGES.PARTNER_LOGO_TWO} alt="" />
          </div>
          <div className='col-lg d-flex justify-content-center my-2'>
            <img src={IMAGES.PARTNER_LOGO_THREE} alt="" />
          </div>
          <div className='col-lg d-flex justify-content-center my-2'>
            <img src={IMAGES.PARTNER_LOGO_FOUR} alt="" />
          </div>
          <div className='col-lg d-flex justify-content-center my-2'>
            <img src={IMAGES.PARTNER_LOGO_FIVE} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
