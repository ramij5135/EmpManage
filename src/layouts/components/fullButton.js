import React from "react";
import { Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";


const FullButton = ({btnTitle,onPressName}) => {
    return(
        <>
            <TouchableOpacity style={styles.btn} onPress={onPressName}>
                <Text style={styles.btnText}>{btnTitle}</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'#0f87da',
        height:50,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        marginVertical:10,
        marginBottom:20
    },
    btnText:{
        fontSize:17,
        color:'#fff',
        fontWeight:'bold'
    }
});

export default FullButton;