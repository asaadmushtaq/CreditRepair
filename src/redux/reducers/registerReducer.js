import { REGISTRATION } from "../actions/utilities";
const INITIAL_STATE = {
    registerLoading: false,
    registerSuccess: false,
    registerFailure: false,
    registerError: null,
    register: [],
}

export const submitRegister = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTRATION.REGISTER_REQUEST:
            return {
                ...state,
                registerLoading: true,
                registerSuccess: false,
                registerFailure: false,
                registerError: null,
                register: [],
            };
        case REGISTRATION.REGISTER_SUCCESS:
            return {
                ...state,
                registerLoading: false,
                registerSuccess: true,
                registerFailure: false,
                registerError: null,
                register: action.payload,
            };
        case REGISTRATION.REGISTER_FAILURE:
            return {
                ...state,
                registerLoading: false,
                registerSuccess: false,
                registerFailure: true,
                registerError: action.payload,
            };
        default:
            return state;
    }
};