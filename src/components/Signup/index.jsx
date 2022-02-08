import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { PATH } from "../../config";
import { Link, useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { FaEnvelope, FaLock } from "react-icons/fa"
import { IMAGES } from "../../assets";
import { BsArrowRight } from "react-icons/bs";

export default function Signup() {
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  useEffect(() => {
    document.title = "Signup | Credt Repair";
  }, []);
  function onSubmit() {
    history.push(PATH.LOGIN);
  }
  return (
    <React.Fragment>
      <ToastContainer />
      <div className="limiter">

        <div className="container-login100">
          {/* <div className="cr__navbar-links_logo">
          <img src={IMAGES.CREDITREPAIR} alt="" />
        </div> */}
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src={IMAGES.LOGINLOGO} alt="IMG" />
            </div>
            <Form onSubmit={handleSubmit(onSubmit)} className="login100-form validate-form">
              <div className="cr__navbar-links_logo mr-0 text-center mb-5">
                <img src={IMAGES.CREDITREPAIRGREEN} className="img-fluid" alt="" />
              </div>
              <span className="login100-form-title pb-3">
                Member Sign up
              </span>
              <div className="wrap-input100 validate-input">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="input100"
                  style={{
                    borderColor: errors && errors.email ? "#a80000" : "",
                  }}
                  ref={register({ required: true })}
                />

                <span className="focus-input100" />
                <span className="symbol-input100">
                  <FaEnvelope />
                </span>
              </div>
              <div className="wrap-input100 validate-input">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input100"
                  style={{
                    borderColor: errors && errors.password ? "#a80000" : "",
                  }}
                  ref={register({ required: true })}
                />

                <span className="focus-input100" />
                <span className="symbol-input100">
                  <FaLock />
                </span>
              </div>
              <div className="container-login100-form-btn">
                <button type="submit" className="login100-form-btn">
                  Sign Up
                </button>
              </div>
              <div className="text-center p-t-136">
                <div className="txt2">
                  Already have an account? <Link to={PATH.LOGIN}> Log in</Link>
                  <BsArrowRight className="m-l-5" />
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}