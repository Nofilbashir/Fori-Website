import {userName,userAdd} from "./userInfo";
import {combineReducers} from "redux";
const rootReducer=combineReducers({
    userName,
    userAdd
})
export default rootReducer;