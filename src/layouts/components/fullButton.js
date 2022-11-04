import React from "react";
import { Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');
const FullButton = (props) => {
    // console.log('Button props ==============>', props);
    const {btnTitle, onPressName} = props;
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
        marginVertical:10
    },
    btnText:{
        fontSize:17,
        color:'#fff'
    }
});

export default FullButton;