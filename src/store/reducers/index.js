import { combineReducers } from "redux";
import UserReducer from "./UserReducer";

const reducers = combineReducers({
  user: UserReducer,
  //other reducers come here...
});

export default reducers;