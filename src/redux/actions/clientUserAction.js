import { clientManageProfile, clientGetProfile } from "../api/clientUserApi"
import { request, success, failure, CLIENT_USER } from './utilities';

export function ClientManageProfile(data, auth, Notificiation) {
    return dispatch => {
        dispatch(request(CLIENT_USER.CLIENT_MANAGE_PROFILE_REQUEST));
        clientManageProfile(data, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(CLIENT_USER.CLIENT_MANAGE_PROFILE_SUCCESS, response.data.data))
                    Notificiation(response.data.message, "success");
                }
                else {
                    dispatch(failure(CLIENT_USER.CLIENT_MANAGE_PROFILE_FAILURE, response.data.message));
                    Notificiation(response.data.message, "error");
                }
            },
            error => {
                dispatch(failure(CLIENT_USER.CLIENT_MANAGE_PROFILE_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}

export function ClientGetProfile(data) {
    return dispatch => {
        dispatch(request(CLIENT_USER.CLIENT_GET_PROFILE_REQUEST));
        clientGetProfile(data).then(
            response => {
                if (response.data.message === "Success") {
                    dispatch(success(CLIENT_USER.CLIENT_GET_PROFILE_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(CLIENT_USER.CLIENT_GET_PROFILE_FAILURE, response.data.message));
                }
            },
            error => {
                dispatch(failure(CLIENT_USER.CLIENT_GET_PROFILE_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
