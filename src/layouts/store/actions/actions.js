import {EMP_LOGIN} from '../constants/actionsType';

const Employee_Login = (user) => {
    return{
        type: EMP_LOGIN,
        payload: user
    }
}