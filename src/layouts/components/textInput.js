import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const FullTextInput = (props) => {
    // console.log('props==========>', props);
    const {title, changeState} = props;

    return(
        <View style={styles.inputBox}>
            <Text style={styles.inputTitle}>{title}</Text>
            <TextInput onChangeText={(text)=>changeState(text)} style={styles.inputField} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputBox:{
        marginVertical:5, 
    },
    inputTitle:{
        fontSize:16,
        paddingHorizontal:10,
        color:'#2a2a2a',
        marginVertical:10,
        fontFamily:'Poppins-SemiBold'
    },
    inputField:{
        paddingHorizontal:10,
        borderWidth:1,
        borderRadius:10
    }
});

export default FullTextInput;