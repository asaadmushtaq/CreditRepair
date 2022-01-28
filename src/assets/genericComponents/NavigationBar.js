import {
    Button,
    Dropdown,
    DropdownButton,
    Nav,
    Navbar
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { PATH } from "../../config";
import { GoPrimitiveDot } from "react-icons/go";
import { BsBell } from "react-icons/bs";
import React from "react";
import { CustomToggle } from "./customToggle";
import { SignOut, IMAGES } from '../../assets';
import { FiSettings } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";
export function NavigationBar(props) {
    return (
        <div className="container-fluid navbar-parent">
            <div className="row navbar-wrapper">
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 align-self-center">
                    <div className="d-flex align-items-center justify-content-between justify-content-md-start">
                        <Button
                            variant='light'
                            className="bg-white no-box-shadow border-0 d-block d-xl-none"
                            name='menuBtn'
                            onClick={() => props.setShow()}>
                            <GiHamburgerMenu id="hamburger-icon" className="cursor" size={24} />
                        </Button>
                        <div className="w-10" />
                    </div>
                </div>
                <div className="col-12 d-none d-md-block p-0">
                    <Navbar className="padding-360" collapseOnSelect expand="lg">
                        <Nav className="d-flex align-items-center justify-content-between w-100">
                            <div>
                                Dashboard
                            </div>
                            <div className="d-flex align-items-center">
                                <span className='position-relative' style={{ marginRight: "25px" }}>
                                    {/* notification list on navigationBar on every page */}
                                    <Dropdown className="main-drop-down-notification notificationList">
                                        <Dropdown.Toggle
                                            className="custom-grey-button"
                                            as={CustomToggle}
                                            id="dropdown-custom-components">
                                            <p className="no-margin">
                                                <BsBell data-tip data-for="notification-icon" className="header-icon-tool" />
                                                <GoPrimitiveDot size={18} className="GoPrimitiveDot" />
                                            </p>
                                        </Dropdown.Toggle>
                                        {/* <Dropdown.Menu className="bell-notification-drop-down scroll-section">
                                            <Notifications />
                                        </Dropdown.Menu> */}
                                    </Dropdown>
                                </span>
                                <DropdownButton
                                    id="dropdown-item-button"
                                    title={<img width="40px" className="mr-2 cursor" src={IMAGES.PROFILELOGO} alt="" />}
                                    size="sm"
                                    alignRight
                                    bsPrefix="moreIcon"
                                    className="moreIcon">
                                    <Dropdown.Item as="button" className=" text-secondary">
                                        <Link to={PATH.PROFILE} className="text-decoration-none">
                                            <span className="text-muted">
                                                <BiEditAlt className="mr-1" />
                                                {"Edit Profile"}
                                            </span>
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item as="button" className=" text-secondary">
                                        <span className="text-muted">
                                            <FiSettings className="mr-1" />
                                            {"Settings"}
                                        </span>
                                    </Dropdown.Item>
                                    <Dropdown.Item as="button" className=" text-secondary">
                                        <SignOut />
                                    </Dropdown.Item>
                                </DropdownButton>
                            </div>

                        </Nav>
                    </Navbar>
                </div>
            </div>
        </div >
    )
}