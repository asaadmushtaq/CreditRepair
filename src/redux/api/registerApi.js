import { APP_SETTINGS } from "../../config";
import axios from "axios";


export function register(data) {
    return axios.post(`${APP_SETTINGS.API_PATH.REGISTERATION.register}`, data)
}
export function OptVerify(data) {
    return axios.post(`${APP_SETTINGS.API_PATH.REGISTERATION.optverify}`, data)
}
