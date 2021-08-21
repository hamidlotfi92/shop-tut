// the code that combines all the states together



// s reducer is a function that gets 2 properpy
// a state object that represents last state or initial state that we are trying to store
// action that is an object that has a type(a string value that tells what specific action it is)  and a payload that can be anything

import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";
import  cartReducer  from "./cart/cart.reducer";

//key is partial reducer and value is the actual reducer function we wrote . this function just adds different reducers to a single object for redux
export default combineReducers({
    user:userReducer,
    cart:cartReducer
}) 