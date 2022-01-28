import { APP_SETTINGS } from "../../config";
import axios from "axios";


export function adminProfileData(data, token) {
    return axios.post(`${APP_SETTINGS.API_PATH.ADMINPROFILE.adminProfile}`, data, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}
export function changePasswordData(data, token) {
    return axios.post(`${APP_SETTINGS.API_PATH.ADMINPROFILE.updatePassword}`, data, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}
export function twofactorData(data, token) {
    return axios.post(`${APP_SETTINGS.API_PATH.ADMINPROFILE.twofactor}`, data, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}
export function sessionLogSaveData(data, token) {
    return axios.post(`${APP_SETTINGS.API_PATH.ADMINPROFILE.sessionLogSave}`, data, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}
export function sessionLogSingleDeleteData(data, token) {
    return axios.post(`${APP_SETTINGS.API_PATH.ADMINPROFILE.sessionLogSingleDelete}`, { key: data }, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}
export function sessionLogDeleteAllData(data, token) {
    return axios.post(`${APP_SETTINGS.API_PATH.ADMINPROFILE.sessionLogDeleteAll}`, { key: data }, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}
export function sessionLogListData(userId, token) {
    return axios.get(`${APP_SETTINGS.API_PATH.ADMINPROFILE.sessionLogList}?userId=${userId}`, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}
export function isExist(data, token) {
    return axios.post(`${APP_SETTINGS.API_PATH.ADMINPROFILE.isExist}`, data, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
}