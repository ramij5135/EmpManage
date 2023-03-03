import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import Inputs from '../../components/inputs';
import { COLORS, height } from '../../../utils/globalStyles';
import moment from 'moment';
import Date_Picker from '../../components/Date_Picker';
import axios from 'axios';
import { baseURL } from '../../../utils/config';
import PlacePicker from '../../components/PlacePicker';
import FullButton from '../../components/fullButton';
import ImagePicker from 'react-native-image-crop-picker';
// import { baseURL } from "../../../utils/config";
import { Modal } from "react-native-paper";
import { launchImageLibrary, launchCamera } from "react-native-image-picker";
const EditProfileScreen = ({ route, navigation }) => {
    const empDetails = route.params?.profileData
    const dateOfJoin = moment(empDetails.Doj).format('DD/MM/YYYY')
    const fomatedOldDateOfBirth = moment(empDetails.Dob).format('DD/MM/YYYY')
    const [dateOfBirth, setDateOfBirth] = useState()
    const [lat, setLat] = useState();
    const [lang, setLang] = useState();
    const [address, setaddress] = useState();
    const [pic, setPic] = useState('');
    const [image, setImage] = useState('');
    console.log('empDetails-============>', empDetails);
    const updateLat = lat ? lat : empDetails.Latitude
    const updateAddress = address ? address : empDetails.CurrentLocation
    const updatelang = lang ? lang : empDetails.Longitude
    const NewdateOfBirth2 = dateOfBirth ? dateOfBirth : fomatedOldDateOfBirth
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const onSelectimage = () => {
        ImagePicker.openPicker({
            // width: 300,
            // height: 400,
            cropping: false,
            includeBase64: true

        }).then(image => {
            console.log('image======>', image);
            setImage(image)
        });
    }
    const setToastMsg = msg => {
        ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
    }
    const uploadImage = () => {
        let options = {
            mediaType: 'photo',
            quality: 1,
            includeBase64: true
        };
        launchImageLibrary(options, response => {
            console.log('options====>', options);
            console.log('response====>', response.didCancel);

            if (response.didCancel) {
                setToastMsg('Cancelled image selection');
            } else if (response.errorCode == 'permission') {
                setToastMsg('Permission not satisfied');
            } else if (response.errorCode == 'others') {
                setToastMsg(response.errorMessage);
            } else if (response.assets[0].fileSize > 2097152) {
                Alert.alert(
                    'Maximum size exceeded',
                    'Please choose image under 2 mb',
                    [{ text: 'OK' }]
                );
            } else {
                setPic(response.assets[0].base64);
                console.log('hiiiii');

            }
        });
    }
    const [text, setText] = useState({
        Id: empDetails.ID,
        EmailId: empDetails.EmailId,
        Doj: dateOfJoin,
        EmpName: empDetails.UserName,
        Designation: empDetails.Designation,
        // Dob: NewdateOfBirth2,
        ContactNumber: empDetails.ContactNumber,
        City: empDetails.City,
        PinCode: empDetails.Pin,
        State: empDetails.State,
        Password: empDetails.Password
    })
    const [value, setValue] = useState(empDetails.CurrentLocation)
    const handleOnchange = (text, input) => {
        setText(pevState => ({ ...pevState, [input]: text }))
    }
    // console.log('dateOfBirth New======>',dateOfBirth);
    const Pick_Date = (date) => {
        // console.log('date2 544545',date2);
        // console.log('new date of birth====>',date);
        setDateOfBirth(moment(date).format('DD/MM/YYYY'))
    }
    const getCurrentLocation = (address, lat, lang) => {
        setaddress(address)
        setLat(lat)
        setLang(lang)
    }
    const UpdateProfile = () => {
        var data = {
            ID: text.Id,
            EmailId: empDetails.EmailId,
            UserName: text.EmpName,
            Password: text.Password,
            ContactNumber: text.ContactNumber,
            Dob: NewdateOfBirth2,
            Doj: dateOfJoin,
            Designation: text.Designation,
            State: text.State,
            City: text.City,
            Pin: text.PinCode,
            CurrentLocation: updateAddress,
            Latitude: updateLat,
            Longitude: updatelang,
            ImgUrl: image.data
        };
        console.log('data=========>', data);
        axios.post(`${baseURL}EmployeeApi/EditProfile`, data).then((res) => {
            console.log(res.data);
            if (res.data.status == 'Success') {
                showModal()
            }

        }
        )
    }
    return (
        <View style={styles.container} >
            <View style={styles.backgrondColor} />
            <>
                <Image source={image ? { uri: `data:${image.mime};base64,${image.data}` } : empDetails.ImgUrl ? { uri: `https://demo38.gowebbi.in${empDetails.ImgUrl}` } : require('../../../assets/imgs/profile.jpg')} style={styles.img} />
                {/* <Image source={{uri: `data:${image.mime};base64,${image.data}`}} style={styles.img} /> */}
                <TouchableOpacity onPress={() => onSelectimage()} style={{ position: 'absolute', top: 151, right: 105 }}>
                    <Image style={{ height: 27, width: 27,borderRadius:30 }} source={require('../../../assets/imgs/editIcon.png')} />

                </TouchableOpacity>
                <ScrollView keyboardShouldPersistTaps='handled' style={{ padding: 10, }}>
                    {/* <View style={styles.staticData_section}>
                        <Text style={styles.textStyle}>Email Id :-</Text>
                        <Text numberOfLines={1} style={[styles.textStyle, { width: '75%' }]}> {empDetails.EmailId}</Text>
                    </View> */}
                    <View style={styles.staticData_section}>
                        <Text style={styles.textStyle}>Email Id :-</Text>
                        <Text style={styles.textStyle}>{empDetails.EmailId}</Text>
                    </View>
                    <View style={styles.staticData_section}>
                        <Text style={styles.textStyle}>Date Of Join :-</Text>
                        <Text style={styles.textStyle}>{dateOfJoin}</Text>
                    </View>

                    {/* <Text style={styles.textStyle} >Employee Name :-</Text> */}
                    <Inputs title={'Employee Name :-'} value={text.EmpName} onChangeText={(text) => handleOnchange(text, 'EmpName')} />

                    {/* <Text style={styles.textStyle}>Designation :-</Text> */}
                    <Inputs title={'Designation :-'} value={text.Designation} onChangeText={(text) => handleOnchange(text, 'Designation')} />
                   
                    <View style={styles.staticData_section}>
                        <Text style={styles.textStyle}>Date Of Birth :-</Text>
                        <Date_Picker dateOfBirth={empDetails.Dob} Pick_Date={Pick_Date} />
                    </View>
                    {/* <Text style={styles.textStyle}>Contact Number :-</Text> */}
                    <Inputs title={'Contact Number :-'} value={text.ContactNumber} onChangeText={(text) => handleOnchange(text, 'ContactNumber')} />

                    <Text style={styles.textStyle} >Current Address :-</Text>
                    {/* <Inputs value={text.CurrentAddress} onChangeText={(text) => handleOnchange(text, 'CurrentAddress')} /> */}
                    <PlacePicker predefinedPlaces={text.CurrentAddress} getCurrentLocation={getCurrentLocation} setAddressText={text.CurrentAddress} getAddressText={value?.toString()} />

                    {/* <Text style={styles.textStyle}>City :-</Text> */}
                    <Inputs title={'City :-'} value={text.City} onChangeText={(text) => handleOnchange(text, 'City')} />

                    {/* <Text style={styles.textStyle}>Pin Code :-</Text> */}
                    <Inputs title={'Pin Code :-'} value={text.PinCode} onChangeText={(text) => handleOnchange(text, 'PinCode')} />
                    {/* <Text style={styles.textStyle}>State :-</Text> */}
                    <Inputs title={'State :-'} value={text.State} onChangeText={(text) => handleOnchange(text, 'State')} />
                    {/* <Text style={styles.textStyle}>Password :-</Text> */}
                    <Inputs title={'Password :-'} value={text.Password} onChangeText={(text) => handleOnchange(text, 'Password')} />


                    <FullButton onPressName={UpdateProfile} btnTitle={'Update'} />
                </ScrollView>
                {/* <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> */}
                <Modal visible={visible} onDismiss={hideModal} >
                    <View style={styles.containerStyle}>
                        <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#36ba5e', fontSize: 17 }}>Profile update sucessfully..</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('AdminScreen')} style={styles.btn}>
                            <Text style={{ color: '#fff' }}>OK</Text>
                        </TouchableOpacity>


                    </View>
                </Modal>
                {/* </View> */}

            </>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        borderRadius: 10
    },
    container: {
        flex: 1,
        // marginBottom:10
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
        backgroundColor: COLORS.primary
    },
    backgrondColor: {
        backgroundColor: COLORS.orange,
        height: 130
    },
    img: {
        height: 100,
        resizeMode: 'contain',
        borderRadius: 10,
        marginTop: -55,
        alignSelf: 'center',
        marginBottom: 10,
        borderColor: 'black',
        borderWidth: 1,
        width: 100
    },
    editDataSection: {
        backgroundColor: COLORS.White,
        // flex:1
    },
    textStyle: {
        // // fontFamily: 'Poppins-SemiBold',
        // fontSize: 14,
        // // color: '#3e403f',
        // // marginBottom: 8,
        color:COLORS.black,
    },
    staticData_section: {
        backgroundColor:COLORS.white,
        // // padding: 8,
        paddingHorizontal:4,
        // borderRadius: 10,
        marginBottom:5,
        paddingVertical:7,
        borderRadius:10
    },
    btn: {
        backgroundColor: '#0891b2',
        paddingHorizontal: 30,
        paddingVertical: 5,
        marginTop: 10,
        borderRadius: 10
    }


});
export default EditProfileScreen;
