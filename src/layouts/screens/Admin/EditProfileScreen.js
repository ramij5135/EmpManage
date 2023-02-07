import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image,TouchableOpacity } from 'react-native';
import Inputs from '../../components/inputs';
import { COLORS, height } from '../../../utils/globalStyles';
import moment from 'moment';
import Date_Picker from '../../components/Date_Picker';
import axios from 'axios';
import { baseURL } from '../../../utils/config';
import PlacePicker from '../../components/PlacePicker';
import FullButton from '../../components/fullButton';
// import { baseURL } from "../../../utils/config";
import { Avatar } from "react-native-paper";
import { launchImageLibrary,launchCamera } from "react-native-image-picker";
const EditProfileScreen = ({ route }) => {
    const empDetails = route.params?.profileData
    const dateOfJoin = moment(empDetails.Doj).format('DD/MM/YYYY')
    const fomatedOldDateOfBirth = moment(empDetails.Dob).format('DD/MM/YYYY')
    const [dateOfBirth, setDateOfBirth] = useState()
    const [lat, setLat] = useState();
    const [lang, setLang] = useState();
    const [address, setaddress] = useState();
    const [pic, setPic] = useState('');
    console.log('pic-============>',);
    const updateLat = lat ? lat : empDetails.Latitude
    const updateAddress = address ? address : empDetails.CurrentLocation
    const updatelang = lang ? lang : empDetails.Longitude
    const NewdateOfBirth2 = dateOfBirth ? dateOfBirth : fomatedOldDateOfBirth

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
            console.log('options====>',options);
            console.log('response====>',response);

            if(response.didCancel){
                setToastMsg('Cancelled image selection');
            } else if(response.errorCode == 'permission'){
                setToastMsg('Permission not satisfied');
            } else if(response.errorCode == 'others'){
                setToastMsg(response.errorMessage);
            } else if(response.assets[0].fileSize > 2097152){
                Alert.alert(
                    'Maximum size exceeded', 
                    'Please choose image under 2 mb', 
                    [{text: 'OK'}]
                );
            } else {
                setPic(response.assets[0].base64);
            }
        });
    }
    // console.log('empDetails=ddddd=>',empDetails);
    const [text, setText] = useState({
        Id: empDetails.ID,
        EmailId: empDetails.EmailId,
        Doj: dateOfJoin,
        EmpName: empDetails.Item,
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
    // console.log('dateOfBirth2======>123',NewdateOfBirth2);
    // console.log('text=========>',text);
    const UpdateProfile = () => {
        var data = {
            Id: text.Id,
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
            ImgUrl: pic
        };
        console.log('data=========>', data);
        axios.post(`${baseURL}EmployeeApi/EditProfile`, data).then((res) => console.log('res=========>2', res))
    }
    return (
        <View style={styles.container} >
            <View style={styles.backgrondColor} />
            <>  
                
                {/* <Image source={require('../../../assets/imgs/profile.jpg')} style={styles.img} /> */}
                 <Image source={ pic ?{uri: `data:image/jpg;base64,${pic}`} : empDetails.ImgUrl ?{uri:`https://demo38.gowebbi.in${empDetails.ImgUrl}`}: require('../../../assets/imgs/profile.jpg')} style={styles.img} />
                <TouchableOpacity onPress={()=>uploadImage()} style={{position:'absolute',top:151,right:105}}>
                <Image style={{height:27,width:27}} source={require('../../../assets/imgs/editIcon.png')} />
                    
                </TouchableOpacity>
                <ScrollView keyboardShouldPersistTaps='handled' style={{ padding: 10}}>
                    <Text style={styles.textStyle}>Email Id :-</Text>
                    <View style={styles.staticData_section}>
                        <Text numberOfLines={1} style={[styles.textStyle, { width: '75%' }]}> {empDetails.EmailId}</Text>
                    </View>

                    <Text style={styles.textStyle}>Date Of Join :-</Text>
                    <View style={styles.staticData_section}>
                        <Text style={styles.textStyle}> {dateOfJoin}</Text>
                    </View>

                    <Text style={styles.textStyle} >Employee Name :-</Text>
                    <Inputs value={text.EmpName} onChangeText={(text) => handleOnchange(text, 'EmpName')} />

                    <Text style={styles.textStyle}>Designation :-</Text>
                    <Inputs value={text.Designation} onChangeText={(text) => handleOnchange(text, 'Designation')} />

                    <Text style={styles.textStyle}>Date Of Birth :-</Text>
                    {/* <Inputs value={text.Dob} onChangeText={(text) => handleOnchange(text, 'Dob')} /> */}
                    <Date_Picker dateOfBirth={empDetails.Dob} Pick_Date={Pick_Date} />

                    <Text style={styles.textStyle}>Contact Number :-</Text>
                    <Inputs value={text.ContactNumber} onChangeText={(text) => handleOnchange(text, 'ContactNumber')} />

                    <Text style={styles.textStyle} >Current Address :-</Text>
                    {/* <Inputs value={text.CurrentAddress} onChangeText={(text) => handleOnchange(text, 'CurrentAddress')} /> */}
                    <PlacePicker predefinedPlaces={text.CurrentAddress} getCurrentLocation={getCurrentLocation} setAddressText={text.CurrentAddress} getAddressText={value?.toString()} />

                    <Text style={styles.textStyle}>City :-</Text>
                    <Inputs value={text.City} onChangeText={(text) => handleOnchange(text, 'City')} />

                    <Text style={styles.textStyle}>Pin Code :-</Text>
                    <Inputs value={text.PinCode} onChangeText={(text) => handleOnchange(text, 'PinCode')} />

                    <Text style={styles.textStyle}>Password :-</Text>
                    <Inputs value={text.Password} onChangeText={(text) => handleOnchange(text, 'Password')} />

                    <Text style={styles.textStyle}>State :-</Text>
                    <Inputs value={text.State} onChangeText={(text) => handleOnchange(text, 'State')} />
                    <FullButton onPressName={UpdateProfile} btnTitle={'Update'} />
                </ScrollView>
            </>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginBottom:10
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
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
        borderColor:'black',
        borderWidth:1,
        width:100
    },
    editDataSection: {
        backgroundColor: COLORS.White,
        // flex:1
    },
    textStyle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        color: '#3e403f',
        marginBottom: 6
    },
    staticData_section: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10
    }


});
export default EditProfileScreen;
