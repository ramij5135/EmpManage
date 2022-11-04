import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FullButton from "../components/fullButton";
import Logo from "../components/logo";


const LoginScreen = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Logo/>
            <View style={styles.loginSection}>
                <FullButton btnTitle={'Employee Login'} onPressName={()=>navigation.navigate('')} />
                <FullButton btnTitle={'Admin Login'} onPressName={() => navigation.navigate('AdminScreen')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(130,209,209,0.4)',
        padding:20
    },
    loginSection:{
        alignItems:'center',
        flex:0.5,
        marginVertical:20,
        justifyContent:'center',
    }
});

export default LoginScreen;