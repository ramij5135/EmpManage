import React, { useState } from "react";
import { View, Text, StyleSheet, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../components/logo";
import FullButton from "../../components/fullButton";
import FullTextInput from "../../components/textInput";
import Loader from "../../components/loader";
import AsyncStorage from '@react-native-async-storage/async-storage';

const EmployeeLogin = () => {
    const navigation = useNavigation();
    const [text, setText] = useState("");

    const [inputs, setInputs] = useState({
        email:'',
        password:''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validate = () => {
        Keyboard.dismiss();
        let valid = true;
        if(!inputs.email){
            handleError("Please input email", 'email');
            valid=false;
        } else if (!inputs.email.match(/\S+@\S+\.\S+/)){
            handleError("Please input valid email", 'email');
            valid=false;
        }
        if(!inputs.password){
            handleError("Please input password", 'password');
            valid=false;
        } else if (inputs.password.length<8){
            handleError("Password required minimum 8 characters", 'password')
            valid=false;
        }

        if(valid){
            register();
        }
    }
    const register = () => {
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            try {
                AsyncStorage.setItem('user', JSON.stringify(inputs));
                navigation.navigate('BottomTab');
            } catch (error) {
                Alert.alert("Error", 'Something went wrong');
            }
        },2000);
    }
    const handleOnChange = (text, input) => {
        setInputs((prevState) => ({...prevState, [input]: text}))
    }
    const handleError = (errorMessage, input) => {
        setErrors((prevState) => ({...prevState, [input]:errorMessage}))
    }
    
    

    
    return(
        <View style={styles.container}>
            <Loader visible={loading} />
            <Logo />
            {/* {text} */}
            <View style={styles.loginSection}>
            
                <Text style={styles.heading}>Employee Login</Text>
                <View style={styles.form}>
                    <FullTextInput 
                        // changeState={changeState} 
                        title={'Enter your Employee Id'}
                        error={errors.email}
                        onFocus={()=>{
                            handleError(null, 'email');
                        }}
                        onChangeText = {(text) => handleOnChange(text, 'email')} 
                    />
                    <FullTextInput 
                        title={'Enter your Password'} 
                        error={errors.password}
                        onFocus={()=>{
                            handleError(null, 'password');
                        }}
                        password
                        onChangeText = {(text) => handleOnChange(text, 'password')}
                    />
                    <FullButton btnTitle={'Login'} onPressName={validate } />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:'rgba(130,209,209,0.4)',
        flex:1,
        justifyContent:'center'
    },
    loginSection:{
        flex:0.6,
        marginTop:-70
    },
    heading:{
        fontSize:28,
        fontWeight:'500',
        color:'#fff',
        alignSelf:'center'
    },
    form:{
        backgroundColor:'#fff',
        marginTop:20,
        padding:10,
        borderRadius:10
    }
});

export default EmployeeLogin;