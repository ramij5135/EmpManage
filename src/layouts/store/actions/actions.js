import {EMP_LOGIN, EMP_ATTENDENCE_LIST, EMP_ATTENDENCE_DATA} from '../constants/actionsType';

export const Employee_Login = (user) => {
    // console.log('user data', user);
    return{
        type: EMP_LOGIN,
        payload: user,
    }
}

export const Employee_Attendence_List= (attendence) => {
    // console.log('attendence data', attendence);
    return {
        type: EMP_ATTENDENCE_LIST,
        payload:  attendence
    }
} 

export const Employee_Attendence_Data = (attendence) => {
    // console.log('attendence data out', attendence);
    return {
        type: EMP_ATTENDENCE_DATA,
        payload: attendence
    }
}