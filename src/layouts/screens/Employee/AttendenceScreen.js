import React, {useState} from "react";
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, Modal, TouchableOpacity } from "react-native";
import Header from "../../components/header";
import FullButton from '../../components/fullButton';
import { COLORS } from "../../../utils/globalStyles";
import { useSelector } from "react-redux";
import {Calendar} from 'react-native-calendars';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getMethod } from "../../../utils/helper";

const {width, height} = Dimensions.get('window');

const Attendence = () => {
    const [attendenceList, setattendenceList] = useState(useSelector(state => state.attendence.atnList))
    const attendenceData = useSelector(state => state.attendence.atnData[0])
    const userData = useSelector(state => state.auth.user)
    const Emp_Id = userData.ID;
    const [modalVisible, setModalVisible] = useState(false);
    const [fromdaysVisible, setFromdaysVisible] = useState(false)
    const [todaysVisible, setTodaysVisible] = useState(false)
    const [todays, setTodays] = useState('');
    const [fromdays, setFromDays] = useState('');

    const getSearchData = () => {
        try {
            getMethod(`EmployeeApi/AttendanceDatewiseList?Todate=${todays}&Fromdate=${fromdays}&Emp_Id=${Emp_Id}`).then(async (res) => {
                const data = res.data.AttendanceList;
                setattendenceList(data);
                setModalVisible(false)
            }).catch((error) => {
              console.log(error);
            })
        } catch (error) {
            console.log('error', error);
        }
    }

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
                    <FullButton btnTitle={'Select Month'} onPressName={() => setModalVisible(true)} />
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
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);

                }}>
                    <View style={styles.centeredView}>
                        <View style={[styles.modalView, {paddingBottom: fromdays && todays ? 0 : 25}]}>
                            <Text style={styles.modalText}>Choose date to see your attendence!</Text>
                            <View style={styles.modalBtnSection}>
                                <TouchableOpacity style={styles.modalBtn} onPress={()=> setFromdaysVisible(!fromdaysVisible)}>
                                    {
                                        fromdays ?
                                    
                                    <Text style={styles.modalBtnText}>{fromdays}</Text> :
                                    <Text style={styles.modalBtnText}>From Days</Text>
                                    }
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.modalBtn} onPress={()=> setTodaysVisible(!todaysVisible)}>
                                    {
                                        todays ?
                                        <Text style={styles.modalBtnText}>{todays}</Text> : 
                                        <Text style={styles.modalBtnText}>To Days</Text>
                                    }
                                </TouchableOpacity>
                            </View>
                            {
                                fromdaysVisible  ? <View>
                                    <Calendar 
                                        onDayPress={day => {
                                            setFromDays(day.dateString)
                                            setFromdaysVisible(false)
                                        }}
                                    /> 
                                </View> : todaysVisible ? <View>
                                    <Calendar 
                                        onDayPress={day => {
                                            setTodays(day.dateString)
                                            setTodaysVisible(false)
                                        }}
                                    /> 
                                </View> : null
                            }
                            {
                                fromdays && todays && <View style={{width:'100%'}}>
                                <FullButton btnTitle={'Submit'} onPressName={()=> getSearchData()} />
                                </View>
                            }
                            
                            
                            <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                                setModalVisible(!modalVisible)
                                setFromdaysVisible(false)
                                setTodaysVisible(false)
                                }}>
                                <Ionicons name="close" size={25} color={COLORS.red} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
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
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:COLORS.grey,
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        paddingTop: 25,
        paddingHorizontal:10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 20,
          height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5,
        // height:height*0.5,
        width:width*0.8
    },
    modalText:{
        fontSize:14,
        fontWeight:'500',
        paddingBottom:5
    },
    modalBtnSection:{
        flexDirection:'row',
        padding:3,
    },
    modalBtn:{
        marginHorizontal:5,
        backgroundColor:COLORS.primary,
        paddingVertical:3,
        paddingHorizontal:8,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    }, 
    modalBtnText:{
        color:COLORS.blue,
        fontWeight:'400'
    },
    dateView:{
        flexDirection:'row',
        // padding:3
    },
    dateViewText:{
        marginHorizontal:5,
        paddingHorizontal:8
    },
    button:{
        position:'absolute',
        top:-5,
        right:0,
        padding:5,
        paddingHorizontal:10
    }
})

export default Attendence;