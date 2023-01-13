import {EMP_LOGIN} from '../common/types';

const initialState = {
    user: []
}


export const Authentication = (state = initialState, action)=>{
    switch (action.type) {
        case EMP_LOGIN:
            return{
                ...state
            }
    
        default:
            state;
    }
}