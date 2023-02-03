import React from "react";
import { useEffect } from "react";
import { View, StyleSheet, Image, Text, ScrollView, Alert } from "react-native";
import { COLORS, height, width } from "../../../utils/globalStyles";
import Header from "../../components/header";
import { useSelector } from "react-redux";
import { getMethod } from "../../../utils/helper";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Loader from "../../components/loader";

const TaskScreen = () => {
    const [taskList, setTaskList] = useState([]);
    const [loading, setLoading] = useState(false);
    const Emp = useSelector(state => state.auth.user);
    const Emp_Id = Emp.ID;

    useEffect(()=>{
        try {
            setLoading(true);
            getMethod(`EmployeeApi/Tasklist?Emp_Id=${Emp_Id}`).then((res) =>{
                console.log('res', res);
                const resData = res.data.Tasklist;
                setTaskList(resData);
                setLoading(false);
            }).catch((error) => {
                console.log(error);
            })
        } catch (error) {
            Alert.alert("Error", 'Something went wrong');
        }
    }, [])


    return(
        <View style={styles.container}>
            <Loader visible={loading} />
            <Header title='Task' />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flex:1}}>
                <View style={styles.header}>
                    <Image style={styles.imgIcon} source={require('../../../assets/imgs/build.png')} />
                    <Text style={styles.attendence}>Today's Tasks Details</Text>
                </View>
                <View style={[styles.taskSection ,{ flex:taskList?.length < 0 ? null : 1}]}>
                    {/* <Text style={[styles.date,{paddingVertical:10}]}>22-05-2022</Text> */}
                    {
                        taskList?.length > 0 ?  
                            taskList?.map((item, index) => {
                                return (
                                    <View style={styles.detail} key={index}>
                                        <Text style={styles.date}>{item.JobName}</Text>
                                        <Text style={styles.description}>{item.Note}</Text>
                                    </View>
                                )
                            }) : 
                            <View style={styles.taskContainer}>
                                <Text style={styles.taskWord}>No Task Available</Text>
                                <Image style={styles.emoji} source={require('../../../assets/imgs/happy.png')} />
                            </View>
                    }
                </View>
            </ScrollView>
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
    date:{
        fontSize:18,
        fontWeight:'bold',
        color:COLORS.black
    },
    description:{
        fontSize:14,
        lineHeight:20,
        paddingTop:5,
        paddingBottom:10,
        borderBottomWidth:0.5,
        borderBottomColor:COLORS.grey
    },
    detail:{
        paddingVertical:5
    },
    taskSection:{
        paddingHorizontal:20, 
        paddingVertical:10,
    },
    taskContainer:{
        alignSelf:'center', justifyContent:'center', flex:1, alignItems:'center'
    },
    taskWord: {
        fontSize:22, letterSpacing:0.5, lineHeight:19, fontWeight:'bold', marginVertical:15
    },
    emoji:{
        height:height*0.3,
        width:width*0.5,
        resizeMode:'contain'
    }
});

export default TaskScreen;