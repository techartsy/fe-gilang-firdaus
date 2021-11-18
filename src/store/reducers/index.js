import { combineReducers } from "redux";
import hellowWorld from "./HelloWorld";

const rootReducer = combineReducers({
  hellowWorld: hellowWorld,
});

export default rootReducer;
