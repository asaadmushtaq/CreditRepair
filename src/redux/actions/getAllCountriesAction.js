import { getAllCountryData } from '../api';
import { request, success, failure, CLIENT_FILTERED_LIST } from './utilities';

export function GetAllCountryData() {
    return dispatch => {
        dispatch(request(CLIENT_FILTERED_LIST.GET_ALL_COUNTRIES_REQUEST));
        getAllCountryData().then(
            response => {
                if (response.data.succeeded === true) {
                    dispatch(success(CLIENT_FILTERED_LIST.GET_ALL_COUNTRIES_SUCCESS, response.data.data))
                }
                else{
                    dispatch(failure(CLIENT_FILTERED_LIST.GET_ALL_COUNTRIES_FAILURE, response.data.message))
                }
            },
            error => {
                dispatch(failure(CLIENT_FILTERED_LIST.GET_ALL_COUNTRIES_FAILURE, (error && error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message)))
            }
        )
    }
}