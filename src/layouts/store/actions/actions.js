import {EMP_LOGIN} from '../common/types';

const Employee_Login = (user) => {
    return{
        type: EMP_LOGIN,
        payload: user
    }
}