import {EMP_LOGIN} from '../constants/actionsType';

const initialState = {
    user: []
}


export const Authentication = (state = initialState, action)=>{
    console.log('action======>',action);
    switch (action.type) {
        case EMP_LOGIN:
            return{
                ...state
            }
    
        default:
            state;
    }
}