//import liraries
import React, { useState, useEffect, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, BackHandler } from 'react-native';
import { Dialog } from 'react-native-paper';
import { COLORS } from '../../../utils/globalStyles';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons'
// create a component
const btn = [
    {
        id: 0,
        name: 'View',
        color:'green'
    },
    {
        id: 1,
        name: 'Edit',
        color:'yellow'
    },
    {
        id: 2,
        name: 'Delete',
        color:'red'
    },
]
const EmployeeListScreen = ({ navigation }) => {
    const [empList, setEmpList] = useState()
    useEffect(() => {
        axios.get('https://demo38.gowebbi.in/api/JobMasterApi/FetchEmployee').then((res) => {
            // console.log('res=====>',res.data.data);
            setEmpList(res?.data?.data)
        }
        )
    }, [])
    useEffect(() => {
        const backAction = () => {
            navigation.goBack()
            return true
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);
    return (
        <ScrollView style={styles.container}>
            {
                empList?.map((item2) => {
                    // console.log('item=========>', item2);
                    return (

                        <View key={item2?.ID?.toString()} style={styles.list_container}>
                            <Image style={styles.profileImg} source={require('../../../assets/imgs/profile.jpg')} />
                            <View style={styles.emp_NameView}>
                                <Text>{item2.Item}</Text>
                                <Text >Email Id :- {item2.EmailId.substr(0, 14)}...</Text>
                                <View style={styles.btnView}>
                                    {
                                        btn.map((data) => {
                                            return (
                                                <TouchableOpacity
                                                onPress={()=>navigation.navigate('EmployeeDetailsScreen',{profileData:item2})}
                                                 key={data.name.toString()} style={[styles.btn,{backgroundColor:data.color}]} >
                                                    <Text style={{ color:data.name=='Edit' ? 'black' : '#fff', fontFamily: 'Poppins-SemiBold' }}>{data.name}</Text>
                                                </TouchableOpacity>
                                            )
                                        })
                                    }

                                    {/* <TouchableOpacity style={[styles.btn, { backgroundColor: 'yellow' }]}>
                                            <Text style={{ fontFamily: 'Poppins-SemiBold' }} >Edit</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.btn, { backgroundColor: 'red', fontFamily: 'Poppins-SemiBold' }]}>
                                            <Text style={{ color: '#fff', fontFamily: 'Poppins-SemiBold' }}>Delete</Text>
                                        </TouchableOpacity> */}
                                </View>
                            </View>
                        </View>

                    )
                })
            }

        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 10

    },
    img_IconView: {

    },
    list_container: {
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        padding: 5,
        marginBottom: 8
    },
    profileImg: {
        height: 70,
        width: 70,
        borderRadius: 40,
        resizeMode: 'contain'
    },
    emp_NameView: {
        paddingLeft: 7
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 5,
        width:'80%'
    },
    btn: {
        padding: 4,
        borderRadius: 5
    }
});
export default EmployeeListScreen;
