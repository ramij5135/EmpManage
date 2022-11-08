import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Header from "../../components/header";

const Attendence = () => {
    return(
        <View style={styles.container}>
            <Header title={'Attendence'} />
            <View style={styles.header}>
                <Image style={styles.imgIcon} source={require('../../../assets/imgs/build.png')} />
                <Text style={styles.attendence}>Attendence</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(130,209,209,0.4)',
    },
    header:{
        // height:80,
        backgroundColor:'rgba(255,255,255,0.4)',
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
        color:'#2a2a22'
    }
})

export default Attendence;