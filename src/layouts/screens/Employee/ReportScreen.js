import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { COLORS } from "../../../utils/globalStyles";
import Header from "../../components/header";
import FullTextInput from "../../components/textInput";
import Inputs from "../../components/inputs";
import FullButton from "../../components/fullButton";


const ReportScreen = () => {
    return(
        <View style={styles.container}>
            <Header title='Report' />
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <Image style={styles.imgIcon} source={require('../../../assets/imgs/build.png')} />
                <Text style={styles.attendence}>Visit Report</Text>
            </View>
            <View style={{marginVertical:10, paddingHorizontal:20}}>
                <FullTextInput iconName="file-search" placeHolder='Shop Name & Contact Number' />
            </View>
            <View style={styles.inputSection}>
                <Inputs title={'Images'} iconName={'add'} />
                <Inputs title={'Shop Name'} />
                <Inputs title={'Amount'} />
                <Inputs title={'Requirements'} />
                <Inputs title={'Description'} />
            </View>
            <View style={{paddingHorizontal:10, paddingVertical:20}}>
                <FullButton btnTitle={'Send Report'} />
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
    icon:{
        position:'absolute',
        right:10
    },
    inputSection:{
        backgroundColor:COLORS.white, 
        flex:1, 
        paddingHorizontal:20
    }
});

export default ReportScreen;