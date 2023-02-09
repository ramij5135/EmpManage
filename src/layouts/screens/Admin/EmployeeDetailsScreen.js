import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { COLORS } from '../../../utils/globalStyles';
import moment from 'moment';
const EmployeeDetailsScreen = ({ navigation, route }) => {
    console.log('props======?>', route.params.profileData);
    const empDetails = route.params?.profileData
    const dateOfJoin = moment(empDetails.Doj).format('DD/MM/YYYY')
    const dateOfBirth = moment(empDetails.Dob).format('DD/MM/YYYY')
    console.log('ImgUrl',empDetails.ImgUrl);
    return (
        <View style={styles.container}>
            <View style={styles.imgView} />

            <View style={styles.profileData_container}>
                <View></View>
                <View style={{ position: 'absolute', top: -70, zIndex: 1, left: '-40%', right: '-40%' }}>
                    <Image style={styles.img} source={empDetails.ImgUrl ? { uri:`https://demo38.gowebbi.in${empDetails.ImgUrl}` } : require('../../../assets/imgs/profile.jpg')} />
                </View>
                <ScrollView>
                    <Text style={[styles.profile_datastyle, { textAlign: 'center', marginTop: 7 }]}>{empDetails.Item}</Text>
                    {/* <Text style={[styles.profile_datastyle,]}>Raja Chowdhury</Text> */}
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textStyle} >Employee Id :-</Text>
                        <Text numberOfLines={1} style={styles.textStyle}> {empDetails.ID}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textStyle}>Email Id :-</Text>
                        <Text numberOfLines={1} style={[styles.textStyle, { width: '75%' }]}> {empDetails.EmailId}</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textStyle}>Designation :-</Text>
                        <Text style={styles.textStyle}> {empDetails.Designation}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textStyle}>Date Of Join :-</Text>
                        <Text style={styles.textStyle}> {dateOfJoin}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textStyle}>Date Of Birth :-</Text>
                        <Text style={styles.textStyle}> {dateOfBirth}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textStyle}>Contact Number :-</Text>
                        <Text style={styles.textStyle}> {empDetails.ContactNumber}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textStyle} >Current Address :-</Text>
                        <Text numberOfLines={1} style={[styles.textStyle,{width:'54%'}]}> {empDetails.CurrentLocation}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textStyle}>City :-</Text>
                        <Text style={styles.textStyle}> {empDetails.City}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textStyle}>Pin Code :-</Text>
                        <Text style={styles.textStyle}> {empDetails.Pin}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textStyle}>State :-</Text>
                        <Text style={styles.textStyle}> {empDetails.State}</Text>
                    </View>
                </ScrollView>
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        height: 130,
        width: 130,
        resizeMode: 'contain',
        borderRadius: 20,
        alignSelf: 'center',
        marginBottom: 10,
    },
    imgView: {
        height: 170,
        backgroundColor: COLORS.primary,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        padding: 10,
    },
    profileData_container: {
        backgroundColor: COLORS.profileBackGroundColor,
        margin: 10,
        paddingTop: '17%',
        marginTop: -80,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        padding: 5,
    },
    profile_datastyle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: '#fff'
    },
    textStyle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        color: '#3e403f',
        marginBottom:6
    }

});
export default EmployeeDetailsScreen;
