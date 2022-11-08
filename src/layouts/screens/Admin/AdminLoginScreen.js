import React,{useState} from "react";

import { Text, View, StyleSheet, Image, TextInput,Keyboard } from "react-native";
import FullButton from "../../components/fullButton";
const AdminLoginScreen = ({navigation}) => {
    const [input, setInput] = useState(
        {
          email: '',
          password: '',
        }
      )
    const [error, setError] = useState({})
    const Validate = () => {
        Keyboard.dismiss();
        let valid = true;
        if (!input.email) {
          handleError('email', 'Please Input Email');
          valid = false;
        }
        else if (!input.email.match(/\S+@\S+\.\S+/)) {
          handleError('email', 'Pleae input valid email');
          valid = false;
        }
        if (!input.password) {
          handleError('password', 'Please input Password')
          valid = false;
        }
        else if (input.password.length < 5) {
          handleError('password', 'Minimum leagth of Password 5');
          valid = false;
        }
        if (valid) {
          Register()
          navigation.navigate('AdminScreen')
        }
      }
      const Register = () => {
        console.log('Registered');
      }
      const handleOnChange = (text, input) => {
        setInput(prevState => ({ ...prevState, [input]: text }))
      }
      const handleError = (inputError, errorMessage) => {
        setError((prevState) => ({ ...prevState, [inputError]: errorMessage }))
      }
    return (
        <>
            <View style={styles.container}>
                <View style={{margin:15}}>
                    <Image style={styles.img} source={require('../../../assets/imgs/SwadeshSoftware.png')} />
                    <Text style={[styles.headersText,]}>Admin Login</Text>
                    <View style={styles.loginContainer}>
                        <Text style={styles.text}>Enter Your Email</Text>
                        <TextInput onFocus={() => { handleError('email', null) }} onChangeText={(text) => handleOnChange(text, 'email')} style={ error.email=='Please Input Email' ? styles.TextInput:
                        error.password=='Pleae input valid email' ?
                        styles.TextInput:
                        styles.dTextInput}
                         />
                        <Text style={styles.inputError}>{error.email}</Text>
                        <Text style={styles.text}>Enter Your Password</Text>
                        <TextInput  onFocus={() => { handleError('password', null) }} onChangeText={(text) => handleOnChange(text, 'password')} style={ error.password=='Please input Password' ? styles.TextInput:
                        error.password=='Minimum leagth of Password 5' ?
                        styles.TextInput:
                        styles.dTextInput} />
                            <Text style={styles.inputError}>{error.password}</Text>
                        <FullButton btnTitle={'LogIn'} onPressName={()=>Validate()} />
                    </View>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'rgba(130,209,209,0.4)'
    },
    img: {
        height: 100,
        marginTop: 40,
        alignSelf: 'center',
        borderRadius: 15
    },
    headersText: {
        fontSize: 30,
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center',
        marginTop: 40,
        color: '#fff',
        marginBottom:10
    },
    loginContainer: {
        backgroundColor:'#fff',
        padding:20,
        borderRadius:18
    },
    text: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        marginBottom: 4,
        color:'#414242'
    },
    TextInput: {
        backgroundColor: '#fff',
        height: 60,
        borderRadius: 10,
        borderColor: 'red',
        borderWidth: 1,
        marginBottom: 10,
        
    },
    dTextInput: {
        backgroundColor: '#fff',
        height: 60,
        borderRadius: 10,
        borderColor: '#8d8f8e',
        borderWidth: 1,
        marginBottom: 10
    },
    LoginButton:{
        height:50,
        backgroundColor:'#57befa',
        marginTop:15,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15
    },
    LoginText:{
        fontFamily: 'Poppins-SemiBold',
        color:'#fff'
    },
    inputError:{
        color:'red',
        fontSize:15
    }
})
export default AdminLoginScreen;  