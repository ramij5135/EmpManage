import { combineReducers } from "redux";
import {Authentication} from './reducers';
import {Employee_Attendence_Record} from './attendenceReducer';

export const RootReducers = combineReducers({
    auth : Authentication,
    attendence : Employee_Attendence_Record
})