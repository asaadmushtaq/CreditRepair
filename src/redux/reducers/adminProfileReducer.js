import { ADMIN_PROFILE } from "../actions/utilities";
const INITIAL_STATE = {
    adminProfileLoading: false,
    adminProfileSuccess: false,
    adminProfileFailure: false,
    adminProfileError: null,
    adminProfile: [],


    updatePasswordLoading: false,
    updatePasswordSuccess: false,
    updatePasswordFailure: false,
    updatePasswordError: null,
    updatePassword: [],

    twofactorLoading: false,
    twofactorSuccess: false,
    twofactorFailure: false,
    twofactorError: null,
    twofactor: [],

    sessionLogSaveLoading: false,
    sessionLogSaveSuccess: false,
    sessionLogSaveFailure: false,
    sessionLogSaveError: null,
    sessionLogSave: [],

    sessionLogSingleDeleteLoading: false,
    sessionLogSingleDeleteSuccess: false,
    sessionLogSingleDeleteFailure: false,
    sessionLogSingleDeleteError: null,
    sessionLogSingleDelete: [],

    sessionLogDeleteAllLoading: false,
    sessionLogDeleteAllSuccess: false,
    sessionLogDeleteAllFailure: false,
    sessionLogDeleteAllError: null,
    sessionLogDeleteAll: [],
};

export const adminProfileReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADMIN_PROFILE.ADMIN_PROFILE_RESET:
            return {
                ...state,
                adminProfileLoading: false,
                adminProfileSuccess: false,
                adminProfileFailure: false,
                adminProfileError: null,
                adminProfile: [],
                updatePasswordLoading: false,
                updatePasswordSuccess: false,
                updatePasswordFailure: false,
                updatePasswordError: null,
                updatePassword: [],
            }
        case ADMIN_PROFILE.ADMIN_PROFILE_REQUEST:
            return {
                ...state,
                adminProfileLoading: true,
                adminProfileSuccess: false,
                adminProfileFailure: false,
                adminProfileError: null,
                adminProfile: [],
            };
        case ADMIN_PROFILE.ADMIN_PROFILE_SUCCESS:
            return {
                ...state,
                adminProfileLoading: false,
                adminProfileSuccess: true,
                adminProfileFailure: false,
                adminProfileError: null,
                adminProfile: action.payload,
            };
        case ADMIN_PROFILE.ADMIN_PROFILE_FAILURE:
            return {
                ...state,
                adminProfileLoading: false,
                adminProfileSuccess: false,
                adminProfileFailure: true,
                adminProfileError: action.payload,
            };

        case ADMIN_PROFILE.CHANGE_PASSWORD_REQUEST:
            return {
                ...state,
                updatePasswordLoading: true,
                updatePasswordSuccess: false,
                updatePasswordFailure: false,
                updatePasswordError: null,
                updatePassword: [],
            };
        case ADMIN_PROFILE.CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                updatePasswordLoading: false,
                updatePasswordSuccess: true,
                updatePasswordFailure: false,
                updatePasswordError: null,
                updatePassword: action.payload,
            };
        case ADMIN_PROFILE.CHANGE_PASSWORD_FAILURE:
            return {
                ...state,
                updatePasswordLoading: false,
                updatePasswordSuccess: false,
                updatePasswordFailure: true,
                updatePasswordError: action.payload,
            };

        case ADMIN_PROFILE.TWO_FACTOR_REQUEST:
            return {
                ...state,
                twofactorLoading: true,
                twofactorSuccess: false,
                twofactorFailure: false,
                twofactorError: null,
                twofactor: [],
            };
        case ADMIN_PROFILE.TWO_FACTOR_SUCCESS:
            return {
                ...state,
                twofactorLoading: false,
                twofactorSuccess: true,
                twofactorFailure: false,
                twofactorError: null,
                twofactor: action.payload,
            };
        case ADMIN_PROFILE.TWO_FACTOR_FAILURE:
            return {
                ...state,
                twofactorLoading: false,
                twofactorSuccess: false,
                twofactorFailure: true,
                twofactorError: action.payload,
            };

        case ADMIN_PROFILE.SESSION_LOG_SAVE_REQUEST:
            return {
                ...state,
                sessionLogSaveLoading: true,
                sessionLogSaveSuccess: false,
                sessionLogSaveFailure: false,
                sessionLogSaveError: null,
                sessionLogSave: [],
            };
        case ADMIN_PROFILE.SESSION_LOG_SAVE_SUCCESS:
            return {
                ...state,
                sessionLogSaveLoading: false,
                sessionLogSaveSuccess: true,
                sessionLogSaveFailure: false,
                sessionLogSaveError: null,
                sessionLogSave: action.payload,
            };
        case ADMIN_PROFILE.SESSION_LOG_SAVE_FAILURE:
            return {
                ...state,
                sessionLogSaveLoading: false,
                sessionLogSaveSuccess: false,
                sessionLogSaveFailure: true,
                sessionLogSaveError: action.payload,
            };

        case ADMIN_PROFILE.SESSION_LOG_SINGLE_DELETE_REQUEST:
            return {
                ...state,
                sessionLogSingleDeleteLoading: true,
                sessionLogSingleDeleteSuccess: false,
                sessionLogSingleDeleteFailure: false,
                sessionLogSingleDeleteError: null,
                sessionLogSingleDelete: [],
            };
        case ADMIN_PROFILE.SESSION_LOG_SINGLE_DELETE_SUCCESS:
            let allList = state.sessionLogList;
            for (let i = 0; i < allList.length; i++) {
                if (allList[i].sessionLogId === action.payload) {
                    allList.splice(i, 1);
                }
            }
            return {
                ...state,
                sessionLogSingleDeleteLoading: false,
                sessionLogSingleDeleteSuccess: true,
                sessionLogSingleDeleteFailure: false,
                sessionLogSingleDeleteError: null,
                sessionLogSingleDelete: action.payload,
                sessionLogList: allList
            };
        case ADMIN_PROFILE.SESSION_LOG_SINGLE_DELETE_FAILURE:
            return {
                ...state,
                sessionLogSingleDeleteLoading: false,
                sessionLogSingleDeleteSuccess: false,
                sessionLogSingleDeleteFailure: true,
                sessionLogSingleDeleteError: action.payload,
            };

        case ADMIN_PROFILE.SESSION_LOG_DELETE_ALL_REQUEST:
            return {
                ...state,
                sessionLogDeleteAllLoading: true,
                sessionLogDeleteAllSuccess: false,
                sessionLogDeleteAllFailure: false,
                sessionLogDeleteAllError: null,
                sessionLogDeleteAll: [],
            };
        case ADMIN_PROFILE.SESSION_LOG_DELETE_ALL_SUCCESS:
            return {
                ...state,
                sessionLogDeleteAllLoading: false,
                sessionLogDeleteAllSuccess: true,
                sessionLogDeleteAllFailure: false,
                sessionLogDeleteAllError: null,
                sessionLogDeleteAll: action.payload,
                sessionLogList: [],
            };
        case ADMIN_PROFILE.SESSION_LOG_DELETE_ALL_FAILURE:
            return {
                ...state,
                sessionLogDeleteAllLoading: false,
                sessionLogDeleteAllSuccess: false,
                sessionLogDeleteAllFailure: true,
                sessionLogDeleteAllError: action.payload,
            };

        case ADMIN_PROFILE.SESSION_LOG_LIST_REQUEST:
            return {
                ...state,
                sessionLogDeleteAllLoading: false,
                sessionLogDeleteAllSuccess: false,
                sessionLogDeleteAllFailure: false,
                sessionLogDeleteAllError: null,
                sessionLogListLoading: true,
                sessionLogListSuccess: false,
                sessionLogListFailure: false,
                sessionLogListError: null,
                sessionLogList: [],
            };
        case ADMIN_PROFILE.SESSION_LOG_LIST_SUCCESS:
            return {
                ...state,
                sessionLogListLoading: false,
                sessionLogListSuccess: true,
                sessionLogListFailure: false,
                sessionLogListError: null,
                sessionLogList: action.payload,
            };
        case ADMIN_PROFILE.SESSION_LOG_LIST_FAILURE:
            return {
                ...state,
                sessionLogListLoading: false,
                sessionLogListSuccess: false,
                sessionLogListFailure: true,
                sessionLogListError: action.payload,
            };

        default:
            return state;
    }
};