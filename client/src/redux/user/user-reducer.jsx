import userActionTypes from './user.types'

//in case state in userReducer in initiating we need an initial state
const INITIAL_STATE={
    currentUser:null,
    error: null
}

const userReducer =(state=INITIAL_STATE,action)=>{

    switch(action.type){
        //pretty much what the type says :D
        case userActionTypes.SIGN_UP_SUCCESS:
        case userActionTypes.SIGN_IN_SUCCESS:
            return{
                ...state,
                currentUser:action.payload,
                error: null
            };
        case userActionTypes.SIGN_OUT_SUCCESS:
            return{
                ...state,
                currentUser: null,
                error: null
            }
        case userActionTypes.SIGN_IN_FAILURE:
        case userActionTypes.SIGN_UP_FAILURE:
        case userActionTypes.SIGN_OUT_FAILURE:
            return{
                ...state,
                error: action.payload
            };
        
        
        default:
            return state
    }
}


export default userReducer;
