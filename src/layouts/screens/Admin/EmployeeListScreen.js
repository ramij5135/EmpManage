//import liraries
import React, { useState, useEffect, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, BackHandler, ActivityIndicator,Alert } from 'react-native';
import { Dialog } from 'react-native-paper';
import { COLORS } from '../../../utils/globalStyles';
import axios from 'axios';
import { baseURL } from '../../../utils/config';
const btn = [
    {
        id: 0,
        name: 'View',
        color: '#002147'
    },
    {
        id: 1,
        name: 'Edit',
        color: '#91c2dd'
    },
    {
        id: 2,
        name: 'Delete',
        color: '#ff4040'
    },
]
const EmployeeListScreen = ({ navigation }) => {
    const [empList, setEmpList] = useState()
    const [data2, setData] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`${baseURL}JobMasterApi/FetchEmployee`).then((res) => {
            // console.log('res=====>',res.data.data);
            setEmpList(res?.data?.data)
            setLoading(false)
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
    const Remove = (id) => {
        const data = empList.filter((elem) => {
            if (elem.ID !== id) {
                return elem
            }
        })
        Alert.alert('', 'Are you want to delete', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => {return setEmpList(data)}},
          ])
        
    }
    return (
        <>{
            loading ? <ActivityIndicator size={'large'} color={'green'} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} /> :

                <ScrollView style={styles.container}>
                    {
                        empList?.map((item2) => {
                            // console.log('item=========>', item2);
                            return (

                                <View key={item2?.ID?.toString()} style={styles.list_container}>
                                    <Image style={styles.profileImg} source={item2.ImgUrl ? { uri: `https://demo38.gowebbi.in${item2.ImgUrl}` } : require('../../../assets/imgs/profile.jpg')} />
                                    <View style={styles.emp_NameView}>
                                        <Text>{item2.Item}</Text>
                                        <Text  >Email Id :- {item2.EmailId.substr(0, 18)}...</Text>
                                        <View style={styles.btnView}>
                                            {
                                                btn.map((data) => {
                                                    return (
                                                        <TouchableOpacity
                                                            onPress={() => data.id == 0 ? navigation.navigate('EmployeeDetailsScreen', { profileData: item2 })
                                                                :
                                                                data.id == 1 ? navigation.navigate('EditProfileScreen', { profileData: item2 }) :
                                                                    data.id == 2 ? Remove(item2?.ID) : undefined
                                                            }
                                                            key={data.name.toString()} style={[styles.btn, { backgroundColor: data.color }]} >
                                                            <Text style={{ color: data.name == 'Edit' ? 'black' : '#fff', fontFamily: 'Poppins-SemiBold' }}>{data.name}</Text>
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
        }
        </>

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
        justifyContent: 'space-between',
        marginTop: 5,
        width: '75%'
    },
    btn: {
        padding: 4,
        borderRadius: 5
    }
});
export default EmployeeListScreen;
