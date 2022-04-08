import { REGISTRATION ,OPT} from "../actions/utilities";
const INITIAL_STATE = {
    registerLoading: false,
    registerSuccess: false,
    registerFailure: false,
    registerError: null,
    register: [],
//OPT VERIFY
    optLoading: false,
    optSuccess: false,
    optFailure: false,
    optError: null,
    opt: [],
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
            //opt

            case REGISTRATION.OPT_REQUEST:
                return {
                    ...state,
                    optLoading: true,
                    optSuccess: false,
                    optFailure: false,
                    optError: null,
                    opt: [],
                };
            case REGISTRATION.OPT_SUCCESS:
                return {
                    ...state,
                    optLoading: false,
                    optSuccess: true,
                    optFailure: false,
                    optError: null,
                    opt: action.payload,
                };
            case OPT.OPT_FAILURE:
                return {
                    ...state,
                    optLoading: false,
                    optSuccess: false,
                    optFailure: true,
                    optError: action.payload,
                };
        default:
            return state;
    }
};