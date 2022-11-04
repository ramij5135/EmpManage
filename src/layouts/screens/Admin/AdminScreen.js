import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
const AdminScreen = ({navigation}) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.heading} >
                <Image style={styles.Logoimg} source={require('../../../assets/imgs/SwadeshSoftware.png')} />

                    <Ionicons name="notifications-outline" size={34} />
                </View>
                <Image style={styles.Image} source={require('../../../assets/imgs/Rectangle.png')} />
                <View style={styles.employeeSection}>
                    <TouchableOpacity onPress={()=>navigation.navigate('EmployeeEntryScreen')}>
                    <Image style={styles.employeeImg} source={require('../../../assets/imgs/employeeImg.png')} />
                        <Text style={styles.employeeText}>Employee Entry </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('AsignWorkScreen')}>
                        <Image style={styles.employeeImg} source={require('../../../assets/imgs/employeeImg.png')} />
                        <Text style={styles.employeeText}>Asign Work </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image style={styles.employeeImg} source={require('../../../assets/imgs/employeeImg.png')} />
                        <Text numberOfLines={1} style={[styles.employeeText]}>Vichel Information </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {

    },
    Logoimg: {
        height: 80,
        width:100,
        // marginTop: 40,
        alignSelf: 'center',
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
        alignSelf: 'center'
    },
    employeeSection: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#fff',
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 10,
        marginTop: 50,
        padding:5
    },
    employeeText: {
        color: '#414242',
        fontFamily: 'Poppins-SemiBold',
        
    }
})
export default AdminScreen;  