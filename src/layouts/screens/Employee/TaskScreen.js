import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { COLORS } from "../../../utils/globalStyles";
import Header from "../../components/header";

const TaskScreen = () => {

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
                    <View style={styles.detail}>
                        <Text style={styles.date}>Visit Water Park in Durgapur</Text>
                        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam qui, tenetur optio vel, deserunt dolores rem nobis a quos distinctio laborum, magni </Text>
                    </View>
                    <Text style={[styles.date,{paddingVertical:10}]}>16-05-2022</Text>
                    <View style={styles.detail}>
                        <Text style={styles.date}>Visit Eco Park in Kolkata</Text>
                        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam qui, tenetur optio vel, deserunt dolores rem nobis a quos distinctio laborum, magni</Text>
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