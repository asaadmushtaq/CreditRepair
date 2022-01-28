import { ADMIN_LOGIN } from "../actions/utilities";
const INITIAL_STATE = {
  adminloginLoading: false,
  adminloginSuccess: false,
  adminloginFailure: false,
  adminloginError: null,
  adminlogin: [],

  twoFaCodeLoading: false,
  twoFaCodeSuccess: false,
  twoFaCodeFailure: false,
  twoFaCodeError: null,
  twoFaCode: [],
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
    case ADMIN_LOGIN.TWO_FA_CODE_REQUEST:
      return {
        ...state,
        twoFaCodeLoading: true,
        twoFaCodeSuccess: false,
        twoFaCodeFailure: false,
        twoFaCodeError: null,
        twoFaCode: [],
      };
    case ADMIN_LOGIN.TWO_FA_CODE_SUCCESS:
      let data = state.adminlogin;
      data.twoFACode = action.payload
  
      return {
        ...state,
        twoFaCodeLoading: false,
        twoFaCodeSuccess: true,
        twoFaCodeFailure: false,
        twoFaCodeError: null,
        twoFaCode: action.payload,
        adminlogin: data
      };
    case ADMIN_LOGIN.TWO_FA_CODE_FAILURE:
      return {
        ...state,
        twoFaCodeLoading: false,
        twoFaCodeSuccess: false,
        twoFaCodeFailure: true,
        twoFaCodeError: action.payload,
      };
    default:
      return state;
  }
};
