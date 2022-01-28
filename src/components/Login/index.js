import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { FieldError } from "../../assets/genericComponents/ErrorMessage";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { PATH } from "../../config";
import { useHistory } from "react-router-dom";
import { BsFillPersonFill, BsFillEyeFill } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";

export default function Login() {
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cookies, setCookies] = useCookies();
  console.log(cookies)
  useEffect(() => {
    document.title = "Login || Randox - Certifly";
  }, []);
  function onSubmit(data) {
    if (data.email === "superadmin@randox.com") {
      data = { ...data, token: "token", businessSetup: false, locations: 0 };
      setCookies("randox_certifly_user", data);
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
      <div className="form-container outer">
        <div className="form-form">
          <div className="form-form-wrap">
            <div className="form-container">
              <div className="form-content">
                <h1 className>Sign In</h1>
                <p className>Log in to your account to continue.</p>
                <Form onSubmit={handleSubmit(onSubmit)} className="text-left">
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
                  <div className="field-wrapper input">
                    <Form.Label>USERNAME</Form.Label>
                    <BsFillPersonFill className="feather-user" />
                    <Form.Control
                      className="mt-1"
                      name="email"
                      type="text"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      placeholder="Enter Email"
                      style={{
                        borderColor: errors && errors.email ? "#a80000" : "",
                      }}
                      ref={register({ required: true })}
                    />
                    {errors.email && (
                      <FieldError message={"This Field is Required"} />
                    )}
                  </div>
                  <div className="field-wrapper input">
                    <Form.Label>PASSWORD</Form.Label>
                    <AiOutlineLock className="feather-lock" />
                    <Form.Control
                      className="mt-1"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder="Enter Password"
                      style={{
                        borderColor: errors && errors.password ? "#a80000" : "",
                      }}
                      ref={register({ required: true })}
                    />
                    <BsFillEyeFill className="feather-eye" />
                    {errors.email && (
                      <FieldError message={"This Field is Required"} />
                    )}
                  </div>
                  <div className="d-sm-flex justify-content-between">
                    <div className="field-wrapper">
                      <button type="submit" className="btn btn-primary">Log In</button>
                    </div>
                  </div>
                  <br />
                  <br />
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}