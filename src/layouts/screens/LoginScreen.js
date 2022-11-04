import React from "react";

import { Text, View, StyleSheet, Image, TextInput,TouchableOpacity } from "react-native";

const LoginScreen = ({navigation}) => {
    return (
        <>
            <View style={styles.container}>
                <View style={{margin:15}}>
                    <Image style={styles.img} source={require('../../assets/imgs/SwadeshSoftware.png')} />
                    <Text style={[styles.headersText,]}>Admin Login</Text>
                    <View style={styles.loginContainer}>
                        <Text style={styles.text}>Enter Your Email</Text>
                        <TextInput style={styles.TextInput} />
                        <Text style={styles.text}>Enter Your Password</Text>
                        <TextInput style={styles.TextInput} />
                        <TouchableOpacity onPress={()=>navigation.navigate('AdminScreen')} style={styles.LoginButton} >
                            <Text style={styles.LoginText}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#57befa'
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
    }
})
export default LoginScreen;  