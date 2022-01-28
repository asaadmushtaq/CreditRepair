import { APP_SETTINGS } from "../../config";
import axios from "axios";


export function filteredData(data, token) {
    return axios.post(`${APP_SETTINGS.API_PATH.CLIENT_GET_FILTERED_LIST.getFilteredList}`, data, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}
export function getSingleOrListData(userId, token) {
    return axios.get(`${APP_SETTINGS.API_PATH.CLIENT_GET_FILTERED_LIST.getSingleOrList}${userId}`, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export function getApprovedCertificatesData(userId, token) {

    return axios.get(`${APP_SETTINGS.API_PATH.CLIENT_GET_FILTERED_LIST.getApprovedCertificates}?userId=${userId}`, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}
export function clientResetPassword(loginId, token) {

    return axios.get(`${APP_SETTINGS.API_PATH.CLIENT_GET_FILTERED_LIST.clientResetPassword}?loginId=${loginId}`, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export function getApprovedCertificatesSingleData(testId, token) {
    return axios.get(`${APP_SETTINGS.API_PATH.CLIENT_GET_FILTERED_LIST.getApprovedCertificatesSingle}?testId=${testId}`, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}
export function sendOriginal(testId, token) {
    return axios.get(`${APP_SETTINGS.API_PATH.CLIENT_GET_FILTERED_LIST.sendOriginal}?testId=${testId}`, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}
export function sendUpdated(data, token) {
    return axios.post(`${APP_SETTINGS.API_PATH.CLIENT_GET_FILTERED_LIST.sendUpdated}`, data, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}