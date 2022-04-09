function request(actionType) {
  return {
    type: actionType,
  };
}

function success(actionType, response) {
  return {
    type: actionType,
    payload: response,
  };
}

function failure(actionType, error) {
  return {
    type: actionType,
    payload: error,
  };
}
const ADMIN_LOGIN = {
  ADMIN_LOGIN_REQUEST: "ADMIN_LOGIN_REQUEST",
  ADMIN_LOGIN_SUCCESS: "ADMIN_LOGIN_SUCCESS",
  ADMIN_LOGIN_FAILURE: "ADMIN_LOGIN_FAILURE",
};

//Esign

const REGISTRATION = {
  REGISTER_REQUEST: "REGISTER_REQUEST",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAILURE: "REGISTER_FAILURE",
}

const OPT = {
  OPT_REQUEST: "OPT_REQUEST",
  OPT_SUCCESS: "OPT_SUCCESS",
  OPT_FAILURE: "OPT_FAILURE",
}

const CLIENT_GET_PROFILE = {
  CLIENT_GET_PROFILE_REQUEST: "CLIENT_GET_PROFILE_REQUEST",
  CLIENT_GET_PROFILE_SUCCESS: "CLIENT_GET_PROFILE_SUCCESS",
  CLIENT_GET_PROFILE_FAILURE: "CLIENT_GET_PROFILE_FAILURE",
}
const CLIENT_USER = {
  CLIENT_MANAGE_PROFILE_REQUEST: "CLIENT_MANAGE_PROFILE_REQUEST",
  CLIENT_MANAGE_PROFILE_SUCCESS: "CLIENT_MANAGE_PROFILE_SUCCESS",
  CLIENT_MANAGE_PROFILE_FAILURE: "CLIENT_MANAGE_PROFILE_FAILURE",

  CLIENT_GET_PROFILE_REQUEST: "CLIENT_GET_PROFILE_REQUEST",
  CLIENT_GET_PROFILE_SUCCESS: "CLIENT_GET_PROFILE_SUCCESS",
  CLIENT_GET_PROFILE_FAILURE: "CLIENT_GET_PROFILE_FAILURE",
}
export {
  request,
  success,
  failure,
  ADMIN_LOGIN,
  REGISTRATION,
  OPT,
  CLIENT_GET_PROFILE,
  CLIENT_USER
};
