//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { COLORS } from '../../../utils/globalStyles';

// create a component
const EmployeeDetailsScreen = (props) => {
    console.log('props======?>', props);
    return (
        <View style={styles.container}>
            <View style={styles.imgView}>
                
            </View>
            <View style={{ position:'absolute',zIndex:1,top:20,left:'40%',right:'40%', }}>
                    <Image style={styles.img} source={require('../../../assets/imgs/profile.jpg')} />
                   
                </View>
            <ScrollView style={{ backgroundColor: 'red', borderTopLeftRadius: 50, borderTopRightRadius: 50,margin:10, }}>
            <Text style={{ fontFamily: 'Poppins-SemiBold', textAlign: 'center', fontSize: 16 }}>Raja Chowdhury</Text> 
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // padding: 12,
        flex: 1,
        // backgroundColor:'red'
    },
    img: {
        height: 130,
        width: 130,
        resizeMode: 'contain',
        borderRadius: 40,
        alignSelf: 'center',
        marginBottom: 10,

    },
    imgView: {
        // flex: 0.35,
        height: '38%',
        backgroundColor: COLORS.primary,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        padding: 10,
        // zIndex:1

    }

});

//make this component available to the app
export default EmployeeDetailsScreen;
