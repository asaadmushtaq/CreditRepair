import { FormControl, FormGroup } from "react-bootstrap";
import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage, FieldError, Loader ,IMAGES} from "../../assets";
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from "../../Navigation/Auth/ProvideAuth";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { PATH } from "../../config";
import { FaEnvelope, FaLock,FaRegAddressCard } from "react-icons/fa"
import { OptVerifyUser } from "../../redux/actions";
export default function OtpComponent() {
    let auth = useAuth();
    let dispatch = useDispatch();
    let user_Data = useSelector((state) => state.register);
    const { register, handleSubmit, errors } = useForm();
    function onSubmit(data) {
      // 
        data = { ...data, roleId: 1, userId: auth.credit_repair_user.userId }
        console.log(data);
        dispatch(OptVerifyUser(data, Notificiation))
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
        <>
            <ToastContainer />
            {
                user_Data
                &&
                user_Data.optFailure  === true
                &&
                <ErrorMessage message={user_Data.opt} />
            }
           
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
      <span className="login100-form-title pb-3 customset_emailtext">
        Enter Otp which you received on Email
      </span>
      <div className="wrap-input100 validate-input">
        <input
          type="text"
          name="code"
          placeholder="Enter Code"
          className="input100"
          style={{
            borderColor: errors && errors.code ? "#a80000" : "",
          }}
          ref={register({ required: true })}
        />

        <span className="focus-input100" />
        <span className="symbol-input100">
          <FaRegAddressCard />
        </span>
      </div>

      <div className="container-login100-form-btn">
      {console.log("user_Data.registerLoading ",user_Data.optLoading )}

      {
          user_Data
            &&
            user_Data.optLoading === true
            ?
            <Loader />
            :
        <button type="submit" className="login100-form-btn">
        {"Verify"}
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
</>
    );
}


// function ResendAgain() {
//     let auth = useAuth();
//     let dispatch = useDispatch();
//     let user_Data = useSelector((state) => state.user);
//     function onSubmit(data) {
//       // 

//         data = { ...data, userId: auth.alfa_care_user.userId }
//         console.log(data);
//         dispatch(OtpVerify(data, Notificiation))
//     }
//     function Notificiation(data, condition) {

//             condition === "error" ?
//                 toast.error(data, {
//                     position: "top-right",
//                     autoClose: 5000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                 })
//                 :
//                 toast.success(data, {
//                     position: "top-right",
//                     autoClose: 5000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                 })
//         }
 
  
//     return (
//         <>
//  <ToastContainer />
         
//             <p className="">
//                 {"Didn't received a code? "}
//                 {
//                     user_Data
//                         &&
//                         user_Data.otpResendLoading === true
//                         ?
//                         <Loader />
//                         : <button type="submit" onClick={() => { onSubmit() }} className="text-info font-weight-bold text-link cursor_set">
//                             {"Send again"}
//                         </button>
//                 }

//             </p>
//         </>
//     );
// }