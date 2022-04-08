import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { FieldError, Loader, ErrorMessage } from "../../assets";
import { useCookies } from "react-cookie";
import { PATH } from "../../config";
import { Link, useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { FaEnvelope, FaLock } from "react-icons/fa"
import { ROLE } from "./../../config";
import { useDispatch, useSelector } from "react-redux";
import { IMAGES } from "../../assets";
import { BsArrowRight } from "react-icons/bs";
import { AdminLogin } from "../../redux/actions";
export default function Login() {
  let history = useHistory();
  let dispatch = useDispatch();
  let user_Data = useSelector((state) => state.adminlogin);
  const { register, handleSubmit, errors } = useForm();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cookies, setCookies] = useCookies();
  const [roleId, selectRole] = useState(null)
  console.log(cookies)
  useEffect(() => {
    document.title = "Login | Credt Repair";
  }, []);
  function setCookiesforUser(data) {
    data = { ...data, role: data.roleId === 1 ? ROLE.CLIENT : data.roleId === 2 ? ROLE.BUSINESS : 'pharmacy' }
    setCookies("credit_repair_user", data)
  }
  function onSubmit(data) {
    console.log("login from console", data)
    data.roleId = parseInt(data.roleId)
    dispatch(AdminLogin(data, setCookiesforUser, Notificiation))

  }
  function Notificiation(data, condition) {
    condition === "error" ?
      toast.error(data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      :
      toast.success(data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
  }
  return (
    <React.Fragment>
      <ToastContainer />
      {/* {
        user_Data
        &&
        user_Data.adminloginFailure === true
        &&
        <ErrorMessage message={user_Data.adminloginError} />
      } */}
      <div className="limiter">

        <div className="container-login100">

          <div className="wrap-login100">

            <div className="login100-pic js-tilt" data-tilt>
              <img src={IMAGES.LOGINLOGO} alt="IMG" />
            </div>
            <Form onSubmit={handleSubmit(onSubmit)} className="login100-form validate-form">
              <div className="login_logo mr-0 text-center mb-5">
                <img src={IMAGES.CREDITREPAIR} className="img-fluid" alt="" />
              </div>
              <span className="login100-form-title pb-3">
                Member Login
              </span>
              <div className="wrap-input100 validate-input">
                <div className="form-group">
                  <select name="userRoleId"
                    className="form-select Input_login inner-salet select_Custom input100"
                    aria-label="Default select example"
                    onChange={(e) => { selectRole(e.target.value) }}>
                    <option>Select Role</option>
                    <option key={1} value="1">Client User</option>
                    <option key={2} value="2">Busniess User</option>
                  </select>
                  {
                    errors.roleId
                    &&
                    <FieldError message={"This Field Is Required"} />
                  }
                  <input style={{ display: "none" }} name="roleId" ref={register({ required: true })} value={roleId} />
                </div>
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
                {
                  user_Data
                    &&
                    user_Data.adminloginLoading === true
                    ?
                    <Loader /> :
                    <button type="submit" className="login100-form-btn">
                      Login
                    </button>
                }
              </div>
              {/* <div className="text-center p-t-12">
                <span className="txt1">
                  Forgot
                </span>
                <a className="txt2" href="/#">
                  Username / Password?
                </a>
              </div> */}
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