import { APP_SETTINGS } from "../../config";
import { getCountryTimeZone } from "../../assets";
import axios from "axios";


export function adminLogin(data) {
    data = { ...data, "timeZone": getCountryTimeZone() }
    return axios.post(`${APP_SETTINGS.API_PATH.ADMINLOGIN.adminLogin}`, data, {
        // headers: {
        //     Authorization: 'Bearer ' + auth.alfa_care_user.token
        // }
    })
}