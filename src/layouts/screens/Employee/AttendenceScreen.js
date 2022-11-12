import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Header from "../../components/header";
import FullButton from '../../components/fullButton';

const {width, height} = Dimensions.get('window');
const Attendence = () => {
    return(
        <View style={styles.container}>
            <Header title={'Attendence'} />
            
            <View style={styles.header}>
                <Image style={styles.imgIcon} source={require('../../../assets/imgs/build.png')} />
                <Text style={styles.attendence}>Attendence Details</Text>
            </View>
            <View style={{paddingHorizontal:20}}>
                <FullButton btnTitle={'Select Month'} />
            </View>
            <View style={styles.tableName}>
                <Text style={styles.tableField}>Present 0</Text>
                <Text style={styles.tableField}>Absent 0</Text>
                <Text style={[styles.tableField, {borderRightWidth:null}]}>Left 0</Text>
            </View>
            <View style={{flexDirection:'row',marginTop:10, flexWrap:'wrap'}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.tableHeading}>Date</Text>
                    <Text style={[styles.tableHeading, {backgroundColor:null}]}>In Time</Text>
                    <Text style={[styles.tableHeading, {backgroundColor:null}]}>Out Time</Text>
                    <Text style={styles.tableHeading}>Status</Text>
                </View>
                <View style={{flexDirection:'row'}}>

                    <Text style={styles.tableHeading}></Text>
                    <Text style={[styles.tableHeading, {backgroundColor:null}]}></Text>
                    <Text style={[styles.tableHeading, {backgroundColor:null}]}></Text>
                    <Text style={styles.tableHeading}></Text>
                </View>
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
    },
    tableName:{
        flexDirection:'row', 
        backgroundColor:'rgba(100,100,100,0.2)',
        padding:10
    },
    tableField:{
        borderColor:'rgba(100,100,100,0.4)',
        borderRightWidth:1,
        fontFamily:'Poppins-Regular',
        fontSize:16,
        paddingRight:width*0.15,
        paddingLeft:10,
    },
    tableHeading:{
        width:width*0.25,
        borderWidth:0.5,
        paddingHorizontal:10,
        backgroundColor:'rgba(100,100,100,0.1)'
    }
})

export default Attendence;