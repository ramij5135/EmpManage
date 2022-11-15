import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { COLORS } from "../../../utils/globalStyles";
import Header from "../../components/header";

const TaskScreen = () => {
    return(
        <View style={styles.container}>
            <Header title='Task' />
            <View style={styles.header}>
                <Image style={styles.imgIcon} source={require('../../../assets/imgs/build.png')} />
                <Text style={styles.attendence}>Attendence Details</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.primary,
        flex:1
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

export default TaskScreen;