import { APP_SETTINGS } from "../../config";
import axios from "axios";


export function clientManageProfile(data, auth) {
    return axios.post(`${APP_SETTINGS.API_PATH.CLIENT_USER.clientManageProfile}`, data, {
        headers: {
            Authorization: 'Bearer ' + auth.credit_repair_user.token
        }
    })
}
export function clientGetProfile(data) {
    return axios.post(`${APP_SETTINGS.API_PATH.CLIENT_USER.clientGetProfile}?UserId=${data}`, { UserId: data })
}