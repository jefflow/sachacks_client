import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Reducer } from "./reducers";

const store = createStore(
    combineReducers({
        app: Reducer
    }),
    applyMiddleware(thunk) // ajax handling
);

export default store;
