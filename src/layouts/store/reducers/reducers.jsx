import {EMP_LOGIN, EMP_ATTENDENCE} from '../constants/actionsType';

const initialState = {
    user: {},
}


export const Authentication = (state = initialState, action)=>{
    console.log('reducer hi');
    switch (action.type) {
        case EMP_LOGIN: {
            let data = action.payload
            return {
                ...state,
                user: data
            }
        }
    
        default:
            state;
    }
}