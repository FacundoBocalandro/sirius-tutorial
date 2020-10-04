import React from 'react';
import {applyMiddleware, combineReducers, createStore} from "redux";
import registerReducer from "./reducers/RegisterReducer";
import registerMiddleware from "./middleware/RegisterMiddleware";
import {composeWithDevTools} from 'redux-devtools-extension';


export default function configureStore() {
    return createStore(
        combineReducers({
           registerReducer: registerReducer,
        }), composeWithDevTools(
            applyMiddleware(registerMiddleware)
        ));
}
