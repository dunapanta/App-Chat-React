import { combineReducers, createStore, applyMiddleware } from "redux";

import userReducer from "./reducers/user-reducer";

import logger from "redux-logger";
import reduxThunk from "redux-thunk";

const reducers = combineReducers({
    user: userReducer
});

const store = createStore(reducers, applyMiddleware(reduxThunk, logger));

export default store;
