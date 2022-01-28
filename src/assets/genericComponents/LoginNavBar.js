import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PATH } from "../../config";
export function LoginNavBar() {
  return (
    <Navbar variant="light" className="login-navbar fixed-top" expand="xl">
      <div className="container-fluid px-0">
        <Link to={PATH.SIGNUP}>
          <Navbar.Brand className="mr-0">
           
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#" className="cool-link">{`Explore`}</Nav.Link>
            <Nav.Link href="#" className="cool-link">{`Resources`}</Nav.Link>
            <Nav.Link
              href={PATH.SUBSCRIPTIONPLANS}
              className="cool-link"
            >{`Pricing`}</Nav.Link>
            <Nav.Link href="#" className="cool-link">{`Support`}</Nav.Link>
            <Nav.Link
              href={PATH.SIGNUPSTEPS}
              className="active cool-link"
            >{`Sign Up`}</Nav.Link>
            {/* <Nav.Link href={PATH.LOGIN} className="active cool-link">{`Login`}</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
export function LoginNavBar2() {
  return (
    <Navbar
      variant="light"
      className="login-navbar bg-white shadow"
      expand="xl"
    >
      <div className="container-fluid px-0">
        <Link to={PATH.SIGNUP}>
          <Navbar.Brand className="mr-0">
           
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#" className="cool-link">{`Explore`}</Nav.Link>
            <Nav.Link href="#" className="cool-link">{`Resources`}</Nav.Link>
            <Nav.Link
              href={PATH.SUBSCRIPTIONPLANS}
              className="cool-link"
            >{`Pricing`}</Nav.Link>
            <Nav.Link href="#" className="cool-link">{`Support`}</Nav.Link>
            <Nav.Link
              href={PATH.SIGNUPSTEPS}
              className="active cool-link"
            >{`Sign Up`}</Nav.Link>
            {/* <Nav.Link href={PATH.LOGIN} className="active cool-link">{`Login`}</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
export function LoginLogo() {
  return (
    <Link to={PATH.SIGNUP}>
     
    </Link>
  );
}
