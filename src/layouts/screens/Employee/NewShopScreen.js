import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { COLORS } from "../../../utils/globalStyles";
import Header from "../../components/header";
import Inputs from "../../components/inputs";
import FullButton from "../../components/fullButton";

const NewShopScreen = () => {
    return(
        <View style={styles.container}>
            <Header title={'New Shop'} />
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <Image style={styles.imgIcon} source={require('../../../assets/imgs/build.png')} />
                <Text style={styles.attendence}>Add New Shop</Text>
            </View>
            <View style={styles.inputSection}>
                <Inputs title={'Shop Images'} iconName={'add'} />
                <Inputs title={'Shop Name'} />
                <Inputs title={'Owner Name'} />
                <Inputs title={'Email'} />
                <Inputs title={'Contact Number'} />
                <Inputs title={'Address'} />
                <Inputs title={'Description'} multiline={true} />
            </View>
            <View style={{paddingHorizontal:10, paddingVertical:20}}>
                <FullButton btnTitle={'Add New Shop'} />
            </View>
            </ScrollView>
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
    inputSection:{
        paddingHorizontal:20
    }
});

export default NewShopScreen;