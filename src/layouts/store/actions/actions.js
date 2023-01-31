import {EMP_LOGIN} from '../constants/actionsType';

export const Employee_Login = (user) => {
    // console.log('action data', user);
    return{
        type: EMP_LOGIN,
        payload: user,
    }
}