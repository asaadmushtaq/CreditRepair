import { adminProfileData, changePasswordData, twofactorData, sessionLogSaveData, sessionLogSingleDeleteData, sessionLogDeleteAllData, sessionLogListData, isExist } from '../api';
import { request, success, failure, ADMIN_PROFILE } from './utilities';

export function AdminProfileData(data, token, moveToNext, Notificiation) {
    return dispatch => {
        dispatch(request(ADMIN_PROFILE.ADMIN_PROFILE_REQUEST));
        adminProfileData(data, token).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(ADMIN_PROFILE.ADMIN_PROFILE_SUCCESS, response.data.data))
                    Notificiation(response.data.message, "success");
                    if (moveToNext) {
                        moveToNext(data);
                    }
                }
                else {
                    dispatch(failure(ADMIN_PROFILE.ADMIN_PROFILE_FAILURE, response.data.message))
                    Notificiation(response.data.message, "error");
                }
            },
            error => {
                dispatch(failure(ADMIN_PROFILE.ADMIN_PROFILE_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function ChangePasswordData(data, token, moveToNext, Notificiation) {
    return dispatch => {
        dispatch(request(ADMIN_PROFILE.CHANGE_PASSWORD_REQUEST));
        changePasswordData(data, token).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(ADMIN_PROFILE.CHANGE_PASSWORD_SUCCESS, response.data.data))
                    Notificiation(response.data.message, "success");
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(failure(ADMIN_PROFILE.CHANGE_PASSWORD_FAILURE, response.data.message))
                    Notificiation(response.data.message, "error");
                }
            },
            error => {
                dispatch(failure(ADMIN_PROFILE.CHANGE_PASSWORD_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function TwofactorData(data, token, notification, moveToNext) {
    return dispatch => {
        dispatch(request(ADMIN_PROFILE.TWO_FACTOR_REQUEST));
        twofactorData(data, token).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(ADMIN_PROFILE.TWO_FACTOR_SUCCESS, response.data.data))
                    notification(response.data.message);
                    if (moveToNext) {
                        moveToNext(response.data.data)
                    }
                }
                else {
                    dispatch(failure(ADMIN_PROFILE.TWO_FACTOR_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(ADMIN_PROFILE.TWO_FACTOR_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function SessionLogSaveData(data, token, moveToNext, loginData) {
    return dispatch => {
        dispatch(request(ADMIN_PROFILE.SESSION_LOG_SAVE_REQUEST));
        sessionLogSaveData(data, token).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(ADMIN_PROFILE.SESSION_LOG_SAVE_SUCCESS, response.data.data))
                    if (moveToNext) {
                        moveToNext(loginData);
                    }
                }
                else {
                    dispatch(failure(ADMIN_PROFILE.SESSION_LOG_SAVE_FAILURE, response.data.message))
                    moveToNext(loginData);
                }
            },
            error => {
                dispatch(failure(ADMIN_PROFILE.SESSION_LOG_SAVE_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
                moveToNext(loginData);
            }
        )
    }
}
export function SessionLogSingleDeleteData(data, token, loading) {
    return dispatch => {
        loading(true)
        dispatch(request(ADMIN_PROFILE.SESSION_LOG_SINGLE_DELETE_REQUEST));
        sessionLogSingleDeleteData(data, token).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(ADMIN_PROFILE.SESSION_LOG_SINGLE_DELETE_SUCCESS, data))
                    loading(false)
                }
                else {
                    dispatch(failure(ADMIN_PROFILE.SESSION_LOG_SINGLE_DELETE_FAILURE, response.data.message))
                    loading(false)
                }
            },
            error => {
                loading(false)
                dispatch(failure(ADMIN_PROFILE.SESSION_LOG_SINGLE_DELETE_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function SessionLogDeleteAllData(data, token, moveToNext) {
    return dispatch => {
        dispatch(request(ADMIN_PROFILE.SESSION_LOG_DELETE_ALL_REQUEST));
        sessionLogDeleteAllData(data, token).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(ADMIN_PROFILE.SESSION_LOG_DELETE_ALL_SUCCESS, response.data.data))
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(failure(ADMIN_PROFILE.SESSION_LOG_DELETE_ALL_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(ADMIN_PROFILE.SESSION_LOG_DELETE_ALL_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function SessionLogListData(userId, token) {
    return dispatch => {
        dispatch(request(ADMIN_PROFILE.SESSION_LOG_LIST_REQUEST));
        sessionLogListData(userId, token).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(ADMIN_PROFILE.SESSION_LOG_LIST_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(ADMIN_PROFILE.SESSION_LOG_LIST_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(ADMIN_PROFILE.SESSION_LOG_LIST_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function SessionIsExist(data, token, moveToNext) {
    return dispatch => {
        dispatch(request(ADMIN_PROFILE.SESSION_EXIST_REQUEST));
        isExist(data, token).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(ADMIN_PROFILE.SESSION_EXIST_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(ADMIN_PROFILE.SESSION_EXIST_FAILURE, response.data.message))
                    if (moveToNext) {
                        moveToNext()
                    }
                }
            },
            error => {
                dispatch(failure(ADMIN_PROFILE.SESSION_EXIST_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}