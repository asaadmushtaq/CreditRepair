import { register, OptVerify } from "../api/registerApi"
import { request, success, failure, REGISTRATION, OPT } from './utilities';

export function Register(data, setCookiesforUser, Notificiation, setUserID) {
    return dispatch => {
        dispatch(request(REGISTRATION.REGISTER_REQUEST));
        register(data).then(
            response => {
                if (response.data.message === "Success") {
                    dispatch(success(REGISTRATION.REGISTER_SUCCESS, response.data.data))
                    setCookiesforUser(response.data.data)
                    Notificiation(response.data.message, "success")
                    setUserID(response.data.data.userId);
                }
                else {
                    dispatch(failure(REGISTRATION.REGISTER_FAILURE, response.data.message))
                    Notificiation(response.data.message, "error")
                    setUserID(response.data.data.userId);
                }
            },
            error => {
                dispatch(failure(REGISTRATION.REGISTER_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}

export function OptVerifyUser(data, Notificiation, moveToNext) {
    return dispatch => {
        dispatch(request(OPT.OPT_REQUEST));
        OptVerify(data).then(
            response => {
                if (response.data.message === "Success") {
                    dispatch(success(OPT.OPT_SUCCESS, response.data.data))
                    if (moveToNext) {
                        moveToNext()
                    }
                    Notificiation(response.data.message, "success")
                }
                else {
                    dispatch(failure(OPT.OPT_FAILURE, response.data.message))
                    Notificiation(response.data.message, "error")
                }
            },
            error => {
                dispatch(failure(OPT.OPT_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}

