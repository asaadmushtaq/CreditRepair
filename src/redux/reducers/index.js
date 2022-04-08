import { combineReducers } from "redux";
import { adminLoginReducers } from "./loginReducers";
import { getAllCountriesReducer } from "./getAllCountriesReducer";
import { clientUserReducer } from "./Client_UserReducer"
import { submitRegister } from "./registerReducer"
import { addAdminReducer } from "./adminReducer";
import { adminProfileReducer } from "./adminProfileReducer";
export const rootReducer = combineReducers({
    adminlogin: adminLoginReducers,
    addaAdmin: addAdminReducer,
    allCountriesReducer: getAllCountriesReducer,
    adminProfile: adminProfileReducer,
    clientReducer: clientUserReducer,
    register: submitRegister,
});
