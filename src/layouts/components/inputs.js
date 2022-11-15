import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from "../../utils/globalStyles";

const Inputs = ({title, iconName}) => {
    return(
        <>
            <View style={styles.inputWrap}>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:10}}>
                    <Text style={styles.label}>{title}</Text>
                    <Ionicons name={iconName} size={25} color={COLORS.blue} />
                </View>
                <TextInput style={[styles.inputField, {borderBottomColor:title === 'Description' ? 'green' : COLORS.blue}]} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    inputWrap:{
        marginVertical:10, 
        // backgroundColor:COLORS.white
    },
    inputField:{
        // backgroundColor:'red',
        borderBottomWidth:1,
        borderBottomColor:'blue',
        marginTop:-20
    },
    label:{
        color:COLORS.black,
        fontSize:16,
        paddingVertical:3
    }
});

export default Inputs;