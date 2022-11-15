import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS } from "../../../utils/globalStyles";
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.welcome}>Welcome</Text>
                <Text style={styles.welcomeName}>Ramij Dafadar</Text>
            </View>
            <View style={styles.wrapper}>
                <View style={styles.square} />
                <Image style={styles.profileImg} source={require('../../../assets/imgs/profile.jpg')} />
                <Text style={styles.workTitle}>Sales Executive</Text>
            </View>
            <View style={{paddingHorizontal:20, alignItems:'center'}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Ionicons name="person" size={25} />
                    <View>
                        <Text>Employee Id</Text>
                        <Text>3</Text>
                    </View>
                </View>
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
    wrapper:{
        backgroundColor:COLORS.white,
        borderBottomLeftRadius:100,
        borderBottomRightRadius:100,
        overflow:'hidden',
        marginVertical:10,
        paddingVertical:20,
        alignItems:'center',
    },
    square:{
        height:0,
        width:0,
        alignSelf:'center',
        marginTop:-20,
        top:0,
        borderBottomWidth:20,
        borderRightWidth:15,
        borderLeftWidth:15,
        borderBottomColor:'rgba(130,209,209,0.4)',
        borderLeftColor:'transparent',
        borderRightColor:'transparent',
        borderTopColor:'transparent',
        transform:[{rotate:'180deg'}],
        marginBottom:10,
        overflow:'hidden'
    },
    profileImg:{
        height:70,
        width:70,
        borderRadius:50,
        resizeMode:'contain',
        alignSelf:'center',
        marginBottom:20
    },
    workTitle:{
        fontFamily:'Poppins-SemiBold',
        fontSize:16,
        color:'#2a2a2a',
        letterSpacing:1
    },
});

export default ProfileScreen;