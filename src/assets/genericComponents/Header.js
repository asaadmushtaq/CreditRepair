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

export function Header(props) {
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
          <Link to="" className="logo mr-0">
            <img src={IMAGES.RANDOXLOGO} alt="Logo" className="img-fluid" />
          </Link>
        </div>
        <div className="PageName">
          <a href="javascript:void(0)" id="toggle_btn">
            <FaBars className="toggleset" />
          </a>
          {/* {auth.randox_certifly_user.userType === "SuperAdmin" && (
            <>
              {
                history.location.pathname === PATH.S_DASHBOARD ? (
                  <h3 className="ml-4">{`Dashboard`}</h3>
                ) : (
                  <></>
                )}
              {
                history.location.pathname === PATH.S_REPORTS ? (
                  <h3 className="ml-4">{`Reports`}</h3>
                ) : (
                  <></>
                )}
              {
                history.location.pathname === PATH.S_HISTORY_LOGS ? (
                  <h3 className="ml-4">{`Admin History Logs`}</h3>
                ) : (
                  <></>
                )}
              {
                history.location.pathname === PATH.S_IMPORT_ORDERS ? (
                  <h3 className="ml-4">{`Import Orders`}</h3>
                ) : (
                  <></>
                )}
              {
                history.location.pathname === PATH.S_HELP_SUPPORT ? (
                  <h3 className="ml-4">{`Help Support`}</h3>
                ) : (
                  <></>
                )}
              {
                history.location.pathname === PATH.S_CUSTOM_URNS_SEARCH ? (
                  <h3 className="ml-4">{`Custom Urn Search`}</h3>
                ) : (
                  <></>
                )}
              {
                history.location.pathname === PATH.S_VERIFIER_COUNT ? (
                  <h3 className="ml-4">{`Varifier Count`}</h3>
                ) : (
                  <></>
                )}
              {
                history.location.pathname === PATH.S_REVIEW_CERTIFICATE ? (
                  <h3 className="ml-4">{`submit for Review `}</h3>
                ) : (
                  <></>
                )}
              {
                history.location.pathname === PATH.S_SUPPORT_TECH ? (
                  <h3 className="ml-4">{`IT Support tech `}</h3>
                ) : (
                  <></>
                )}
              {
                history.location.pathname === PATH.S_REVIEW_REQUEST ? (
                  <h3 className="ml-4">{`Review Certificate`}</h3>
                ) : (
                  <></>
                )}
              {
                history.location.pathname === PATH.S_ADMIN_USER ? (
                  <h3 className="ml-4">{`Admin User`}</h3>
                ) : (
                  <></>
                )}
              {
                history.location.pathname === PATH.S_CHANGE_PASSWORD ? (
                  <h3 className="ml-4">{`Change Password`}</h3>
                ) : (
                  <></>
                )}
              {
                history.location.pathname === PATH.S_UNDO_DELETE_CERT ? (
                  <h3 className="ml-4">{`undo delete cert`}</h3>
                ) : (
                  <></>
                )}
              {
                history.location.pathname === PATH.S_LOGIN_CHECK ? (
                  <h3 className="ml-4">{`login check`}</h3>
                ) : (
                  <></>
                )}
              {
                history.location.pathname === PATH.S_REGISTRATION_CHECK ? (
                  <h3 className="ml-4">{`registration check`}</h3>
                ) : (
                  <></>
                )}
              {
                history.location.pathname === PATH.S_USED_QR_DEVICE ? (
                  <h3 className="ml-4">{`used qr devices`}</h3>
                ) : (
                  <></>
                )}

              {
                history.location.pathname === PATH.S_DOWNLOAD_CERTIFICATE ? (
                  <h3 className="ml-4">{`download certificate`}</h3>
                ) : (
                  <></>
                )}
              {
                history.location.pathname === PATH.S_BOOKING_REF_CHECK ? (
                  <h3 className="ml-4">{`booking ref check`}</h3>
                ) : (
                  <></>
                )}
              {
                history.location.pathname === PATH.S_AVERAGE_APPROVAL_TIME ? (
                  <h3 className="ml-4">{`average approval time`}</h3>
                ) : (
                  <></>
                )}
              {
                history.location.pathname === PATH.S_USER_CERTIFICATE ? (
                  <h3 className="ml-4">{`user certificate`}</h3>
                ) : (
                  <></>
                )}
            </>
          )} */}
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
