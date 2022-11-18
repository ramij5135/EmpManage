import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Header from "../../components/header";
import { COLORS } from "../../../utils/globalStyles";

const MyStore = () => {
    return(
        <View style={styles.container}>
            <Header title='My Store' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Image style={styles.imgIcon} source={require('../../../assets/imgs/build.png')} />
                    <Text style={styles.attendence}>Store List</Text>
                </View>
                <View style={styles.listSection}>
                    <View style={styles.list}>
                        <Text style={{fontSize:16}}>Customer</Text>
                        <Text style={{fontSize:14, paddingVertical:5}}>Dhanbad, Jharkhand, India</Text>
                    </View>
                    <View style={styles.list}>
                        <Text style={{fontSize:14, textTransform:'uppercase'}}>Abhik Enterprise (Khatra)</Text>
                        <Text style={{fontSize:16, textTransform:'uppercase', paddingVertical:5, color:COLORS.black}}>Abhik Enterprise (Khatra)</Text>
                    </View>
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
    listSection:{
        paddingHorizontal:10
    },
    list:{
        height:80,
        backgroundColor:COLORS.White,
        marginVertical:5,
        justifyContent:'center',
        paddingHorizontal:10,
        paddingTop:25,
        borderRadius:5,
    }
});

export default MyStore;