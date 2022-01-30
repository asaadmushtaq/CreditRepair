import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../../assets';
import { PATH } from '../../../config';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="cr__navbar">
      <div className="cr__navbar-links">
        <div className="cr__navbar-links_logo">
          <img src={IMAGES.CREDITREPAIR} alt="" />
        </div>
        <div className="cr__navbar-links_container">
          <p><Link to={PATH.HOMEPAGE}>Home</Link></p>
          <p><Link to={PATH.HOMEPAGE}>Explore</Link></p>
          <p><Link to={PATH.HOMEPAGE}>Pricing</Link></p>
          <p><Link to={PATH.ABOUTUS}>About</Link></p>
          <p><Link to={PATH.CONTACTUS}>Contact</Link></p>
        </div>
      </div>
      <div className="cr__navbar-sign">
         <Link to={PATH.LOGIN}><p>Sign in</p></Link>
        <Link to={PATH.SIGNUP}><button type="button">Sign up</button></Link>
      </div>
      <div className="cr__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="cr__navbar-menu_container scale-up-center">
          <div className="cr__navbar-menu_container-links">
          <p><Link to={PATH.HOMEPAGE}>Home</Link></p>
          <p><Link to={PATH.HOMEPAGE}>Explore</Link></p>
          <p><Link to={PATH.HOMEPAGE}>Pricing</Link></p>
          <p><Link to={PATH.ABOUTUS}>About</Link></p>
          <p><Link to={PATH.CONTACTUS}>Contact</Link></p>
          </div>
          <div className="cr__navbar-menu_container-links-sign">
            <Link to={PATH.LOGIN}><p>Sign in</p></Link>
            <Link to={PATH.SIGNUP}><button type="button">Sign up</button></Link>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
