import { combineReducers } from "redux";
import seriesReducer from "./seriesReducer";

const rootReducer = combineReducers({
  seriesReducer,
});

export default rootReducer;
