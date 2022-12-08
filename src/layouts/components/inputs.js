import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from "../../utils/globalStyles";

const Inputs = ({title, iconName, multiline, height, bgColor, zIndex}) => {
    return(
        <>
            <View style={styles.inputWrap}>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <Text style={[styles.label, {zIndex:zIndex}]}>{title}</Text>
                    <Ionicons style={styles.inputIcon} name={iconName} size={ iconName === 'add' ? 25 : 15} color={COLORS.blue} />
                </View>
                <TextInput multiline={multiline} style={[styles.inputField, {borderBottomColor:title === 'Description' ? 'green' : COLORS.blue, height:height, backgroundColor:bgColor }]} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    inputWrap:{
        marginVertical:10, 
        backgroundColor:COLORS.white,
        borderRadius:10
    },
    inputField:{
        borderBottomWidth:1,
        borderBottomColor:'blue',
        marginTop:-20,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        // textAlignVertical:"top"
    },
    label:{
        color:COLORS.black,
        fontSize:16,
        paddingVertical:3,
        paddingHorizontal:5
    },
    inputIcon:{
        position:'absolute',
        right:10
    }
});

export default Inputs;