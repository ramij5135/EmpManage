import React, { useState } from "react";

import { Text, View, StyleSheet, Image, TextInput, Keyboard, ActivityIndicator,ScrollView } from "react-native";
import FullButton from "../../components/fullButton";
import { postMethod } from "../../../utils/helper";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../../components/loader";
const AdminLoginScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
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
    else if (input.password.length < 4) {
      handleError('password', 'Minimum leagth of Password 4');
      valid = false;
    }
    if (valid) {
      Login();
    }
  }
  const handleOnChange = (text, input) => {
    setInput(prevState => ({ ...prevState, [input]: text }))
  }
  const handleError = (inputError, errorMessage) => {
    setError((prevState) => ({ ...prevState, [inputError]: errorMessage }))
  }
  const Login = async () => {
    setLoading(true)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      EmailId: input.email,
      Password: input.password
    });
    // console.log(raw);
    axios.post('https://demo38.gowebbi.in/api/LoginApi/Login', raw, { headers: { 'Content-Type': 'application/json' } }).then(async (response) => {
      const responseData = response.data;
      console.log("responseData===============>", responseData);
      if (responseData.status === "success") {
        // console.log('successggggg', responseData.Token);
        setLoading(false)
        const data =await AsyncStorage.setItem('token', responseData?.Token?.toString());
        // console.log('data======>', data);
        navigation.navigate('AdminScreen', { data })
      }
      else {
        // // // // console.log(response);
      }
    })
      .catch((error) => {
        console.log(error);
      });
  }
  const isloading = () => {
    return (
      <View>
        {/* <ActivityIndicator style={{flex:1,justifyContent:'center',alignItems:'center'}} size={'large'} /> */}
        <Text style={{ flex: 1, justifyContent: 'center', textAlign: 'center' }}>loading............</Text>
      </View>
    )
  }
  return (
    <>
      {
        loading ?

          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <ActivityIndicator style={{}} size={'large'} />
            <Text>loading.....</Text>
          </View>
          :

          <>
            <ScrollView style={styles.container}>
              {/* <Loader visible={loading} /> */}

              <View style={styles.header1}>
                <Image style={styles.img} source={require('../../../assets/imgs/SwadeshSoftware.png')} />
                <Text style={[styles.headersText,]}>Admin Log In</Text>
              </View>
              <View style={styles.header2}>
                <View style={styles.loginContainer}>
                  <Text style={styles.text}>Enter Your Email</Text>
                  <TextInput value={input.email} onFocus={() => { handleError('email', null) }} onChangeText={(text) => handleOnChange(text, 'email')} style={error.email == 'Please Input Email' ? styles.TextInput :
                    error.password == 'Pleae input valid email' ?
                      styles.TextInput :
                      styles.dTextInput}
                  />
                  {error.email?<Text style={styles.inputError}>{error.email}</Text> :undefined}
                  <Text style={styles.text}>Enter Your Password</Text>
                  <TextInput onFocus={() => { handleError('password', null) }} value={input.password} onChangeText={(text) => handleOnChange(text, 'password')} style={error.password == 'Please input Password' ? styles.TextInput :
                    error.password == 'Minimum leagth of Password 5' ?
                      styles.TextInput :
                      styles.dTextInput} />
                  {error.password?<Text style={styles.inputError}>{error.password}</Text>:undefined}
                  <FullButton btnTitle={'LogIn'} onPressName={() => Validate()} />
                </View>
              </View>
            </ScrollView>
          </>}
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(130,209,209,0.4)',
    padding:18
    // justifyContent:'center',
  },
  header1: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header2: {
    flex: 6,
    // padding: 14,
    justifyContent: 'center',
    // marginTop:-10
  
  },
  img: {
    height: 100,
    alignSelf: 'center',
    borderRadius: 15,
    marginBottom:10
  },
  headersText: {
    fontSize: 30,
    fontFamily: 'Poppins-SemiBold',
    // marginVertical: 10,
    color: '#fff',
    backgroundColor:'#137f87',
    paddingHorizontal:20,
    marginBottom:10,
    borderRadius:5
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
    height: 40,
    borderRadius: 5,
    borderColor: 'red',
    borderWidth: 1,
    marginBottom: 2,
  },
  dTextInput: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 5,
    borderColor: '#8d8f8e',
    borderWidth: 1,
    marginBottom: 2
  },
  inputError: {
    color: 'red',
    fontSize: 14
  }
})
export default AdminLoginScreen;  