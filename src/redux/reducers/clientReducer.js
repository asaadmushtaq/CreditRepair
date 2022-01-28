import { getDateInFormat } from "../../assets";
import { CLIENT_FILTERED_LIST, APPROVED_CERTIFICATES } from "../actions/utilities";
const INITIAL_STATE = {

    getFilteredListLoading: false,
    getFilteredListSuccess: false,
    getFilteredListFailure: false,
    getFilteredListError: null,
    getFilteredList: [],
    getFilteredListReset: false,


    getSingleOrListLoading: false,
    getSingleOrListSuccess: false,
    getSingleOrListFailure: false,
    getSingleOrListError: null,
    getSingleOrList: [],


    getAllCountriesLoading: false,
    getAllCountriesSuccess: false,
    getAllCountriesFailure: false,
    getAllCountriesError: null,
    getAllCountries: [],

    getApprovedCertificatesLoading: false,
    getApprovedCertificatesSuccess: false,
    getApprovedCertificatesFailure: false,
    getApprovedCertificatesError: null,
    getApprovedCertificates: [],

    clientResetPasswordLoading: false,
    clientResetPasswordSuccess: false,
    clientResetPasswordFailure: false,
    clientResetPasswordError: null,
    clientResetPassword: [],

    getApprovedCertificatesSingleLoading: false,
    getApprovedCertificatesSingleSuccess: false,
    getApprovedCertificatesSingleFailure: false,
    getApprovedCertificatesSingleError: null,
    getApprovedCertificatesSingle: [],

    sendOriginalLoading: false,
    sendOriginalSuccess: false,
    sendOriginalFailure: false,
    sendOriginalError: null,
    sendOriginal: [],

    sendUpdatedLoading: false,
    sendUpdatedSuccess: false,
    sendUpdatedFailure: false,
    sendUpdatedError: null,
    sendUpdated: [],
}

export const getFilteredListReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case CLIENT_FILTERED_LIST.CLIENT_FILTERED_LIST_REQUEST:
            return {
                ...state,
                getFilteredListLoading: true,
                getFilteredListSuccess: false,
                getFilteredListFailure: false,
                getFilteredListError: null,
                getFilteredList: [],
                getFilteredListReset: false,
            };
        case CLIENT_FILTERED_LIST.CLIENT_FILTERED_LIST_SUCCESS:
            return {
                ...state,
                getFilteredListLoading: false,
                getFilteredListSuccess: true,
                getFilteredListFailure: false,
                getFilteredListError: null,
                getFilteredList: action.payload,
                getFilteredListReset: false,
            };
        case CLIENT_FILTERED_LIST.CLIENT_FILTERED_LIST_FAILURE:
            return {
                ...state,
                getFilteredListLoading: false,
                getFilteredListSuccess: false,
                getFilteredListFailure: true,
                getFilteredListError: action.payload,
                getFilteredListReset: false,
            };
        case CLIENT_FILTERED_LIST.CLIENT_FILTERED_LIST_RESET:
            return {
                ...state,
                getFilteredListLoading: false,
                getFilteredListSuccess: false,
                getFilteredListFailure: false,
                getFilteredListError: null,
                getFilteredList: [],
            };

        case CLIENT_FILTERED_LIST.GET_CLIENT_SINGLE_OR_LIST_REQUEST:
            return {
                ...state,
                getSingleOrListLoading: true,
                getSingleOrListSuccess: false,
                getSingleOrListFailure: false,
                getSingleOrListError: null,
                getSingleOrList: [],
            };
        case CLIENT_FILTERED_LIST.GET_CLIENT_SINGLE_OR_LIST_SUCCESS:
            return {
                ...state,
                getSingleOrListLoading: false,
                getSingleOrListSuccess: true,
                getSingleOrListFailure: false,
                getSingleOrListError: null,
                getSingleOrList: action.payload,
            };
        case CLIENT_FILTERED_LIST.GET_CLIENT_SINGLE_OR_LIST_FAILURE:
            return {
                ...state,
                getSingleOrListLoading: false,
                getSingleOrListSuccess: false,
                getSingleOrListFailure: true,
                getSingleOrListError: action.payload,
            };

        case CLIENT_FILTERED_LIST.GET_ALL_COUNTRIES_REQUEST:
            return {
                ...state,
                getAllCountriesLoading: true,
                getAllCountriesSuccess: false,
                getAllCountriesFailure: false,
                getAllCountriesError: null,
                getAllCountries: [],
            }
        case CLIENT_FILTERED_LIST.GET_ALL_COUNTRIES_SUCCESS:
            return {
                ...state,
                getAllCountriesLoading: false,
                getAllCountriesSuccess: true,
                getAllCountriesFailure: false,
                getAllCountriesError: null,
                getAllCountries: action.payload,
            }
        case CLIENT_FILTERED_LIST.GET_ALL_COUNTRIES_FAILURE:
            return {
                ...state,
                getAllCountriesLoading: false,
                getAllCountriesSuccess: false,
                getAllCountriesFailure: true,
                getAllCountriesError: action.payload,
            }
        case APPROVED_CERTIFICATES.GET_APPROVED_CERTIFICATES_REQUEST:
            return {
                ...state,
                getApprovedCertificatesLoading: true,
                getApprovedCertificatesSuccess: false,
                getApprovedCertificatesFailure: false,
                getApprovedCertificatesError: null,
                getApprovedCertificates: [],
            };
        case APPROVED_CERTIFICATES.GET_APPROVED_CERTIFICATES_SUCCESS:
            let myList = []
            if (action.payload.type === 505) {
                for (let i = 0; i < action.payload.res.length; i++) {
                    if (action.payload.res[i].testStatusId === 505) {
                        if (action.payload.res[i].isActive === true) {
                            myList.push(action.payload.res[i])
                        }
                    }
                }
            } else if (action.payload.type === 501) {
                for (let i = 0; i < action.payload.res.length; i++) {
                    if (action.payload.res[i].testStatusId === 501) {
                        myList.push(action.payload.res[i])
                    }
                }
            }
            return {
                ...state,
                getApprovedCertificatesLoading: false,
                getApprovedCertificatesSuccess: true,
                getApprovedCertificatesFailure: false,
                getApprovedCertificatesError: null,
                getApprovedCertificates: myList,
            };
        case APPROVED_CERTIFICATES.GET_APPROVED_CERTIFICATES_FAILURE:
            return {
                ...state,
                getApprovedCertificatesLoading: false,
                getApprovedCertificatesSuccess: false,
                getApprovedCertificatesFailure: true,
                getApprovedCertificatesError: action.payload,
            };
        case APPROVED_CERTIFICATES.GET_LIST_EXPORT_CSV_REQUEST:
            return {
                ...state,
                getListExportCSVLoading: true,
                getListExportCSVSuccess: false,
                getListExportCSVFailure: false,
                getListExportCSVError: null,
                getListExportCSV: [],
            };
        case APPROVED_CERTIFICATES.GET_LIST_EXPORT_CSV_SUCCESS:
            const newData = [];
            for (let i = 0; i < action.payload.length; i++) {
                if (getDateInFormat(action.payload[i].createdDate) === getDateInFormat(new Date())) {
                    newData.push(action.payload[i])
                }
            }
            return {
                ...state,
                getListExportCSVLoading: false,
                getListExportCSVSuccess: true,
                getListExportCSVFailure: false,
                getListExportCSVError: null,
                getListExportCSV: newData,
            };
        case APPROVED_CERTIFICATES.GET_LIST_EXPORT_CSV_FAILURE:
            return {
                ...state,
                getListExportCSVLoading: false,
                getListExportCSVSuccess: false,
                getListExportCSVFailure: true,
                getListExportCSVError: action.payload,
            };
        case APPROVED_CERTIFICATES.CLIENT_RESET_PASSWORD_REQUEST:
            return {
                ...state,
                clientResetPasswordLoading: true,
                clientResetPasswordSuccess: false,
                clientResetPasswordFailure: false,
                clientResetPasswordError: null,
                clientResetPassword: [],
            };
        case APPROVED_CERTIFICATES.CLIENT_RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                clientResetPasswordLoading: false,
                clientResetPasswordSuccess: true,
                clientResetPasswordFailure: false,
                clientResetPasswordError: null,
                clientResetPassword: action.payload,
            };
        case APPROVED_CERTIFICATES.CLIENT_RESET_PASSWORD_FAILURE:
            return {
                ...state,
                clientResetPasswordLoading: false,
                clientResetPasswordSuccess: false,
                clientResetPasswordFailure: true,
                clientResetPasswordError: action.payload,
            };

        case APPROVED_CERTIFICATES.GET_APPROVED_CERTIFICATES_SINGLE_REQUEST:
            return {
                ...state,
                getApprovedCertificatesSingleLoading: true,
                getApprovedCertificatesSingleSuccess: false,
                getApprovedCertificatesSingleFailure: false,
                getApprovedCertificatesSingleError: null,
            };
        case APPROVED_CERTIFICATES.GET_APPROVED_CERTIFICATES_SINGLE_SUCCESS:
            return {
                ...state,
                getApprovedCertificatesSingleLoading: false,
                getApprovedCertificatesSingleSuccess: true,
                getApprovedCertificatesSingleFailure: false,
                getApprovedCertificatesSingleError: null,
                getApprovedCertificatesSingle: action.payload,
            };
        case APPROVED_CERTIFICATES.GET_APPROVED_CERTIFICATES_SINGLE_FAILURE:
            return {
                ...state,
                getApprovedCertificatesSingleLoading: false,
                getApprovedCertificatesSingleSuccess: false,
                getApprovedCertificatesSingleFailure: true,
                getApprovedCertificatesSingleError: action.payload,
            };

        case APPROVED_CERTIFICATES.SEND_ORIGINAL_REQUEST:
            return {
                ...state,
                sendOriginalLoading: true,
                sendOriginalSuccess: false,
                sendOriginalFailure: false,
                sendOriginalError: null,
                sendOriginal: [],
            };
        case APPROVED_CERTIFICATES.SEND_ORIGINAL_SUCCESS:
            return {
                ...state,
                sendOriginalLoading: false,
                sendOriginalSuccess: true,
                sendOriginalFailure: false,
                sendOriginalError: null,
                sendOriginal: action.payload,
            };
        case APPROVED_CERTIFICATES.SEND_ORIGINAL_FAILURE:
            return {
                ...state,
                sendOriginalLoading: false,
                sendOriginalSuccess: false,
                sendOriginalFailure: true,
                sendOriginalError: action.payload,
            };

        case APPROVED_CERTIFICATES.SEND_UPDATE_REQUEST:
            return {
                ...state,
                sendUpdatedLoading: true,
                sendUpdatedSuccess: false,
                sendUpdatedFailure: false,
                sendUpdatedError: null,
                sendUpdated: [],
            };
        case APPROVED_CERTIFICATES.SEND_UPDATE_SUCCESS:
            return {
                ...state,
                sendUpdatedLoading: false,
                sendUpdatedSuccess: true,
                sendUpdatedFailure: false,
                sendUpdatedError: null,
                sendUpdated: action.payload,
            };
        case APPROVED_CERTIFICATES.SEND_UPDATE_FAILURE:
            return {
                ...state,
                sendUpdatedLoading: false,
                sendUpdatedSuccess: false,
                sendUpdatedFailure: true,
                sendUpdatedError: action.payload,
            };

        default:
            return state;
    }
};