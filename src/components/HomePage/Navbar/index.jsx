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
          <p>
            {/* <Dropdown>
              <Dropdown.Toggle className='about-us-btn-class' id="dropdown-basic">
                About Us
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href={PATH.COMPANYPROFILES}>{"Company Profiles"}</Dropdown.Item>
                <Dropdown.Item href={PATH.HOWITWORKS}>{"How it Works"}</Dropdown.Item>
                <Dropdown.Item href={PATH.VIDEOGALLERY}>{"Video Gallery"}</Dropdown.Item>
                <Dropdown.Item href={PATH.CLIENTTESTIMONIALS}>{"Client Testimonials"}</Dropdown.Item>
                <Dropdown.Item href={PATH.TERMSANDCONDITIONS}>{"Terms & Conditions"}</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
            <div className="dropdown">
              <button className='about-us-btn-class dropbtn'>About Us</button>
              <div className="dropdown-content">
                <a href={PATH.COMPANYPROFILES}>{"Company Profiles"}</a>
                <a href={PATH.HOWITWORKS}>{"How it Works"}</a>
                <a href={PATH.VIDEOGALLERY}>{"Video Gallery"}</a>
                <a href={PATH.CLIENTTESTIMONIALS}>{"Client Testimonials"}</a>
                <a href={PATH.TERMSANDCONDITIONS}>{"Terms & Conditions"}</a>
              </div>
            </div>
          </p>
          <p><Link to={PATH.SERVICES}>Services</Link></p>
          <p><Link to={PATH.CREDIT}>Credit</Link></p>
          <p><Link to={PATH.BLOGHOMEPAGE}>Blog</Link></p>
        </div>
      </div>
      <div className="cr__navbar-sign">
        <Link to={PATH.PRICINGPLAN}>
          <p>Sign in</p>
        </Link>
        <Link to={PATH.CONTACTUS}><button type="button">Contact Us</button></Link>
      </div>
      <div className="cr__navbar-menu border rounded">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="cr__navbar-menu_container scale-up-center">
            <div className="cr__navbar-menu_container-links">
              <p><Link to={PATH.HOMEPAGE}>Home</Link></p>
              <p><Link to="#">About Us</Link></p>
              <div>
                <small className='small-screen-links-class'><Link to={PATH.COMPANYPROFILES}>Company Profiles</Link></small>
                <small className='small-screen-links-class'><Link to={PATH.HOWITWORKS}>How it Works</Link></small>
                <small className='small-screen-links-class'><Link to={PATH.VIDEOGALLERY}>Video Gallery</Link></small>
                <small className='small-screen-links-class'><Link to={PATH.CLIENTTESTIMONIALS}>Client Testimonials</Link></small>
                <small className='small-screen-links-class'><Link to={PATH.TERMSANDCONDITIONS}>Terms & Conditions</Link></small>
              </div>
              <p><Link to={PATH.SERVICES}>Services</Link></p>
              <p><Link to={PATH.CREDIT}>Credit</Link></p>
              <p><Link to={PATH.BLOGHOMEPAGE}>Blog</Link></p>
            </div>
            <div className="cr__navbar-menu_container-links-sign">
              <Link to={PATH.LOGIN}>
                <p>Sign in</p>
              </Link>
              <Link to={PATH.CONTACTUS}><button type="button">Contact Us</button></Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
