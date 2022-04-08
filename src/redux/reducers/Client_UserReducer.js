import { CLIENT_USER } from "../actions/utilities";
const INITIAL_STATE = {
    clientManageProfileLoading: false,
    clientManageProfileSuccess: false,
    clientManageProfileFailure: false,
    clientManageProfileError: null,
    clientManageProfile: [],

    clientGetProfileLoading: false,
    clientGetProfileSuccess: false,
    clientGetProfileFailure: false,
    clientGetProfileError: null,
    clientGetProfile: [],
};

export const clientUserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CLIENT_USER.CLIENT_MANAGE_PROFILE_REQUEST:
            return {
                ...state,
                clientManageProfileLoading: true,
                clientManageProfileSuccess: false,
                clientManageProfileFailure: false,
                clientManageProfileError: null,
                clientManageProfile: [],
            };
        case CLIENT_USER.CLIENT_MANAGE_PROFILE_SUCCESS:
            return {
                ...state,
                clientManageProfileLoading: false,
                clientManageProfileSuccess: true,
                clientManageProfileFailure: false,
                clientManageProfileError: null,
                clientManageProfile: action.payload,
            };
        case CLIENT_USER.CLIENT_MANAGE_PROFILE_FAILURE:
            return {
                ...state,
                clientManageProfileLoading: false,
                clientManageProfileSuccess: false,
                clientManageProfileFailure: true,
                clientManageProfileError: action.payload,
            };

        case CLIENT_USER.CLIENT_GET_PROFILE_REQUEST:
            return {
                ...state,
                clientGetProfileLoading: true,
                clientGetProfileSuccess: false,
                clientGetProfileFailure: false,
                clientGetProfileError: null,
                clientGetProfile: [],
            };
        case CLIENT_USER.CLIENT_GET_PROFILE_SUCCESS:
            return {
                ...state,
                clientGetProfileLoading: false,
                clientGetProfileSuccess: true,
                clientGetProfileFailure: false,
                clientGetProfileError: null,
                clientGetProfile: action.payload,
            };
        case CLIENT_USER.CLIENT_GET_PROFILE_FAILURE:
            return {
                ...state,
                clientGetProfileLoading: false,
                clientGetProfileSuccess: false,
                clientGetProfileFailure: true,
                clientGetProfileError: action.payload,
            };

        default:
            return state;
    }
};