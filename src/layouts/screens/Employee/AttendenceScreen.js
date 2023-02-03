import React, {useState} from "react";
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, Modal } from "react-native";
import Header from "../../components/header";
import FullButton from '../../components/fullButton';
import { COLORS } from "../../../utils/globalStyles";
import { useSelector } from "react-redux";

const {width, height} = Dimensions.get('window');

const Attendence = () => {
    // const [modalVisible, setModalVisible] = useState(false);
    const attendenceList = useSelector(state => state.attendence.atnList)
    const attendenceData = useSelector(state => state.attendence.atnData[0])

    return(
        <>
            <View style={styles.container}>
                <Header title={'Attendence'} />
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Image style={styles.imgIcon} source={require('../../../assets/imgs/build.png')} />
                    <Text style={styles.attendence}>Attendence Details</Text>
                </View>
                <View style={{paddingHorizontal:20}}>
                    <FullButton btnTitle={'Select Month'} />
                </View>
                <View style={styles.tableName}>
                    <Text style={styles.tableField}>Present {attendenceData.Present}</Text>
                    <Text style={[styles.tableField, {borderRightWidth:null}]}>Absent {attendenceData.Absent}</Text>
                    {/* <Text style={[styles.tableField, {borderRightWidth:null}]}>Left {count.Leftdays}</Text> */}
                </View>
                <View style={{flexDirection:'row',marginTop:10, flexWrap:'wrap', marginBottom:10}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={[styles.tableHeading, {width: Date ? width*0.29 : width*0.25}]}>Date</Text>
                        <Text style={[styles.tableHeading, {backgroundColor:null}]}>In Time</Text>
                        <Text style={[styles.tableHeading, {backgroundColor:null}]}>Out Time</Text>
                        <Text style={styles.tableHeading}>Status</Text>
                    </View>
                    {
                        attendenceList.map((item, index) => {
                            return(
                                <View style={{flexDirection:'row'}} key={index}>
                                    <Text style={[styles.tableHeading, { width: Date ? width*0.29 : width*0.25}]}>{item.Date}</Text>
                                    <Text style={[styles.tableHeading, {backgroundColor:null}]}>{item.InTime}</Text>
                                    <Text style={[styles.tableHeading, {backgroundColor:null}]}>{item.OutTime}</Text>
                                    <Text style={[styles.tableHeading, {color: item.status == 'Present' ? 'green' : item.status == 'Absent'? COLORS.red : COLORS.black}]}>{item.status}</Text>
                                </View>
                            )
                        })
                    }
                </View>
                </ScrollView>
            </View>
        </>
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
        fontFamily:'Poppins-Regular',
        fontSize:16,
        paddingLeft:10,
    },
    tableHeading:{
        width:width*0.25,
        borderWidth:0.5,
        paddingHorizontal:10,
        backgroundColor:'rgba(100,100,100,0.1)',
        textAlign:'center',
        paddingVertical:2,
        height:25
    }
})

export default Attendence;