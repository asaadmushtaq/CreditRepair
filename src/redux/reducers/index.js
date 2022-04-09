import { combineReducers } from "redux";
import { adminLoginReducers } from "./loginReducers";
import { clientUserReducer } from "./Client_UserReducer"
import { submitRegister } from "./registerReducer"
export const rootReducer = combineReducers({
    adminlogin: adminLoginReducers,
    clientReducer: clientUserReducer,
    register: submitRegister,
});
