import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { COLORS } from "../../../utils/globalStyles";
import Header from "../../components/header";
import Inputs from '../../components/inputs';
import FullButton from '../../components/fullButton';

const Complaint = () => {
    return(
        <View style={styles.container}>
            <Header title='Complaint' />
            <View style={styles.header}>
                <Image style={styles.imgIcon} source={require('../../../assets/imgs/build.png')} />
                <Text style={styles.attendence}>Add Complaint</Text>
            </View>
            <View style={{padding:10}}>
                <Inputs title={'Topic'} />
                <Inputs title={'Complaint'} multiline={true} />
                <FullButton btnTitle={'Send Report'} />
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

export default Complaint;