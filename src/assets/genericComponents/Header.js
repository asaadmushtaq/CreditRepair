/* eslint-disable */
import React, { useState } from "react";
import { IMAGES } from "../../assets/images";
import Dropdown from "react-bootstrap/Dropdown";
import { Loader } from "../../assets";
import { PATH } from "../../config";
import { FaBars } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";
import { useAuth } from "../../Navigation/Auth/ProvideAuth";
import { Link, useHistory } from "react-router-dom";
import { SignOut } from "./SignOut";

export function Header() {
  let auth = useAuth();
  document.body.style.backgroundColor = "#f5f5f5";
  const [loading, setLoading] = useState(false);
  console.log(setLoading)
  let history = useHistory();
  return (
    <>
      {loading === true && <Loader />}
      <div className="header">
        {/* Logo */}
        <div className="header-left">
          <Link to={PATH.ADMINDASHBOARD} className="logo mr-0">
            <img src={IMAGES.RANDOXLOGO} alt="Logo" className="img-fluid" />
          </Link>
        </div>
        <div className="PageName">
          <a href="javascript:void(0)" id="toggle_btn">
            <FaBars className="toggleset" />
          </a>
          {auth.credit_repair_user.userType === "Admin" && (
            <>
              {
                history.location.pathname === PATH.ADMINDASHBOARD ? (
                  <h3 className="ml-4">{`Home`}</h3>
                ) : (
                  <></>
                )}
              {
                history.location.pathname === PATH.ADMINCLIENTS ? (
                  <h3 className="ml-4">{`Clients`}</h3>
                ) : (
                  <></>
                )}
              {
                history.location.pathname === PATH.ADMINLETTERLIBRARY ? (
                  <h3 className="ml-4">{`Letter Library`}</h3>
                ) : (
                  <></>
                )}
            </>
          )}
        </div>
        {/* /Logo */}
        {/* Mobile Menu Toggle */}
        <a href="javascript:void(0)" className="mobile_btn" id="mobile_btn">
          <FaBars />
        </a>
        {/* /Mobile Menu Toggle */}
        <ul className="nav user-menu">

          <li className="nav-item dropdown has-arrow">
            <Dropdown className="user-dropdown  h-100">
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="user_dropdown"
              >
                <span className="user-img mt-0">
                  <img
                    className="rounded-circle"
                    src={IMAGES.PROFILELOGO}
                    width="31"
                    alt="Ryan Taylor"
                  />
                  <BsChevronDown className="text-dark ml-2" />
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu className="profile-dropmenu">

                <Dropdown.Item href={PATH.PROFILESHOW} className="no-padding">
                  <div className="logout-text">
                    <IoPersonSharp size={19} className="mr-3" />
                    <p className=" randox-text-dark mb-0 f-13">My Profile</p>

                  </div>

                </Dropdown.Item>

                <Dropdown.Item className="d-block px-0">
                  <SignOut />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </>
  );
}
