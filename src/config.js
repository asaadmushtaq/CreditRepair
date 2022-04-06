const ERROR = {
  SYSTEM_ERROR: "System error. Please try again later!",
};
const PATH = {
  NOPAGE: "*",
  HOMEPAGE: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
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

const baseUrl = "https://randoxapi.xevensolutions.com/api/";
const APP_SETTINGS = {
  API_PATH: {
    LOGIN: {
      login: baseUrl + "login/post",
    },
  },
};
const allMonthList = [
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
export { ERROR, PATH, APP_SETTINGS, allMonthList };
