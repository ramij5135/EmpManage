import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../components/logo";
import FullButton from "../../components/fullButton";
import FullTextInput from "../../components/textInput";
import AsyncStorage from '@react-native-async-storage/async-storage';

const EmployeeLogin = () => {
    const navigation = useNavigation();
    const [text, setText] = useState("");
    
    const changeState = (e) =>{
        setText(e);
    }

    const submitForm = async() => {
        try {
            await AsyncStorage.setItem('email', value)
        } catch (e) {
            // saving error
          }
    }
    return(
        <View style={styles.container}>
            <Logo />
            {/* {text} */}
            <View style={styles.loginSection}>
                <Text style={styles.heading}>Employee Login</Text>
                <View style={styles.form}>
                    <FullTextInput changeState={changeState} title={'Enter your Employee Id'} />
                    <FullTextInput title={'Enter your Password'} />
                    <FullButton btnTitle={'Login'} onPressName={()=>navigation.navigate('BottomTab') } />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:'rgba(130,209,209,0.4)',
        flex:1
    },
    loginSection:{
        // backgroundColor:'#fff',
        // alignItems:'center',
        flex:0.5
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