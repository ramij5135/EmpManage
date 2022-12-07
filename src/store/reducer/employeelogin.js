const initialState = {
    email:'',
    password:''
}

const EmployeeLogin = (state = initialState, action) => {
    switch (action.type) {
        case 'EMPLOYEE_LOGIN':
            return state;
        default:
            return state;    
    }
}

export default EmployeeLogin;