
//middleware is something that sits between action and reducer. it gets the indormation before reducer
import { createStore,applyMiddleware } from "redux";
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
//import thunk from 'redux-thunk'
import rootReducer from "./root.reducer";
import createSagaMiddleware from "@redux-saga/core";

import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares=[ sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}
//this function gets rootReducer and and adds middleware to it and creates our redux store.store is redux's big state object
export const store=createStore(rootReducer,applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga)

export const persistor=persistStore(store);



export default {persistor,store};