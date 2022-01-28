import { addAdmin, deleteAdmin, adminGetAllOrList, changeActiveStatus, filterTestReportData, testReportCount, changeActiveBloacksStatus, takeDecision, reActivateDevice, submitForReview } from "../api/adminApi"
import { request, success, failure, ADD_ADMIN } from './utilities';

export function AddAdminData(data, token, moveToNext, Notificiation) {
    return dispatch => {
        dispatch(request(ADD_ADMIN.ADD_ADMIN_REQUEST));
        addAdmin(data, token).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(ADD_ADMIN.ADD_ADMIN_SUCCESS, response.data.data))
                    Notificiation(response.data.message, "success");
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(failure(ADD_ADMIN.ADD_ADMIN_FAILURE, response.data.message));
                    Notificiation(response.data.message, "error");
                }
            },
            error => {
                dispatch(failure(ADD_ADMIN.ADD_ADMIN_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function DeleteAdminData(key, token, notification) {
    return dispatch => {
        dispatch(request(ADD_ADMIN.DELETE_ADMIN_REQUEST));
        deleteAdmin(key, token).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(ADD_ADMIN.DELETE_ADMIN_SUCCESS, key))
                    notification(response.data.message);
                }
                else {
                    dispatch(failure(ADD_ADMIN.DELETE_ADMIN_FAILURE, response.data.message));
                }
            },
            error => {
                dispatch(failure(ADD_ADMIN.DELETE_ADMIN_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function AdminGetAllOrSingleList(id, token) {
    return dispatch => {
        dispatch(request(ADD_ADMIN.ADMIN_GET_ALL_OR_LIST_REQUEST));
        adminGetAllOrList(id, token).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(ADD_ADMIN.ADMIN_GET_ALL_OR_LIST_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(ADD_ADMIN.ADMIN_GET_ALL_OR_LIST_FAILURE, response.data.message));
                }
            },
            error => {

                dispatch(failure(ADD_ADMIN.ADMIN_GET_ALL_OR_LIST_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function ChangeActiveStatus(data, token, statusNotification) {
    return dispatch => {
        dispatch(request(ADD_ADMIN.CHANGE_ACTIVE_STATUS_REQUEST));
        changeActiveStatus(data, token).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(ADD_ADMIN.CHANGE_ACTIVE_STATUS_SUCCESS, data))
                    statusNotification(response.data.message);
                }
                else {
                    dispatch(failure(ADD_ADMIN.CHANGE_ACTIVE_STATUS_FAILURE, response.data.message));
                }
            },
            error => {
                dispatch(failure(ADD_ADMIN.CHANGE_ACTIVE_STATUS_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function FilterTestReportData(data, token, moveToNext) {
    return dispatch => {
        dispatch(request(ADD_ADMIN.FILTER_TEST_REPORT_REQUEST));
        filterTestReportData(data, token).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(ADD_ADMIN.FILTER_TEST_REPORT_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(ADD_ADMIN.FILTER_TEST_REPORT_FAILURE, response.data.message));
                    if (moveToNext) {
                        if (response.data.data.length <= 0) {
                            moveToNext("No Record Found", "error")
                        }
                    }
                }
            },
            error => {
                dispatch(failure(ADD_ADMIN.FILTER_TEST_REPORT_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function TestReportCount(auth) {
    return dispatch => {
        dispatch(request(ADD_ADMIN.TEST_REPORT_COUNT_REQUEST));

        testReportCount(auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(ADD_ADMIN.TEST_REPORT_COUNT_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(ADD_ADMIN.TEST_REPORT_COUNT_FAILURE, response.data.message));
                }
            },
            error => {
                dispatch(failure(ADD_ADMIN.TEST_REPORT_COUNT_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function ChangeActiveBloacksStatus(id, auth, Notificiation) {
    return dispatch => {
        dispatch(request(ADD_ADMIN.TEST_REPORT_COUNT_REQUEST));

        changeActiveBloacksStatus(id, auth).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(ADD_ADMIN.TEST_REPORT_COUNT_SUCCESS, response.data.data))
                    Notificiation(response.data.message, "success");
                }
                else {
                    dispatch(failure(ADD_ADMIN.TEST_REPORT_COUNT_FAILURE, response.data.message));
                    Notificiation(response.data.message, "error");
                }
            },
            error => {
                dispatch(failure(ADD_ADMIN.TEST_REPORT_COUNT_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))

            }
        )
    }
}
export function SubmitForReview(data, token, Notificiation) {
    return dispatch => {
        dispatch(request(ADD_ADMIN.SUBMIT_FOR_REVIEW_REQUEST));

        submitForReview(data, token).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(ADD_ADMIN.SUBMIT_FOR_REVIEW_SUCCESS, response.data.data))
                    Notificiation(response.data.message, "success")
                }
                else {
                    dispatch(failure(ADD_ADMIN.SUBMIT_FOR_REVIEW_FAILURE, response.data.message));
                    Notificiation(response.data.message, "error")
                }
            },
            error => {
                dispatch(failure(ADD_ADMIN.SUBMIT_FOR_REVIEW_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function TakeDecision(data, token, moveToNext, notification) {
    return dispatch => {
        dispatch(request(ADD_ADMIN.TAKE_DECISION_REQUEST));
        takeDecision(data, token).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(ADD_ADMIN.TAKE_DECISION_SUCCESS, response.data.data))
                    notification(response.data.message);
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(failure(ADD_ADMIN.TAKE_DECISION_FAILURE, response.data.message));
                }
            },
            error => {
                dispatch(failure(ADD_ADMIN.TAKE_DECISION_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function ReActivateDevice(testId, token, Notificiation) {
    return dispatch => {
        dispatch(request(ADD_ADMIN.REACTIVE_DEVICES_REQUEST));
        reActivateDevice(testId, token).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(ADD_ADMIN.REACTIVE_DEVICES_SUCCESS, response.data.data))
                    Notificiation(response.data.message, "success")

                }
                else {
                    dispatch(failure(ADD_ADMIN.REACTIVE_DEVICES_FAILURE, response.data.message));
                    Notificiation(response.data.message, "error")
                }
            },
            error => {
                dispatch(failure(ADD_ADMIN.REACTIVE_DEVICES_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
