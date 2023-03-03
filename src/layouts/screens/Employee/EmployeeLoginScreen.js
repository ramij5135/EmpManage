import React, { useState } from "react";
import { View, Text, StyleSheet, Keyboard, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../components/logo";
import FullButton from "../../components/fullButton";
import FullTextInput from "../../components/textInput";
import Loader from "../../components/loader";
import { postMethod, storeData } from "../../../utils/helper";
import { COLORS } from "../../../utils/globalStyles";
import { useDispatch } from "react-redux";
import { Employee_Login } from "../../store/actions/actions";


const EmployeeLogin = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validate = () => {
        Keyboard.dismiss();
        let valid = true;
        if (!inputs.email) {
            handleError("Please input email", 'email');
            valid = false;
        } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
            handleError("Please input valid email", 'email');
            valid = false;
        }
        if (!inputs.password) {
            handleError("Please input password", 'password');
            valid = false;
        } else if (inputs.password.length < 6) {
            handleError("Password required minimum 6 characters", 'password')
            valid = false;
        }

        if (valid) {
            login();
        }
    }

    const login = () => {
        setLoading(true);
        try {
            var raw = JSON.stringify({
                EmailId: inputs.email,
                Password: inputs.password
            });
            postMethod('LoginApi/Login', raw).then((res) => {
                const resData = res.data.data[0];
                const dataFilter = res.data;
                const token = dataFilter.Token;
                storeData(token);
                setLoading(false);
                dispatch(Employee_Login(resData))
                resData.Type === "EMP" ? navigation.navigate('BottomTab') : null
            }).catch((error) => {
                console.log('error1', error);
                setLoading(false);
            })
        } catch (error) {
            Alert.alert("Error", 'Something went wrong');
        }
    }

    const handleOnChange = (text, input) => {
        setInputs((prevState) => ({ ...prevState, [input]: text }))
    }
    const handleError = (errorMessage, input) => {
        setErrors((prevState) => ({ ...prevState, [input]: errorMessage }))
    }




    return (
        <ScrollView style={styles.container}>
            <Loader visible={loading} />
            <Logo />
            <View style={styles.loginSection}>
                <Text style={styles.heading}>Employee Login</Text>
                <View style={styles.form}>
                    <FullTextInput
                        title={'Enter your Employee Id'}
                        error={errors.email}
                        onFocus={() => {
                            handleError(null, 'email');
                        }}
                        onChangeText={(text) => handleOnChange(text, 'email')}
                    />
                    <FullTextInput
                        title={'Enter your Password'}
                        error={errors.password}
                        onFocus={() => {
                            handleError(null, 'password');
                        }}
                        password
                        onChangeText={(text) => handleOnChange(text, 'password')}
                    />
                    <FullButton btnTitle={'Login'} onPressName={validate} />
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: COLORS.primary,
    },
    // loginSection: {
    //     // flex: 0.6,
    //     // marginTop:-70
    // },
    heading: {
        fontSize: 28,
        fontWeight: '500',
        color: '#fff',
        alignSelf: 'center',
        backgroundColor: '#137f87',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        marginTop: 10
    },
    form: {
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 10,
        borderRadius: 10
    }
});

export default EmployeeLogin;