import { APP_SETTINGS } from "../../config";
import axios from "axios";

export function getAllCountryData() {
    return axios.get(APP_SETTINGS.API_PATH.CLIENT_GET_FILTERED_LIST.getAllCountries) 
}