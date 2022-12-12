import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {COLORS} from '../../../utils/globalStyles';
import Header from "../../components/header";

const Vechicle = () => {
    return(
        <View style={styles.container}>
            <Header title='Vechicle Detail' />
            <View style={styles.header}>
                <Image style={styles.imgIcon} source={require('../../../assets/imgs/build.png')} />
                <Text style={styles.attendence}>Vechicle Detail</Text>
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

export default Vechicle;