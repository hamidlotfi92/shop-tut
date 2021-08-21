import {userActionTypes} from './user.types'

//in case state in userReducer in initiating we need an initial state
const INITIAL_STATE={
    currentUser:null
}

const userReducer =(state=INITIAL_STATE,action)=>{

    switch(action.type){
        //pretty much what the type says :D
        case userActionTypes.SET_CURRENT_USER:
            return{
                ...state,
                currentUser:action.payload
            }

        default:
            return state
    }
}

export default userReducer;
