import { Profiler } from "react";
import { CLIENT_GET_PROFILE, CLIENT_MANAGE_PROFILE } from "../actions/utilities";
const INITIAL_STATE = {

    getClientProfileLoading: false,
    getClientProfileSuccess: false,
    getClientProfileFailure: false,
    getClientProfileError: null,
    getClientProfile: Profile,


    manageClientProfileLoading: false,
    manageClientProfileSuccess: false,
    manageClientProfileFailure: false,
    manageClientProfileError: null,
    manageClientProfile: ProfileClient
}

export const getFilteredListReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CLIENT_GET_PROFILE.CLIENT_GET_PROFILE_REQUEST:
            return {
                ...state,
                getClientProfileLoading: true,
                getClientProfileSuccess: false,
                getClientProfileFailure: false,
                getClientProfileError: null,
                getClientProfile: []
            };
        case CLIENT_GET_PROFILE.CLIENT_GET_PROFILE_SUCCESS:
            return {
                ...state,
                getFilteredListLoading: false,
                getFilteredListSuccess: true,
                getFilteredListFailure: false,
                getFilteredListError: null,
                getFilteredList: action.payload,
                getFilteredListReset: false,
            };
        case CLIENT_GET_PROFILE.CLIENT_GET_PROFILE_FAILURE:
            return {
                ...state,
                getFilteredListLoading: false,
                getFilteredListSuccess: false,
                getFilteredListFailure: true,
                getFilteredListError: action.payload,
                getFilteredListReset: false,
            };
            default:
                return state;
            }
        };