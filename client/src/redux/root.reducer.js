// the code that combines all the states together



// s reducer is a function that gets 2 properpy
// a state object that represents last state or initial state that we are trying to store
// action that is an object that has a type(a string value that tells what specific action it is)  and a payload that can be anything

import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";
import  cartReducer  from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import { persistReducer } from "redux-persist";
import shopReducer from "./shop/shop.reducer";

import storage from "redux-persist/lib/storage";

// config object for persistance and storage
const persistConfig={
    // at what point do we want to start storing everithing
    key:'root',
    // points to the object from redux-persist
    storage,
    // list of reducer we want to store as array,here user is handled by firebase auth persistance session
    whitelist:['cart']
}

//key is partial reducer and value is the actual reducer function we wrote . this function just adds different reducers to a single object for redux
const rootReducer=combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop:shopReducer
})


// this will return back a modified version of rootReducer with persist config and persist capablity
export default persistReducer(persistConfig,rootReducer);