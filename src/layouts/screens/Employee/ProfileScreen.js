import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { COLORS, width } from "../../../utils/globalStyles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from "react-redux";

const ProfileScreen = () => {
    const userData = useSelector(state => state.auth.user);
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.welcome}>Welcome</Text>
                <Text style={styles.welcomeName}>{userData.UserName}</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.wrapper}>
                    <View style={styles.square} />
                    <Image style={styles.profileImg} source={require('../../../assets/imgs/profile.jpg')} />
                    <Text style={styles.workTitle}>{userData.Designation}</Text>
                </View>
                <View style={styles.fieldSection}>
                    <View style={styles.field1}>
                        <Ionicons name="person" size={25} />
                        <View style={styles.fieldName}>
                            <Text style={styles.fieldTitle}>Employee Id</Text>
                            <Text style={[styles.fieldTitle,{ color:COLORS.blue}]}>{userData.ID}</Text>
                        </View>
                    </View>
                    <View style={styles.field1}>
                        <Ionicons name="calendar-outline" size={25} />
                        <View style={styles.fieldName}>
                            <Text style={styles.fieldTitle}>Date of Joining</Text>
                            <Text style={[styles.fieldTitle,{ color:COLORS.blue}]}>{userData.Doj}</Text>
                        </View>
                    </View>
                    <View style={styles.field1}>
                        <Ionicons name="mail-outline" size={25} />
                        <View style={styles.fieldName}>
                            <Text style={styles.fieldTitle}>Email</Text>
                            <Text style={[styles.fieldTitle,{ color:COLORS.blue}]}>{userData.EmailId}</Text>
                        </View>
                    </View>
                    <View style={styles.field1}>
                        <Ionicons name="call-outline" size={25} />
                        <View style={styles.fieldName}>
                            <Text style={styles.fieldTitle}>Contact</Text>
                            <Text style={[styles.fieldTitle,{ color:COLORS.blue}]}>{userData.ContactNumber}</Text>
                        </View>
                    </View>
                    
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.primary,
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
        marginBottom:20,
    },
    workTitle:{
        fontFamily:'Poppins-SemiBold',
        fontSize:16,
        color:'#2a2a2a',
        letterSpacing:1
    },
    fieldSection:{
        paddingHorizontal:20, 
        paddingVertical:10, 
        marginVertical:10
    },
    field1:{
        flexDirection:'row', 
        alignItems:'center',
        marginVertical:5,
    },
    fieldName:{
        marginHorizontal:10, 
        borderBottomColor:COLORS.light, 
        borderBottomWidth:0.5, 
        flex:1, 
        paddingBottom:10
    },
    fieldTitle:{
        fontSize:18, 
        fontWeight:'400'
    }
});

export default ProfileScreen;