const ERROR = {
  SYSTEM_ERROR: "System error. Please try again later!",
};
const PATH = {
  NOPAGE: "*",
  HOMEPAGE: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  ADMINDASHBOARD: "/admin-dashboard",
  ADMINCLIENTS: "/admin-clients",
  ADMINLETTERLIBRARY: "/admin-letterLibrary",
};

const baseUrl = "https://randoxapi.xevensolutions.com/api/";
const APP_SETTINGS = {
  API_PATH: {
    LOGIN: {
      login: baseUrl + "login/post",
    },
    ADMINLOGIN: {
      adminLogin: baseUrl + "adminLogin/adminLogin",
      twoFaCode: baseUrl + "adminLogin/sendTwoFACode",
    },
    REGISTERATION: {
      register: baseUrl + "registration/post",
    },
    CLIENT_GET_FILTERED_LIST: {
      getFilteredList: baseUrl + "client/getFilteredList",
      getSingleOrList: baseUrl + "client/getSingleOrList?userId=",
      getAllCountries: baseUrl + "country/getAll",
      getApprovedCertificates: baseUrl + "report/getList",
      clientResetPassword: baseUrl + "client/resetPassword",
      getApprovedCertificatesSingle: baseUrl + "report/getSingle",
      sendOriginal: baseUrl + "report/sendOriginal",
      sendUpdated: baseUrl + "report/sendUpdated",
    },
    ADMINPROFILE: {
      adminProfile: baseUrl + "admin/updateNameEmail",
      updatePassword: baseUrl + "admin/updatePassword",
      twofactor: baseUrl + "admin/changeTwoFAStatus",
      sessionLogSave: baseUrl + "sessionLog/save",
      sessionLogSingleDelete: baseUrl + "sessionLog/deleteSingle",
      sessionLogDeleteAll: baseUrl + "sessionLog/deleteAll",
      sessionLogList: baseUrl + "sessionLog/list",
      isExist: baseUrl + "sessionLog/isExist",
    },
    ADDADMIN: {
      addadmin: baseUrl + "admin/add",
      deleteadmin: baseUrl + "admin/delete",
      adminGetAllOrList: baseUrl + "admin/getSingleOrList?userId=",
      changeActiveStatus: baseUrl + "admin/changeActiveBlockStatus",
      filterTestReport: baseUrl + "testReport/filterTestReport",
      testReportCount: baseUrl + "testReport/getTestReportCount",
      changeAdminLevel: baseUrl + "admin/changeAdminLevel",
      changeActiveBlockStatus: baseUrl + "testReport/changeActiveBlockStatus",
      submitForReview: baseUrl + "testReport/submitForReview",
      takeDecision: baseUrl + "testReport/takeDecision",
      reActivateDevice: baseUrl + "testReport/reActivateDevice",
    },
  },
};
export { ERROR, PATH, APP_SETTINGS };
