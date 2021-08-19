
//middleware is something that sits between action and reducer. it gets the indormation before reducer
import { createStore,applyMiddleware } from "redux";
import logger from 'redux-logger';

import rootReducer from "./root.reducer";

const middlewares=[logger];
//this function gets rootReducer and and adds middleware to it and creates our redux store.store is redux's big state object
const store=createStore(rootReducer,applyMiddleware(...middlewares));


export default store;