import { filteredData, getSingleOrListData, getApprovedCertificatesData, clientResetPassword, getApprovedCertificatesSingleData, sendOriginal, sendUpdated } from "../api/clientApi"
import { request, success, failure, ADD_ADMIN, APPROVED_CERTIFICATES } from './utilities';



export function ClientFilteredData(data, token) {
    return dispatch => {
        dispatch(request(ADD_ADMIN.CLIENT_FILTERED_LIST_REQUEST));
        filteredData(data, token).then(
            response => {

                if (response.data.succeeded === true) {
                    dispatch(success(ADD_ADMIN.CLIENT_FILTERED_LIST_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(ADD_ADMIN.CLIENT_FILTERED_LIST_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(ADD_ADMIN.CLIENT_FILTERED_LIST_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function GetSingleOrListData(userId, token) {
    return dispatch => {
        dispatch(request(ADD_ADMIN.GET_CLIENT_SINGLE_OR_LIST_REQUEST));
        getSingleOrListData(userId, token).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(ADD_ADMIN.GET_CLIENT_SINGLE_OR_LIST_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(ADD_ADMIN.GET_CLIENT_SINGLE_OR_LIST_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(ADD_ADMIN.GET_CLIENT_SINGLE_OR_LIST_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function GetApprovedCertificatesData(userId, token, type) {
    return dispatch => {
        dispatch(request(APPROVED_CERTIFICATES.GET_APPROVED_CERTIFICATES_REQUEST));
        getApprovedCertificatesData(userId, token).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(APPROVED_CERTIFICATES.GET_APPROVED_CERTIFICATES_SUCCESS, { type: type, res: response.data.data }))
                }
                else {
                    dispatch(failure(APPROVED_CERTIFICATES.GET_APPROVED_CERTIFICATES_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(APPROVED_CERTIFICATES.GET_APPROVED_CERTIFICATES_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function GetListExportCSV(userId, token) {
    return dispatch => {
        dispatch(request(APPROVED_CERTIFICATES.GET_LIST_EXPORT_CSV_REQUEST));
        getApprovedCertificatesData(userId, token).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(APPROVED_CERTIFICATES.GET_LIST_EXPORT_CSV_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(APPROVED_CERTIFICATES.GET_LIST_EXPORT_CSV_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(APPROVED_CERTIFICATES.GET_LIST_EXPORT_CSV_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function ClientResetPassword(loginId, token, notification) {
    return dispatch => {
        dispatch(request(APPROVED_CERTIFICATES.CLIENT_RESET_PASSWORD_REQUEST));
        clientResetPassword(loginId, token).then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(APPROVED_CERTIFICATES.CLIENT_RESET_PASSWORD_SUCCESS, response.data.data))
                    notification(response.data.message);
                }
                else {
                    dispatch(failure(APPROVED_CERTIFICATES.CLIENT_RESET_PASSWORD_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(APPROVED_CERTIFICATES.CLIENT_RESET_PASSWORD_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function GetApprovedCertificatesSingleData(testId, token) {
    return dispatch => {
        dispatch(request(APPROVED_CERTIFICATES.GET_APPROVED_CERTIFICATES_SINGLE_REQUEST));
        getApprovedCertificatesSingleData(testId, token).then(
            response => {
                console.log("fffffres", response);
                if (response.data.succeeded === true) {
                    dispatch(success(APPROVED_CERTIFICATES.GET_APPROVED_CERTIFICATES_SINGLE_SUCCESS, response.data.data))
                }
                else {
                    dispatch(failure(APPROVED_CERTIFICATES.GET_APPROVED_CERTIFICATES_SINGLE_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(APPROVED_CERTIFICATES.GET_APPROVED_CERTIFICATES_SINGLE_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function SendOriginal(testId, token, Notificiation) {
    return dispatch => {
        dispatch(request(APPROVED_CERTIFICATES.SEND_ORIGINAL_REQUEST));
        sendOriginal(testId, token).then(
            response => {
                console.log("fffffres", response);
                if (response.data.succeeded === true) {
                    dispatch(success(APPROVED_CERTIFICATES.SEND_ORIGINAL_SUCCESS, response.data.data))
                    Notificiation(response.data.message, "success");
                }
                else {
                    dispatch(failure(APPROVED_CERTIFICATES.SEND_ORIGINAL_FAILURE, response.data.message))
                    Notificiation(response.data.message, "error");
                }
            },
            error => {
                dispatch(failure(APPROVED_CERTIFICATES.SEND_ORIGINAL_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
export function SendUpdated(data, token, Notificiation) {
    return dispatch => {
        dispatch(request(APPROVED_CERTIFICATES.SEND_UPDATE_REQUEST));
        sendUpdated(data, token).then(
            response => {
                console.log("fffffres", response);
                if (response.data.succeeded === true) {
                    dispatch(success(APPROVED_CERTIFICATES.SEND_UPDATE_SUCCESS, response.data.data))
                    Notificiation(response.data.message, "success");
                }
                else {
                    dispatch(failure(APPROVED_CERTIFICATES.SEND_UPDATE_FAILURE, response.data.message))
                    Notificiation(response.data.message, "error");
                }
            },
            error => {
                dispatch(failure(APPROVED_CERTIFICATES.SEND_UPDATE_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}
