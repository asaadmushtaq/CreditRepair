import TextField from '@material-ui/core/TextField';
import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from "react-cookie";
import { useForm } from 'react-hook-form';
import { AdminProfileData, ChangePasswordData, SessionLogListData, TwofactorData, SessionLogSingleDeleteData, SessionLogDeleteAllData } from '../../redux/actions';
import { useAuth } from '../../Navigation/Auth/ProvideAuth';
import { ErrorMessage, FieldError, Loader, Loader1 } from '../../assets';
import { ADMIN_PROFILE, request } from '../../redux/actions/utilities';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
export default function ProfileShow() {
  let dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState("3")
  useEffect(() => {
    dispatch(request(ADMIN_PROFILE.ADMIN_PROFILE_RESET))
  }, [dispatch])
  return (
    <React.Fragment>
      <ToastContainer />
      <Tabs
        defaultActiveKey={3}
        onSelect={(e) => setSelectedTab(e)}
        className=" explore_tabs justify-content-center pt-4"
      >
        <Tab eventKey={3} title="Personal Information">
          {
            selectedTab === "3"
            &&
            <Information />
          }
        </Tab>
        <Tab eventKey={2} title="Two Factor Authentication">
          {
            selectedTab === "2"
            &&
            <FactorAuthentication />
          }
        </Tab>
        <Tab eventKey={1} title="Active Sessions">
          {
            selectedTab === "1"
            &&
            <BrowserSection />
          }

        </Tab>
      </Tabs>
    </React.Fragment>
  );
}
function Information() {
  const { register, handleSubmit, errors, watch, reset } = useForm();
  const [currentPassword, setCurrentPassword] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmpassword] = useState("")
  const passwordField = React.useRef({});
  passwordField.current = watch("password", "");
  let auth = useAuth();
  const dispatch = useDispatch();
  function onSubmit(data) {
    let finalData = {
      "currentPassword": data.currentpassword,
      "password": data.password,
      "confirmPassword": data.confirmpassword,
    }
    dispatch(ChangePasswordData(finalData, auth.randox_certifly_user.token, moveToNext, Notificiation))
  }
  function moveToNext() {
    reset();
  }
  function Notificiation(data, condition) {
    reset();
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
  let adminProfile = useSelector((state) => state.adminProfile);
  return (
    <React.Fragment>
      <div className="row d-flex justify-content-center mt-4 pt-2">
        <div className="col-md-4 pr-0">
          <h3 class="text-lg font-medium text-gray-900">Profile Information</h3>
          <p class="mt-1 text-sm text-gray-600">
            Update your account's profile information and email address.
          </p>
        </div>
        <UpdateProfileData />
        <div className="col-md-4 pr-0">
          <h3 class="text-lg font-medium text-gray-900">
            Update Password</h3>
          <p class="mt-1 text-sm text-gray-600">
            Ensure your account is using a long, random password to stay secure.
          </p>
        </div>
        <div className="col-md-8">
          <div className="card  card-body-styling pb-0 p-0">

            <Form className="mt-4" onSubmit={handleSubmit(onSubmit)} >
              {
                adminProfile.updatePasswordFailure === true
                &&
                adminProfile.updatePasswordError
                &&
                <div className="error-fi d-flex  px-4 pt-2 pb-2 text-align-center">
                  <ErrorMessage message={adminProfile.updatePasswordError} />
                </div>
              }
              <div className="row d-flex  px-4 pt-2 pb-2">
                <div className="col-md-12 ">
                  <TextField
                    type="password"
                    style={{ borderColor: (errors && errors.currentpassword) ? "#a80000" : "" }}
                    id="outlined-required"
                    label="Current Password"
                    className="w-100"
                    variant="outlined"
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                  <input type="text"
                    name="currentpassword"
                    ref={register({ required: true })}
                    value={currentPassword}
                    style={{
                      display: "none",
                    }}
                  />
                  {
                    errors.currentpassword
                    &&
                    <FieldError message={"This Field is Required"} />
                  }
                </div>
                <div className="col-md-12 mt-4">
                  <TextField
                    style={{ borderColor: (errors && errors.password) ? "#a80000" : "" }}
                    type="password"
                    id="outlined-required"
                    label="New Password"
                    className="w-100"
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    name="password"
                    value={password}
                    style={{
                      display: "none",
                    }}
                    ref={register({
                      required: "You must specify a password",
                      minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters"
                      }
                    })} />
                  {
                    errors.password
                    &&
                    <FieldError message={errors.password.message} />
                  }
                </div>
                <div className="col-md-12 mt-4">
                  <TextField
                    style={{ borderColor: (errors && errors.confirmpassword) ? "#a80000" : "" }}
                    type="password"
                    id="outlined-required"
                    label="Confirm Password"
                    className="w-100"
                    variant="outlined"
                    onChange={(e) => setConfirmpassword(e.target.value)}
                  />
                  <input
                    name="confirmpassword"
                    ref={register({
                      validate: value =>
                        value === passwordField.current || "The passwords do not match"
                    })}
                    value={confirmpassword}
                    style={{
                      display: "none",
                    }}
                  />
                  {
                    errors.confirmpassword
                    &&
                    <FieldError message={errors.confirmpassword.message} />
                  }
                </div>
              </div>
              <div className="text-right card-footer mt-3">
                <Form.Group className="mb-0 ">
                  {
                    adminProfile.updatePasswordLoading === true ?
                      <Loader />
                      :
                      <button className="btn-block-save randox-secondary-button"  >SAVE</button>
                  }

                </Form.Group>
              </div>
            </Form>
          </div>
        </div>
      </div>
      {/* <hr className="line-devider" />
      <div className="row d-flex justify-content-center mt-4 pt-2">
        <div className="col-md-4 pr-0">
          <h3 class="text-lg font-medium text-gray-900">Delete Account</h3>
          <p class="mt-1 text-sm text-gray-600">
            Permanently delete your account.
          </p>
        </div>
        <div className="col-md-8">
          <div className="card  card-body-styling pb-0 p-0">
            <Form className="mt-2 ">
              <div className="row d-flex  px-4 pt-2 pb-2">
                <div className="col-md-8 ">
                  <p class="mt-1 text-sm text-gray-600">
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Before deleting your account,
                    please download any data or information that you wish to retain.
                  </p>
                </div>

              </div>
              <div className="text-left px-4 pb-4 pt-1 ">
                <div controlId="exampleForm.ControlSelect1 " className="mb-0 randox-delete-button">
                  <button  onClick={deletesubmit} type="button" className="btn-block-save btn-delete-account randox-primary-button mb-3"  > DELETE ACCOUNT</button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div> */}
    </React.Fragment>
  )
}
function FactorAuthentication() {
  const dispatch = useDispatch();
  let auth = useAuth();
  let token = auth.randox_certifly_user.token;
  let statusChange = useSelector((select) => select.adminProfile);
  const [cookies, setCookie] = useCookies(["randox_certifly_user"]);
  console.log(cookies)
  function StatusUpdate() {
    let finalData = {
      "id": auth.randox_certifly_user.userId,
      "status": !auth.randox_certifly_user.twoFAEnabled
    };

    dispatch(TwofactorData(finalData, token, notification, moveToNext))
  }
  function notification(data) {
    toast.success(data, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }
  function moveToNext() {
    let newUserData = {
      email: auth.randox_certifly_user.email,
      loginId: auth.randox_certifly_user.loginId,
      name: auth.randox_certifly_user.name,
      role: auth.randox_certifly_user.role,
      roleId: auth.randox_certifly_user.roleId,
      token: auth.randox_certifly_user.token,
      twoFACode: auth.randox_certifly_user.twoFACode,
      twoFAEnabled: !auth.randox_certifly_user.twoFAEnabled,
      userId: auth.randox_certifly_user.userId,
    };
    setCookie("randox_certifly_user", newUserData);
  }
  return (
    <div className="row d-flex justify-content-center">
      <div className="row d-flex justify-content-center mt-4 p-3">
        <div className="col-md-4 pr-0">
          <h3 class="text-lg font-medium text-gray-900">Two Factor Authentication</h3>
          <p class="mt-1 text-sm text-gray-600">
            Add additional security to your account using two factor authentication.
          </p>
        </div>
        <div className="col-md-8">
          <div className="card  card-body-styling pb-0 p-0">
            <Form className="mt-4 ">
              <div className="row d-flex  px-4 pt-2 pb-2">
                <div className="col-md-8 ">
                  <h3 class="text-lg font-medium text-gray-900">
                    {auth.randox_certifly_user.twoFAEnabled === true ?
                      "You have enabled two factor authentication"
                      :
                      "You have not enabled two factor authentication"
                    }</h3>
                </div>
                <div className="col-md-8 ">
                  <p class="mt-1 text-sm text-gray-600">
                    When two factor authentication is enabled, you will be prompted for a secure,
                    random token during authentication. You may retrieve this token from your phone's
                    Google Authenticator application.
                  </p>
                </div>

              </div>
              <div className="text-left px-4 pb-4 pt-1 ">
                <div className="mb-0 randox-delete-button">
                  {
                    auth.randox_certifly_user.twoFAEnabled === true ?
                      <>
                        {statusChange && statusChange.twofactorLoading === false && (
                          <button type="button" onClick={StatusUpdate} className="btn-block-save randox-secondary-button mb-3"  >Disable</button>
                        )}
                        {statusChange && statusChange.twofactorLoading === true && <Loader1 />}
                      </>
                      :
                      <>
                        {statusChange && statusChange.twofactorLoading === false && (
                          <button type="button" onClick={StatusUpdate} className="btn-block-save randox-secondary-button mb-3"  >Enable</button>
                        )}
                        {statusChange && statusChange.twofactorLoading === true && <Loader1 />}
                      </>
                  }
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
function BrowserSection() {
  let auth = useAuth();
  let dispatch = useDispatch();
  let adminProfile = useSelector((state) => state.adminProfile);
  const [cookies, remove] = useCookies(["randox_certifly_user"]);
  console.log(cookies)
  function deleteSwal() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      // icon: "warning",
      showCancelButton: true,
      customClass: 'swal-wide',
      confirmButtonColor: "#01362c",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(SessionLogDeleteAllData(auth.randox_certifly_user.userId, auth.randox_certifly_user.token, moveToNext))
      }
    })
  }
  function moveToNext() {
    remove("randox_certifly_user", { path: "/" });
  }
  useEffect(() => {
    dispatch(SessionLogListData(auth.randox_certifly_user.userId, auth.randox_certifly_user.token))
  }, [auth, dispatch])
  return (
    <div className="row d-flex justify-content-center mt-4 pt-2">
      <div className="col-md-4 pr-0">
        <h3 class="text-lg font-medium text-gray-900">Browser Sessions</h3>
        <p class="mt-1 text-sm text-gray-600">
          Manage and log out your active sessions on other browsers and devices.
        </p>
      </div>
      <div className="col-md-8">
        <div className="card  card-body-styling pb-0 p-0">
          <Form className="mt-2 ">
            {
              adminProfile
              &&
              adminProfile.sessionLogListLoading === true
              &&
              <Loader1 />
            }
            {
              adminProfile
              &&
              adminProfile.sessionLogListFailure === true
              &&
              adminProfile.sessionLogListError
              &&
              <ErrorMessage message={adminProfile.sessionLogListError} />
            }
            {
              adminProfile
              &&
              adminProfile.sessionLogListSuccess === true
              &&
              adminProfile.sessionLogList
              &&
              <React.Fragment>
                <div className="row d-flex  px-4 pt-2 pb-2">
                  <div className="col-md-8 ">
                    <p class="mt-1 text-sm text-gray-600">
                      Once your account is deleted, all of its resources and data
                      will be permanently deleted. Before deleting your account,
                      please download any data or information that you wish to retain.
                    </p>
                  </div>
                  <div className="col-md-12 mt-2">
                    {
                      adminProfile.sessionLogList
                      &&
                      adminProfile.sessionLogList.map((session, index) => {
                        return (
                          <SessionList
                            key={index}
                            session={session} />
                        )
                      })
                    }
                    {
                      adminProfile.sessionLogList
                      &&
                      adminProfile.sessionLogList
                      &&
                      adminProfile.sessionLogList.length <= 0
                      &&
                      <p class="mt-1 text-sm text-gray-600">
                        {"No Session Available"}
                      </p>
                    }

                  </div>
                </div>
                {
                  adminProfile.sessionLogDeleteAllLoading === true
                    ?
                    <Loader />
                    :
                    <div className="text-left px-4 pb-4 pt-1 ">
                      {
                        adminProfile.sessionLogList
                        &&
                        adminProfile.sessionLogList
                        &&
                        adminProfile.sessionLogList.length > 0
                        &&
                        <div className="mb-0 randox-delete-button">
                          <button type="button" onClick={deleteSwal} className="btn-block-save text-uppercase randox-primary-button mb-3"  >  Log Out Other Browser Sessions</button>
                        </div>
                      }

                    </div>
                }
              </React.Fragment>
            }
          </Form>
        </div>
      </div>
    </div>
  )
}
function UpdateProfileData() {
  let auth = useAuth();
  const [cookies, setCookies] = useCookies();
  console.log("sd", cookies)
  const [name, setName] = useState(auth && auth.randox_certifly_user && auth.randox_certifly_user.name ? auth.randox_certifly_user.name : null)
  const [email, setEmail] = useState(auth && auth.randox_certifly_user && auth.randox_certifly_user.email ? auth.randox_certifly_user.email : null)
  const { register, handleSubmit, errors, reset } = useForm();
  let dispatch = useDispatch();
  let adminProfile = useSelector((state) => state.adminProfile);
  function submit(data) {
    dispatch(AdminProfileData(data, auth.randox_certifly_user.token, moveToNext, Notificiation))
  }
  function moveToNext(data) {
    let finalData = {
      email: data.email,
      name: data.name,
      role: auth.randox_certifly_user.role,
      roleId: auth.randox_certifly_user.roleId,
      token: auth.randox_certifly_user.token,
      userId: auth.randox_certifly_user.userId,
    }
    setCookies("randox_certifly_user", finalData)
  }
  function Notificiation(data, condition) {
    reset();
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
      toast.success(" Profile Information has been updated", {
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
    <div className="col-md-8">
      <div className="card  card-body-styling pb-0 p-0">
        <Form onSubmit={handleSubmit(submit)} className="mt-4 ">
          {
            adminProfile.adminProfileFailure === true
            &&
            adminProfile.adminProfileError
            &&
            <div className="error-fi d-flex  px-4 pt-2 pb-2 text-align-center">
              <ErrorMessage message={adminProfile.adminProfileError} />
            </div>
          }
          <div className="row d-flex  px-4 pt-2 pb-2">
            <div className="col-md-12 ">
              <TextField
                value={name}
                onChange={(e) => { setName(e.target.value) }}
                id="outlined-required"
                label="Name"
                className="w-100"
                variant="outlined"
              />
              <input type="text"
                name="name"
                ref={register({ required: true })}
                value={name}
                style={{
                  display: "none",
                }}
              />
              {
                errors.name
                &&
                <FieldError message={"This Field is Required"} />
              }
            </div>
            <div className="col-md-12 mt-4">
              <TextField
                onChange={(e) => { setEmail(e.target.value) }}
                type="email"
                id="outlined-required"
                label="Email"
                value={email}
                className="w-100"
                variant="outlined"
              />
              <input type="text"
                name="email"
                ref={register({ required: true })}
                value={email}
                style={{
                  display: "none",
                }}
              />
              {
                errors.email
                &&
                <FieldError message={"This Field is Required"} />
              }
            </div>
          </div>
          <div className="text-right card-footer mt-3">
            <Form.Group className="mb-0 ">
              {
                adminProfile.adminProfileLoading === true ?
                  <Loader />
                  :
                  <button type="submit" className="btn-block-save randox-secondary-button"  >SAVE</button>
              }

            </Form.Group>
          </div>
        </Form>
      </div>
    </div>
  )
}
function SessionList(props) {
  let dispatch = useDispatch();
  let adminProfile = useSelector((state) => state.adminProfile)
  const [loader, setLoader] = useState(false)
  let auth = useAuth();
  function deleteSignle(sessionId) {
    dispatch(SessionLogSingleDeleteData(sessionId, auth.randox_certifly_user.token, setLoader))
  }
  return (
    <div className='d-flex align-items-center justify-content-between ' >
      <div className="flex items-center d-flex">
        <div >
          <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-gray-500">
            <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </div>
        <div className="ml-3">
          <div className=" text-gray-600">
            {`${props.session.os} - ${props.session.browser}`}
          </div>
          <div>
            <div className="text-xs text-gray-500">
              {props.session.ip},
            </div>
          </div>
        </div>
      </div>
      {
        loader === true
          ?
          <Loader />
          :
          <button disabled={adminProfile.sessionLogDeleteAllLoading} className="cursor btn btn-sm bg-danger-light"
            onClick={() => { deleteSignle(props.session.sessionLogId) }}><FaTrash className='cursor' />
          </button>

      }
    </div>
  )
}