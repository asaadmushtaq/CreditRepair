import { CLIENT_FILTERED_LIST } from "../actions/utilities";
const INITIAL_STATE = {
    getAllCountriesLoading: false,
    getAllCountriesSuccess: false,
    getAllCountriesFailure: false,
    getAllCountriesError: null,
    getAllCountries: [],
};

export const getAllCountriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CLIENT_FILTERED_LIST.GET_ALL_COUNTRIES_REQUEST:
            return {
                ...state,
                getAllCountriesLoading: true,
                getAllCountriesSuccess: false,
                getAllCountriesFailure: false,
                getAllCountriesError: null,
                getAllCountries: [],
            };
        case CLIENT_FILTERED_LIST.GET_ALL_COUNTRIES_SUCCESS:
            return {
                ...state,
                getAllCountriesLoading: false,
                getAllCountriesSuccess: true,
                getAllCountriesFailure: false,
                getAllCountriesError: null,
                getAllCountries: action.payload,
            };
        case CLIENT_FILTERED_LIST.GET_ALL_COUNTRIES_FAILURE:
            return {
                ...state,
                getAllCountriesLoading: false,
                getAllCountriesSuccess: false,
                getAllCountriesFailure: true,
                getAllCountriesError: action.payload,
            };

        default:
            return state;
    }
};