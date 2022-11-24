import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FullButton from "../components/fullButton";
import Logo from "../components/logo";
import AsyncStorage from "@react-native-async-storage/async-storage";


const LoginScreen = () => {
    const navigation = useNavigation();
   const checkUser = () =>{
    AsyncStorage.getItem('token').then((res)=>{
        res ? navigation.navigate('AdminScreen') : navigation.navigate('AdminLoginScreen')
    }
    )
    }
    return(
        <View style={styles.container}>
            <Logo/>
            <View style={styles.loginSection}>
                <FullButton btnTitle={'Employee Login'} onPressName={()=>navigation.navigate('Emp_Login')} />
                <FullButton btnTitle={'Admin Login'} onPressName={() => checkUser()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(130,209,209,0.4)',
        padding:20,
    },
    
    loginSection:{
        flex:0.5,
        alignItems:'center',
        marginVertical:20,
        justifyContent:'center',
    }
});

export default LoginScreen;