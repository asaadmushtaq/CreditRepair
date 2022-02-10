import React from 'react';
import { IMAGES } from '../../../assets';
// import people from '../../assets/people.png';
// import ai from '../../assets/ai.png';
// import './header.css';

const Header = () => (
  <div className="cr__header section__padding" id="home">
    <div className="cr__header-content">
      <h1 className="gradient__text">CreditCiti Consulting Firm, LLC.</h1>
      <p>With over 12 years of experience and many satisfied clients nationwide, you can trust Creditciti to provide you with top quality service and assistance getting your credit back on track. Our expertise makes us one of the best in Credit Repair.</p>

      <div className="cr__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
    </div>

    <div className="cr__header-image">
      <img src={IMAGES.CREDITREPAIR} alt="" />
    </div>
  </div>
);

export default Header;
