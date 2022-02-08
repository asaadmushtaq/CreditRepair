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
