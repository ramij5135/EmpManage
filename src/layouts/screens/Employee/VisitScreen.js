import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from "../../components/header";
import { COLORS } from "../../../utils/globalStyles";

const VisitScreen = () => {
    return (
        <View style={styles.container}>
            <Header title={'Visit'} />
            <View style={styles.header}>
                <Image style={styles.imgIcon} source={require('../../../assets/imgs/build.png')} />
                <Text style={styles.attendence}>Visit List</Text>
            </View>
            <View style={{ flexDirection:'row', alignItems:'center'}}>
                
            </View>
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
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        alignItems:'center'
    },
    imgIcon:{
        height:50,
        width:50,
    },
    attendence:{
        fontFamily:'Poppins-SemiBold',
        fontSize:16,
        color:COLORS.black
    },
});

export default VisitScreen;