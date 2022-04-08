/* eslint-disable */
import React, { useState } from "react";
import { IMAGES } from "../../assets/images";
import { Loader } from "../../assets";
import { PATH, ROLE } from "../../config";
import { FaBars } from "react-icons/fa";
import { useAuth } from "../../Navigation/Auth/ProvideAuth";
import { Link, useHistory } from "react-router-dom";
import { SignOut } from "./SignOut";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { AiOutlineCreditCard, AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";

export function Header() {
  let auth = useAuth();
  document.body.style.backgroundColor = "#f5f5f5";
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  return (
    <>
      {loading === true && <Loader />}
      <div className="header">
        {/* Logo */}
        <div className="header-left">
          <Link to={PATH.DASHBOARD} className="logo mr-0">
            <img src={IMAGES.CREDITREPAIR} alt="Logo" className="img-fluid" />
          </Link>
        </div>
        <div className="PageName">
          <a href="javascript:void(0)" id="toggle_btn">
            <FaBars className="toggleset" />
          </a>
          {auth.credit_repair_user.role === ROLE.BUSINESS && (
            <>
              {
                history.location.pathname === PATH.DASHBOARD ||
                  history.location.pathname === PATH.ADMINDASHBOARD ? (
                  <h3 className="ml-4">{`Home`}</h3>
                ) : (
                  <></>
                )}
              {
                history.location.pathname === PATH.ADMINCLIENTS ||
                  history.location.pathname === PATH.CREATENEWCLIENT ? (
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
          {auth.credit_repair_user.role === ROLE.CLIENT && (
            <>
              {
                history.location.pathname === PATH.DASHBOARD ||
                  history.location.pathname === PATH.CLIENTDASHBOARD ? (
                  <h3 className="ml-4">{`Home`}</h3>
                ) : (
                  <></>
                )}
              {
                history.location.pathname === PATH.ADMINCLIENTS ||
                  history.location.pathname === PATH.CREATENEWCLIENT ? (
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
            <div className="d-inline-flex align-items-center h-100">
              <Dropdown overlay={menu} trigger={['click']} className="user-dropdown">
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  <AiOutlineUser />  My Account <DownOutlined className="ml-1" />
                </a>
              </Dropdown>
            </div>
            {/* <Dropdown className="user-dropdown d-flex align-items-center h-100">
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="user_dropdown"
              >
                <span className="user-img mt-0">
                  <AiOutlineUser className="mr-2 mb-1" />My Account
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu className="profile-dropmenu">
                <Dropdown.Item
                  href="javascript:void(0)"
                  className="no-padding logout-text"
                >
                  <p className="progress-text mb-0 f-13">Settings</p>
                </Dropdown.Item>
                <Dropdown.Item
                  href="javascript:void(0)"
                  className="no-padding logout-text"
                >
                  <p className="progress-text mb-0 f-13">Billing</p>
                </Dropdown.Item>
                <Dropdown.Item
                  href="javascript:void(0)"
                  className="no-padding logout-text"
                >
                  <p className="progress-text mb-0 f-13">Help</p>
                </Dropdown.Item>
                <Dropdown.Item className="d-block px-0">
                  <SignOut />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </li>
        </ul>
      </div>
    </>
  );
}
const menu = (
  <Menu>
    {auth.credit_repair_user.role === ROLE.CLIENT &&
      <Menu.Item key="0">
        <a href={PATH.ADMIN_SETTINGS}><AiOutlineSetting className="mr-3" />Settings</a>
      </Menu.Item>
    }
    <Menu.Item key="1">
      <a href="#"><AiOutlineCreditCard className="mr-3" />Billing</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="#"><BiHelpCircle className="mr-3" />Help</a>
    </Menu.Item>
    <Menu.Item key="1">
      <SignOut />
    </Menu.Item>
  </Menu>
)