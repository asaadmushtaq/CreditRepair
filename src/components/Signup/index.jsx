import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { PATH } from "../../config";
import { Link, useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { FieldError } from "../../assets/genericComponents/ErrorMessage";
import { Loader } from "../../assets/genericComponents/Loader";

export default function Signup() {
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cookies, setCookies] = useCookies();
  console.log(cookies)
  useEffect(() => {
    document.title = "Signup | Credt Repair";
  }, []);
  function onSubmit(data) {
    if (data.email === "admin@gmail.com") {
      data = { ...data, token: "token", businessSetup: false, locations: 0 };
      setCookies("credit_repair_user", data);
      history.push(PATH.DASHBOARD);
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
      <div id="login-page" className="flex">
        <div className="picture-segment">
          <div className="overlay" />
        </div>
        <div className="login-segment flex centered column">
          <div className="logo" style={{ position: 'relative', width: 188, height: 50, minHeight: 50 }}>
            <img src="https://disputebee.com/img/bee-dark-50x50.png" srcSet="https://disputebee.com/img/bee-dark-50x50.png 1x, https://disputebee.com/img/bee-dark-50x50.png 2x" alt="DisputeBee Logo" style={{ position: 'absolute', width: 50, height: 50, top: 0, left: 0, opacity: 0, transition: 'all 0.11s ease-in 0s' }} />
            <img src="https://disputebee.com/img/bee-light-50x50.png" srcSet="https://disputebee.com/img/bee-light-50x50.png 1x, https://disputebee.com/img/bee-dark-50x50.png 2x" alt="DisputeBee Logo" style={{ position: 'absolute', width: 50, height: 50, top: 0, left: 0, opacity: 1, transition: 'all 0.11s ease-in 0s' }} />
            <img src="https://disputebee.com/img/disputebee-light-135x29.png" srcSet="https://disputebee.com/img/disputebee-light-135x29.png 1x, https://disputebee.com/img/disputebee-light-135x29.png 2x" alt="DisputeBee Logo" style={{ position: 'absolute', width: 135, top: 11, left: 53, opacity: 0, transition: 'all 0.11s ease-in 0s' }} />
            <img src="https://disputebee.com/img/disputebee-dark-135x29.png" srcSet="https://disputebee.com/img/disputebee-dark-135x29.png 1x, https://disputebee.com/img/disputebee-dark-135x29.png 2x" alt="DisputeBee Logo" style={{ position: 'absolute', width: 135, top: 11, left: 53, opacity: 1, transition: 'all 0.11s ease-in 0s' }} /></div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {email === "superadmin@randox.com" ? (
              <Form.Control
                ref={register({})}
                name="userType"
                value="SuperAdmin"
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
            <div className="login-box flex column">
              <div className="top">
                <h3 className="login-text">Signup to your account</h3>
                <div className="global-text-input username-input">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="has-icon"
                    aria-label="Email Address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    style={{
                      borderColor: errors && errors.email ? "#a80000" : "",
                    }}
                    ref={register({ required: true })}
                  />
                  <div className="input-icon input-username" />
                  {errors.email && (
                    <FieldError message={"This Field is Required"} />
                  )}

                </div>
                <div className="global-text-input password-input">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="has-icon"
                    aria-label="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    style={{
                      borderColor: errors && errors.password ? "#a80000" : "",
                    }}
                    ref={register({ required: true })}
                  />
                  <div className="input-icon input-password" />
                  {errors.password && (
                    <FieldError message={"This Field is Required"} />
                  )}
                </div>
                  <button type="submit" className="global-button  blue large caps login-button hoverable">LOG IN</button>
              </div>
              <div className="bottom">
                <p>New to DisputeBee?&nbsp;<Link to={PATH.LOGIN}>Sign In</Link></p>
              </div>
            </div>
          </Form>
          <div className="forgot-password">Forgot your password? <a href="/forgot-password">Reset it.</a></div>
        </div>
      </div>
    </React.Fragment>
  );
}