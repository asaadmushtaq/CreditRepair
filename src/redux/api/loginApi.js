import { APP_SETTINGS } from "../../config";
import axios from "axios";


export function adminLogin(data) {
    return axios.post(`${APP_SETTINGS.API_PATH.ADMINLOGIN.adminLogin}`, data, {
        // headers: {
        //     Authorization: 'Bearer ' + auth.alfa_care_user.token
        // }
    })
}
export function twoFaCode(email) {
    return axios.get(`${APP_SETTINGS.API_PATH.ADMINLOGIN.twoFaCode}?email=${email}`)
}

