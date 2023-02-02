import React, { useEffect,useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Text, View, StyleSheet, Image, TouchableOpacity,ScrollView,BackHandler } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
const AdminScreen = ({ navigation, route }) => {
    const [response,setResponse]=useState()
    console.log('route==================>', response);
    useEffect(() => {
        const backAction = () => {
            AsyncStorage.getItem('token').then((res) => {
                setResponse(res)
            },)
            response ? navigation.navigate('Login') : navigation.navigate('AdminScreen')
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
    
        return () => backHandler.remove();
      }, []);
 
        

    
    const DATA = [

        {
            id: 0,
            name: 'Employee Registration'
        },
        {
            id: 1,
            name: 'Asign Work'
        },
        {
            id: 2,
            name: 'Vichel Information'
        },
        {
            id: 3,
            name: 'List Of Employee'
        },
    ]
    const Navigation = (item) => {
        {
            item.id == 0 ? navigation.navigate('EmployeeEntryScreen') :
            item.id == 1 ? navigation.navigate('AsignWorkScreen') :
            item.id == 2 ?  navigation.navigate('VicheleScreen'):
            navigation.navigate('EmployeeListScreen')
        }
    }
    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.heading} >
                    <Image style={styles.Logoimg} source={require('../../../assets/imgs/SwadeshSoftware.png')} />

                    <Ionicons name="notifications-outline" size={34} />
                </View>
                <Image style={styles.Image} source={require('../../../assets/imgs/Rectangle.png')} />
                <View style={styles.employeeSection}>
                    {
                        DATA.map((item) => {
                            return (
                                <View key={item.id.toString()} style={{}}>
                                    <TouchableOpacity style={{ padding: 5 }} onPress={() => Navigation(item)}>
                                        <Image style={styles.employeeImg} source={require('../../../assets/imgs/employee2.png')} />
                                        <Text numberOfLines={1} style={styles.employeeText}>{item.name}</Text>
                                    </TouchableOpacity>
                                </View>

                            )
                        })
                    }

                    {/* <TouchableOpacity onPress={()=>navigation.navigate('AsignWorkScreen')}>
                        <Image style={styles.employeeImg} source={require('../../../assets/imgs/employee2.png')} />
                        <Text style={styles.employeeText}>Asign Work </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('VicheleScreen')}>
                    <Image style={styles.employeeImg} source={require('../../../assets/imgs/employee2.png')} />
                        <Text numberOfLines={1} style={[styles.employeeText]}>Vichel Information </Text>
                    </TouchableOpacity> */}
                </View>
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {

    },
    Logoimg: {
        height: 80,
        width: 100,
        borderRadius: 15
    },
    Image: {
        width: '100%',
        height: 220,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        position: 'absolute',
        top: 0
    },
    headersText: {
        fontSize: 30,
        fontFamily: 'Poppins-SemiBold',
        color: '#fff',
        marginBottom: 10
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        zIndex: 5
    },
    employeeImg: {
        height: 80,
        width: 80,
        borderRadius: 80,
        resizeMode: 'contain',
    },
    employeeSection: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 20,
        margin: 15
    },
    employeeText: {
        color: '#414242',
        fontFamily: 'Poppins-SemiBold',
        width: 80
    }
})
export default AdminScreen;  