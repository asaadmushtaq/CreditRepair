import { APP_SETTINGS } from "../../config";
import axios from "axios";


export function addAdmin(data, token) {
    return axios.post(`${APP_SETTINGS.API_PATH.ADDADMIN.addadmin}`, data, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}
export function deleteAdmin(key, token) {

    return axios.post(`${APP_SETTINGS.API_PATH.ADDADMIN.deleteadmin}`, { key: key }, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}
export function filterTestReportData(data, token) {
    return axios.post(`${APP_SETTINGS.API_PATH.ADDADMIN.filterTestReport}`, data, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}
export function adminGetAllOrList(id, token) {
    return axios.get(`${APP_SETTINGS.API_PATH.ADDADMIN.adminGetAllOrList}${id}`, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}
export function testReportCount(token) {
    return axios.get(`${APP_SETTINGS.API_PATH.ADDADMIN.testReportCount}`, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}
export function changeActiveStatus(data, token) {
    return axios.post(`${APP_SETTINGS.API_PATH.ADDADMIN.changeActiveStatus}`, data, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}
export function submitForReview(data, token) {
    return axios.post(`${APP_SETTINGS.API_PATH.ADDADMIN.submitForReview}`, data, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}
export function takeDecision(data, token) {
    return axios.post(`${APP_SETTINGS.API_PATH.ADDADMIN.takeDecision}`, data, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}

export function changeActiveBloacksStatus(data,token) {
    return axios.post(`${APP_SETTINGS.API_PATH.ADDADMIN.changeActiveBlockStatus}`, data,{
         headers: {
             Authorization: 'Bearer ' + token
         }
    })
}
export function reActivateDevice(testId, token) {
    return axios.get(`${APP_SETTINGS.API_PATH.ADDADMIN.reActivateDevice}?testId=${testId}`, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}