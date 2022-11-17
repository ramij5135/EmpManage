import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from "../../utils/globalStyles";

const Inputs = ({title, iconName, multiline}) => {
    return(
        <>
            <View style={styles.inputWrap}>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <Text style={styles.label}>{title}</Text>
                    <Ionicons style={styles.inputIcon} name={iconName} size={ iconName === 'add' ? 25 : 15} color={COLORS.blue} />
                </View>
                <TextInput multiline={multiline} style={[styles.inputField, {borderBottomColor:title === 'Description' ? 'green' : COLORS.blue}]} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    inputWrap:{
        marginVertical:10, 
        backgroundColor:COLORS.white
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
    },
    inputIcon:{
        position:'absolute',
        right:10
    }
});

export default Inputs;