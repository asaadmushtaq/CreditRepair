const ERROR = {
  SYSTEM_ERROR: "System error. Please try again later!",
};
const ROLE = {
  CLIENT: "CLIENT",
  BUSINESS: "BUSINESS"
  // PHARMACY: "PharmacyAdmin",
  // PHARMACYUSER: "Pharmacy",
  // Admin: "Admin"
};
const PATH = {
  NOPAGE: "*",
  HOMEPAGE: "/",
  LOGIN: "/login",
  SIGNUP: "/signup/:roleId",
  ADMINDASHBOARD: "/admin-dashboard",
  ADMIN_SETTINGS: "/admin-settings",
  ADMINCLIENTS: "/admin-clients",
  CREATENEWCLIENT: "/clients/new",
  ADMINLETTERLIBRARY: "/admin-letterLibrary",
  ABOUTUS: "/about-us",
  CONTACTUS: "/contact-us",
  COMPANYPROFILES: "/company-profiles",
  HOWITWORKS: "/how-it-works",
  VIDEOGALLERY: "/video-gallery",
  CLIENTTESTIMONIALS: "/client-testimonials",
  TERMSANDCONDITIONS: "/terms-and-conditions",
  SERVICES: "/services",
  CREDIT: "/credit",
  BLOGHOMEPAGE: "/blog-homepage",
  PRICINGPLAN: "/pricing-plan",
};

// const baseUrl = "https://randoxapi.xevensolutions.com/api/";
const baseUrl="https://localhost:44388/api/";
const APP_SETTINGS = {
  API_PATH: {
    LOGIN: {
      login: baseUrl + "login/post",
    },
    ADMINLOGIN: {
      adminLogin: baseUrl + "Login/login",
      twoFaCode: baseUrl + "adminLogin/sendTwoFACode",
    },
    REGISTERATION: {
      register: baseUrl + "ClientUser/Signup",
      optverify:baseUrl+"User/verifyCode"
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
const allMonthList =
  [
    {
      id: 1,
      text: "January",
      value: "January",
    },
    {
      id: 2,
      text: "February",
      value: "February",
    },
    {
      id: 3,
      text: "March",
      value: "March",
    },
    {
      id: 4,
      text: "April",
      value: "April",
    },
    {
      id: 5,
      text: "May",
      value: "May",
    },
    {
      id: 6,
      text: "June",
      value: "June",
    },
    {
      id: 7,
      text: "July",
      value: "July",
    },
    {
      id: 8,
      text: "August",
      value: "August",
    },
    {
      id: 9,
      text: "September",
      value: "September",
    },
    {
      id: 10,
      text: "October",
      value: "October",
    },
    {
      id: 11,
      text: "November",
      value: "November",
    },
    {
      id: 12,
      text: "December",
      value: "December",
    }
  ]
export { ERROR, PATH, APP_SETTINGS, allMonthList,ROLE };
