import React from "react";
import { View, StyleSheet, Image, Text, TextInput } from "react-native";
import { COLORS } from "../../../utils/globalStyles";
import Header from "../../components/header";
import FullTextInput from "../../components/textInput";
import Ionicons from 'react-native-vector-icons/Ionicons';

const ReportScreen = () => {
    return(
        <View style={styles.container}>
            <Header title='Report' />
            <View style={styles.header}>
                <Image style={styles.imgIcon} source={require('../../../assets/imgs/build.png')} />
                <Text style={styles.attendence}>Attendence Details</Text>
            </View>
            <View style={{marginVertical:10, paddingHorizontal:20}}>
                <FullTextInput iconName="file-search" placeHolder='Shop Name & Contact Number' />
            </View>
            <View style={{backgroundColor:COLORS.white, flex:1, paddingHorizontal:20}}>
                <View style={{ height:50}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text>Images</Text>
                        <Ionicons name="add" size={30} style={styles.icon} />
                    </View>
                    <TextInput style={{backgroundColor:null, borderBottomWidth:1, borderBottomColor:COLORS.blue, textAlignVertical:'bottom', marginTop:-20}} />
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
    }
});

export default ReportScreen;