import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { PATH } from "../../config";
import { Link, useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { FaEnvelope, FaLock } from "react-icons/fa"
import { IMAGES } from "../../assets";
import { BsArrowRight } from "react-icons/bs";
export default function Login() {
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cookies, setCookies] = useCookies();
  console.log(cookies)
  useEffect(() => {
    document.title = "Login | Credt Repair";
  }, []);
  function onSubmit(data) {
    if (data.email === "admin@gmail.com") {
      data = { ...data, token: "token", businessSetup: false, locations: 0 };
      setCookies("credit_repair_user", data);
      history.push(PATH.ADMINDASHBOARD);
    }
    else {
      toast.error("Invalid Email or Password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  return (
    <React.Fragment>
      <ToastContainer />
      <div className="limiter">

        <div className="container-login100">

          <div className="wrap-login100">

            <div className="login100-pic js-tilt" data-tilt>
              <img src={IMAGES.LOGINLOGO} alt="IMG" />
            </div>
            <Form onSubmit={handleSubmit(onSubmit)} className="login100-form validate-form">
              {email === "admin@gmail.com" ? (
                <Form.Control
                  ref={register({})}
                  name="userType"
                  value="Admin"
                  type="hidden"
                />
              ) : (
                <Form.Control
                  ref={register({})}
                  name="userType"
                  value="Admin"
                  type="hidden"
                />
              )}
              <div className="cr__navbar-links_logo mr-0 text-center mb-5">
                <img src={IMAGES.CREDITREPAIRGREEN} className="img-fluid" alt="" />
              </div>
              <span className="login100-form-title pb-3">
                Member Login
              </span>
              <div className="wrap-input100 validate-input">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
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
                  Login
                </button>
              </div>
              <div className="text-center p-t-12">
                <span className="txt1">
                  Forgot
                </span>
                <a className="txt2" href="#">
                  Username / Password?
                </a>
              </div>
              <div className="text-center p-t-136">
                <Link to={PATH.SIGNUP} className="txt2">
                  Create your Account
                  <BsArrowRight className="m-l-5" />
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}