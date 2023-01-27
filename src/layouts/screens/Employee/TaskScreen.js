import React from "react";
import { useEffect } from "react";
import { View, StyleSheet, Image, Text, ScrollView, Alert } from "react-native";
import { COLORS } from "../../../utils/globalStyles";
import Header from "../../components/header";
import { useSelector } from "react-redux";
import { getMethod } from "../../../utils/helper";
import { useState } from "react";

const TaskScreen = () => {
    const [taskList, setTaskList] = useState([]);
    const Emp = useSelector(state => state.user);
    const Emp_Id = Emp.ID;

    useEffect(()=>{
        try {
            getMethod(`EmployeeApi/Tasklist?Emp_Id=${Emp_Id}`).then((res) =>{
                const resData = res.data.Tasklist[0];
                setTaskList(resData);
            }).catch((error) => {
                console.log('hi');
            })
        } catch (error) {
            Alert.alert("Error", 'Something went wrong');
        }
    }, [])

    console.log('task list======>', taskList);

    return(
        <View style={styles.container}>
            <Header title='Task' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Image style={styles.imgIcon} source={require('../../../assets/imgs/build.png')} />
                    <Text style={styles.attendence}>Today's Tasks Details</Text>
                </View>
                <View style={{paddingHorizontal:20, paddingVertical:10}}>
                    <Text style={[styles.date,{paddingVertical:10}]}>22-05-2022</Text>
                    <View style={styles.detail}>
                        <Text style={styles.date}>Visit Bagha Beach in Goa</Text>
                        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam qui, tenetur optio vel, deserunt dolores rem nobis a quos distinctio laborum, magni </Text>
                    </View>
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
    }
});

export default TaskScreen;