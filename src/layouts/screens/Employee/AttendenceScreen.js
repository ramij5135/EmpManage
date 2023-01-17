import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Header from "../../components/header";
import FullButton from '../../components/fullButton';
import { COLORS } from "../../../utils/globalStyles";

const {width, height} = Dimensions.get('window');
const Attendence = ({route}) => {
    const {time, outTime, date} = route.params;
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
                <Text style={[styles.tableField, {borderRightWidth:null}]}>Absent 0</Text>
                {/* <Text style={[styles.tableField, {borderRightWidth:null}]}>Left 0</Text> */}
            </View>
            <View style={{flexDirection:'row',marginTop:10, flexWrap:'wrap'}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={[styles.tableHeading, {width: date ? width*0.28 : width*0.25}]}>Date</Text>
                    <Text style={[styles.tableHeading, {backgroundColor:null}]}>In Time</Text>
                    <Text style={[styles.tableHeading, {backgroundColor:null}]}>Out Time</Text>
                    <Text style={styles.tableHeading}>Status</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={[styles.tableHeading, { width: date ? width*0.28 : width*0.25}]}>{date}</Text>
                    <Text style={[styles.tableHeading, {backgroundColor:null}]}>{time}</Text>
                    <Text style={[styles.tableHeading, {backgroundColor:null}]}>{outTime}</Text>
                    {
                        time ? <Text style={[styles.tableHeading, {color:'green'}]}>Present</Text> : <Text style={[styles.tableHeading, {color:COLORS.red}]}>Absent</Text> 
                    }
                </View>
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
    tableName:{
        flexDirection:'row', 
        backgroundColor:COLORS.light,
        padding:10,
        justifyContent:'space-evenly'
    },
    tableField:{
        borderColor:COLORS.grey,
        // borderRightWidth:1,
        fontFamily:'Poppins-Regular',
        fontSize:16,
        // paddingRight:width*0.15,
        paddingLeft:10,
    },
    tableHeading:{
        width:width*0.25,
        borderWidth:0.5,
        paddingHorizontal:10,
        backgroundColor:'rgba(100,100,100,0.1)',
        textAlign:'center',
        paddingVertical:2
    }
})

export default Attendence;