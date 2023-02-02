import { EMP_ATTENDENCE_LIST, EMP_ATTENDENCE_DATA } from "../constants/actionsType";

const initialState = {
    atnList : {},
    atnData: {}
}

export const Employee_Attendence_Record = (state = initialState, action) => {
    console.log('attendence hi');
    switch (action.type) {
        case EMP_ATTENDENCE_LIST: {
            let data = action.payload
            return{
                ...state,
                atnList: data
            }
        }
        case EMP_ATTENDENCE_DATA: {
            let data = action.payload
            return {
                ...state,
                atnData: data
            }
        }
        default:
            return state
    }
} 