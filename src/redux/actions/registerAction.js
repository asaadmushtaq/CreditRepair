import { register } from "../api/registerApi"
import { request, success, failure, REGISTRATION } from './utilities';



export function Register(data, NotificationSucces, NotificationError) {
    return dispatch => {
        dispatch(request(REGISTRATION.REGISTER_REQUEST));
        register(data).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(REGISTRATION.REGISTER_SUCCESS, response.data.data))
                    NotificationSucces(response.data.message);
                }
                else {
                    dispatch(failure(REGISTRATION.REGISTER_FAILURE, response.data.message))
                    NotificationError(response.data.message);
                }
            },
            error => {
                dispatch(failure(REGISTRATION.REGISTER_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
