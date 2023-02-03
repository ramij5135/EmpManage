import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLORS } from "../../../utils/globalStyles";


const AssignWork = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.welcome}>Welcome</Text>
                <Text style={styles.welcomeName}>Ramij Dafadar</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.primary
    },
    header:{
        backgroundColor:COLORS.white,
        height:60,
        alignItems:'center',
        justifyContent:'center'
    },
    welcome:{
        fontFamily:'Poppins-Regular',
        fontSize:16
    }, 
    welcomeName:{
        fontFamily:'Poppins-SemiBold',
        fontSize:16,
        color:'green'
    },
});

export default AssignWork;