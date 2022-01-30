import React from 'react';
import { IMAGES } from '../../../assets';
// import people from '../../assets/people.png';
// import ai from '../../assets/ai.png';
// import './header.css';

const Header = () => (
  <div className="cr__header section__padding" id="home">
    <div className="cr__header-content">
      <h1 className="gradient__text">Professional Credit Repair Software</h1>
      <p>We provide cutting edge credit repair business software that saves you time by automating the entire dispute process from start to finish.</p>

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
