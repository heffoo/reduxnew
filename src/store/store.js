import appReducer from "./reducer";
import { createStore, combineReducers } from "redux";

export default createStore(combineReducers({ 
    app: appReducer,
    
}));
