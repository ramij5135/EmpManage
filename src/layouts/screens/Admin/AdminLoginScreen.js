import React, { useState } from "react";

import { Text, View, StyleSheet, Image, TextInput, Keyboard } from "react-native";
import FullButton from "../../components/fullButton";
import { postMethod } from "../../../utils/helper";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const AdminLoginScreen = ({ navigation }) => {

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
      Login();


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


  const Login = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      EmailId: input.email,
      Password: input.password
    });
    // console.log(raw);
     axios.post('https://demo38.gowebbi.in/api/LoginApi/Login',raw,{headers: {'Content-Type': 'application/json'}}).then(async (response) => {
      const responseData = response.data;
      // console.log(responseData);
      if(responseData.status ===  "success"){
        console.log('success',responseData.token);
       const data = await AsyncStorage.setItem('token',responseData.token.toString());
        navigation.navigate('AdminScreen')
      }else{
        // console.log(response);
      }
    })
    .catch( (error) =>{
      console.log(error);
    });
  }





  return (
    <>
      <View style={styles.container}>
          <View style={styles.header1}>
            <Image style={styles.img} source={require('../../../assets/imgs/SwadeshSoftware.png')} />
            <Text style={[styles.headersText,]}>Admin Login</Text>
          </View>
          <View style={styles.header2}>
            <View style={styles.loginContainer}>
              <Text style={styles.text}>Enter Your Email</Text>
              <TextInput value={input.email} onFocus={() => { handleError('email', null) }} onChangeText={(text) => handleOnChange(text, 'email')} style={error.email == 'Please Input Email' ? styles.TextInput :
                error.password == 'Pleae input valid email' ?
                  styles.TextInput :
                  styles.dTextInput}
              />
              <Text style={styles.inputError}>{error.email}</Text>
              <Text style={styles.text}>Enter Your Password</Text>
              <TextInput onFocus={() => { handleError('password', null) }} value={input.password} onChangeText={(text) => handleOnChange(text, 'password')} style={error.password == 'Please input Password' ? styles.TextInput :
                error.password == 'Minimum leagth of Password 5' ?
                  styles.TextInput :
                  styles.dTextInput} />
              
              <Text style={styles.inputError}>{error.password}</Text>
              <FullButton btnTitle={'LogIn'} onPressName={() => Validate()} />
            </View>
          </View>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(130,209,209,0.4)'
  },
  header1:{
    flex:4,
    // backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center'
  },
  header2:{
    flex:6,
    padding:16,
    justifyContent:'center',
  },
  img: {
    height: 100,
    alignSelf: 'center',
    borderRadius: 15
  },
  headersText: {
    fontSize: 30,
    fontFamily: 'Poppins-SemiBold',
    marginVertical:10,
    color: '#fff',
  },
  loginContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 18
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#414242'
  },
  TextInput: {
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 1,
    marginBottom: 5,

  },
  dTextInput: {
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 10,
    borderColor: '#8d8f8e',
    borderWidth: 1,
    marginBottom: 5
  },
  inputError: {
    color: 'red',
    fontSize: 14
  }
})
export default AdminLoginScreen;  