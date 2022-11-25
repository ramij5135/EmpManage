import React from "react";
import AuthContext from "./authContext";

const AuthState = (props) => {
    const user = {
        "name" : "Ramij Dafadar",
        "empId":"53",
        "designation":"Sales Executive"
    }
    return(
        <AuthContext.Provider value={user}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;