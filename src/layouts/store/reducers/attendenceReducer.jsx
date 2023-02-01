import { EMP_ATTENDENCE_IN, EMP_ATTENDENCE_OUT } from "../constants/actionsType";

const initialState = {
    inTime : {},
    outTime: {}
}

export const Employee_Attendence_Record = (state = initialState, action) => {
    console.log('attendence hi');
    switch (action.type) {
        case EMP_ATTENDENCE_IN: {
            let data = action.payload
            return{
                ...state,
                inTime: data
            }
        }
        case EMP_ATTENDENCE_OUT: {
            let data = action.payload
            return {
                ...state,
                outTime: data
            }
        }
        default:
            return state
    }
} 