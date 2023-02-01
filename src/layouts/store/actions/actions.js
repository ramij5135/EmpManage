import {EMP_LOGIN, EMP_ATTENDENCE_IN, EMP_ATTENDENCE_OUT} from '../constants/actionsType';

export const Employee_Login = (user) => {
    // console.log('user data', user);
    return{
        type: EMP_LOGIN,
        payload: user,
    }
}

export const Employee_Attendence_In = (attendence) => {
    // console.log('attendence data', attendence);
    return {
        type: EMP_ATTENDENCE_IN,
        payload:  attendence
    }
} 

export const Employee_Attendence_Out = (attendence) => {
    console.log('attendence data out', attendence);
    return {
        type: EMP_ATTENDENCE_OUT,
        payload: attendence
    }
}