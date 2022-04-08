import { adminLogin, twoFaCode } from "../api/loginApi"
import { request, success, failure, ADMIN_LOGIN, ADD_ADMIN } from './utilities';



export function AdminLogin(data, setCookiesforUser, Notificiation) {
    return dispatch => {
        dispatch(request(ADMIN_LOGIN.ADMIN_LOGIN_REQUEST));
        adminLogin(data).then(
            response => {
                if (response.data.message === "Success") {
                    dispatch(success(ADMIN_LOGIN.ADMIN_LOGIN_SUCCESS, response.data.data))
                    setCookiesforUser(response.data.data)
                    Notificiation(response.data.message, "success")

                }
                else {
                    dispatch(failure(ADMIN_LOGIN.ADMIN_LOGIN_FAILURE, response.data.message))
                    Notificiation(response.data.message, "error")
                }
            },
            error => {
                dispatch(failure(ADMIN_LOGIN.ADMIN_LOGIN_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function TwoFaCode(data, notification) {
    return dispatch => {
        dispatch(request(ADMIN_LOGIN.TWO_FA_CODE_REQUEST));
        twoFaCode(data).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(ADMIN_LOGIN.TWO_FA_CODE_SUCCESS, response.data.data))
                    notification(response.data.message);
                }
                else {
                    dispatch(failure(ADMIN_LOGIN.TWO_FA_CODE_FAILURE, response.data.message));
                }
            },
            error => {
                dispatch(failure(ADMIN_LOGIN.TWO_FA_CODE_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}

