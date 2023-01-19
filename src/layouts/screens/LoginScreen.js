import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FullButton from "../components/fullButton";
import Logo from "../components/logo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getStorageData} from '../../utils/helper';


const LoginScreen = () => {
    const navigation = useNavigation();
    const checkUser = () =>{
        AsyncStorage.getItem('token').then((res)=>{
            res ? navigation.navigate('AdminScreen') : navigation.navigate('AdminLoginScreen')
        })
    }

    const Check_Emp_Login = () => {
        const tData = getStorageData();
        tData ? navigation.navigate('BottomTab') : navigation.navigate('Emp_Login')
    }
    

    return(
        <View style={styles.container}>
            <Logo/>
            <View style={styles.loginSection}>
                <FullButton btnTitle={'Employee Login'} onPressName={()=>Check_Emp_Login()} />
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