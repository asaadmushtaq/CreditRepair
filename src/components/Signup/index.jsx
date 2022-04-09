import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { PATH, ROLE, TOASTER_STYLING_VALUES } from "../../config";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { FaEnvelope, FaLock, FaRegAddressCard } from "react-icons/fa"
import { IMAGES, Loader, ErrorMessage } from "../../assets";
import { BsArrowRight } from "react-icons/bs";
import { toast } from 'react-toastify';
import { Register } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from 'react-cookie';
import OtpComponent from "./OtpComponent";
import {
  useParams
} from "react-router-dom"


export default function Signup() {
  let dispatch = useDispatch();
  const { roleId } = useParams();
  let user_Data = useSelector((state) => state.register);
  const [cookies, setCookies] = useCookies();
  console.log(cookies)
  const { register, handleSubmit, errors } = useForm();
  const [userRegisterId, setUserRegisterId] = useState(0);
  useEffect(() => {
    document.title = "Signup | Credt Repair";
  }, []);
  function onSubmit(data) {
    console.log(data);
    data = { ...data, roleId: parseInt(roleId) }
    dispatch(Register(data, setCookiesforUser, Notificiation, setUserID))
  }
  function setCookiesforUser(data) {
    Notificiation()
    data = { ...data, role: data.roleId === 1 ? ROLE.CLIENT : data.roleId === 2 ? ROLE.BUSINESS : 'pharmacy' }
    setCookies("credit_repair_user", data)
  }
  function Notificiation(data, condition) {
    condition === "error" ?
      toast.error(data, TOASTER_STYLING_VALUES)
      :
      toast.success(data, TOASTER_STYLING_VALUES)

  }
  function setUserID(userID) {
    setUserRegisterId(userID);
  }
  return (
    <React.Fragment>
      <ToastContainer />
      {
        user_Data
        &&
        user_Data.registerFailure === true
        &&
        <ErrorMessage message={user_Data.registerError} />
      }
      {
        userRegisterId > 0
        &&
        <OtpComponent />
      }

      {
        userRegisterId === 0
        &&
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
                  <img src={IMAGES.CREDITREPAIR} className="img-fluid" alt="" />
                </div>
                <span className="login100-form-title pb-3">
                  Member Sign up
                </span>
                <div className="wrap-input100 validate-input">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="input100"
                    style={{
                      borderColor: errors && errors.firstname ? "#a80000" : "",
                    }}
                    ref={register({ required: true })}
                  />

                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <FaRegAddressCard />
                  </span>
                </div>
                <div className="wrap-input100 validate-input">
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="input100"
                    style={{
                      borderColor: errors && errors.lastname ? "#a80000" : "",
                    }}
                    ref={register({ required: true })}
                  />

                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <FaRegAddressCard />
                  </span>
                </div>
                <div className="wrap-input100 validate-input">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
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
                    name="passwordHash"
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
                  {
                    user_Data
                      &&
                      user_Data.registerLoading === true
                      ?
                      <Loader />
                      :
                      <button type="submit" className="login100-form-btn">
                        Sign Up
                      </button>
                  }
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
      }
    </React.Fragment>
  );
}