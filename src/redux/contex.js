import {reducer} from "./reducers.js";
import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "./saga";

const sagaMiddleware = createSagaMiddleware()


export const store = createStore(reducer,applyMiddleware(sagaMiddleware) )

sagaMiddleware.run(rootWatcher)
