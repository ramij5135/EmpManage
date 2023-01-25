import {EMP_LOGIN} from '../constants/actionsType';

const initialState = {
    user: []
}


export const Authentication = (state = [], action)=>{
    console.log('reducer hi');
    // console.log('reducer state======>', state);
    switch (action.type) {
        case EMP_LOGIN:
            return [
                ...state,
                action.payload
            ]
    
        default:
            state;
    }
}