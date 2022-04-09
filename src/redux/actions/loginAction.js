import { adminLogin } from "../api/loginApi"
import { request, success, failure, ADMIN_LOGIN } from './utilities';

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
