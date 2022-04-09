import { ADMIN_LOGIN } from "../actions/utilities";
const INITIAL_STATE = {
  adminloginLoading: false,
  adminloginSuccess: false,
  adminloginFailure: false,
  adminloginError: null,
  adminlogin: [],
};

export const adminLoginReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADMIN_LOGIN.ADMIN_LOGIN_REQUEST:
      return {
        ...state,
        adminloginLoading: true,
        adminloginSuccess: false,
        adminloginFailure: false,
        adminloginError: null,
        adminlogin: [],
      };
    case ADMIN_LOGIN.ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        adminloginLoading: false,
        adminloginSuccess: true,
        adminloginFailure: false,
        adminloginError: null,
        adminlogin: action.payload,
      };
    case ADMIN_LOGIN.ADMIN_LOGIN_FAILURE:
      return {
        ...state,
        adminloginLoading: false,
        adminloginSuccess: false,
        adminloginFailure: true,
        adminloginError: action.payload,
      };

    default:
      return state;
  }
};
