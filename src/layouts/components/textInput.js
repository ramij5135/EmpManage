import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { COLORS } from "../../utils/globalStyles";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const FullTextInput = ({title, iconName, error, password, placeHolder, onFocus = () =>{}, ...props}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hidePassword, setHidePassword] = useState(password)

    return(
        <View style={styles.inputBox}>
            {
                title ? <Text style={styles.inputTitle}>{title}</Text> : null
            }
            {/* <Text style={styles.inputTitle}>{title}</Text> */}
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <MaterialCommunityIcons name={iconName} size={20} style={styles.leftIcon}  />
                <TextInput 
                    style={[styles.inputField, { borderColor:error ? COLORS.red : isFocused ? COLORS.light : null, paddingLeft: iconName ? 40 : null }]}
                    secureTextEntry={hidePassword}
                    onFocus={() =>{
                        onFocus();
                        setIsFocused(true);
                    }}
                    onBlur={()=>{
                        setIsFocused(false);
                    }}
                    autoCorrect={false} 
                    placeholder={placeHolder}
                    {...props}  
                />
                {
                    password && <MaterialCommunityIcons style={styles.icon} size={25} onPress={()=> setHidePassword(!hidePassword)} name={ hidePassword ? 'eye-outline' : 'eye-off-outline'} />
                }
            </View>
            {
                error && <Text style={{color:'red', fontSize:12, marginTop:7}}>{error}</Text>
            }
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
        borderWidth:0.5,
        borderRadius:10,
        flex:1,
        backgroundColor:COLORS.White
    },
    icon:{
        position:'absolute',
        right:10,
        alignSelf:'center'
    },
    leftIcon:{
        position:'absolute',
        zIndex:2,
        left:10
    }
});

export default FullTextInput;