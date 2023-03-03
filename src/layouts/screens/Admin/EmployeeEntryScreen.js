import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity, Alert, TouchableHighlight, ToastAndroid } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import DatePicker from 'react-native-date-picker'
import FullTextInput from "../../components/textInput";
import { Dropdown } from 'react-native-element-dropdown';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import axios from "axios"
import { baseURL } from "../../../utils/config";
import { Avatar } from "react-native-paper";
import { launchImageLibrary } from "react-native-image-picker";
import PlacePicker from "../../components/PlacePicker";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Inputs from "../../components/inputs";
import Date_Picker from "../../components/Date_Picker";
import { COLORS } from "../../../utils/globalStyles";
import moment from 'moment';

const Active = ["TRUE", "FALSE"]
const EmployeeEntryScreen = ({ navigation }) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [doj, setDoj] = useState(new Date())
    const [dojopen, setdojopen] = useState(false)
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [statedata, setStatedata] = useState([]);
    const [citydata, setCitydata] = useState([]);
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);
    const [address, setaddress] = useState();
    const [pic, setPic] = useState('');
    const [lat, setLat] = useState();
    const [lang, setLang] = useState();
    const [dateOfBirth, setDateOfBirth] = useState()
    const [dojd, setDojd] = useState()
    console.log('dateOfBirth========>', dateOfBirth);
    console.log('dojd========>', dojd);
    // console.log('pic==========>',pic);
    //for show toast msg

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
            }
        });
    }


    const [input, setInput] = useState({
        emailId: '',
        userName: '',
        contactNumber: '',
        designation: '',
        pinCode: '',
        setPassword: '',
        // lat: '',
        // long: '',
    })
    // const getCurrentLocation = (address, lat, lang) => {
    //     // console.log('address======>',address);
    //     setaddress(address)
    //     // console.log('lat======>',lat);
    //     setLat(lat)
    //     setLang(lang)

    //     // console.log('lang======>',lang);
    // }
    const handleOnChange = (text, input) => {
        setInput(prevState => ({ ...prevState, [input]: text }))
    }
    useEffect(() => {
        var axios = require('axios');

        var config = {
            method: 'get',
            url: `${baseURL}RegisterApi/FetchState`,
        };
        axios(config)
            .then(function (response) {
                // console.log('response================>',response);
                var count = Object.keys(response.data.data).length;
                let countArray = [];
                for (var i = 0; i < count; i++) {
                    countArray.push({
                        value: response.data.data[i]?.id,
                        label: response.data.data[i]?.State
                    })
                }
                setStatedata(countArray)

            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    const handlArray = (stateCode) => {
        var axios = require('axios');
        var config = {
            method: 'get',
            url: `${baseURL}RegisterApi/FetchCity?SID=${stateCode}`,
            headers: {
            }
        };
        axios(config)
            .then(function (response) {
                var count = Object.keys(response.data.data).length;
                let cityArray = [];
                for (var i = 0; i < count; i++) {
                    cityArray.push({
                        value: response.data.data[i]?.id,
                        label: response.data.data[i]?.City
                    })
                }
                setCitydata(cityArray)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    // Geocoder.init("AIzaSyD6WfSwXXdRhyMtTgLU9KY1XGnMdiOcbek");
    // const map=()=>{
    //     Geolocation.getCurrentPosition(info => {
    //         // console.log('info.coords.latitude===',info.coords.latitude);
    //         // setInput((prev) => ({...prev,lat : info.coords.latitude}))
    //         if(info.coords.longitude){
    //             // console.log('info.coords.longitude===',info.coords.longitude);
    //         // setInput((prev) => ({...prev,long : info.coords.longitude}))
    //         }
    //         Geocoder.from(info.coords.latitude,info.coords.longitude)

    //             .then(json => {
    //                 var location = json.results[0].address_components[3].long_name;
    //         //   setaddress(location)
    //             })
    //             .catch(error => console.log('error============>',error));
    //       })
    // }
    // useEffect(()=>{
    //     map()
    // },[])
    const Register = async () => {
        var data = {
            EmailId: input.emailId,
            UserName: input.userName,
            Password: input.setPassword,
            ContactNumber: input.contactNumber,
            Dob: dateOfBirth,
            Doj: dojd,
            Designation: input.designation,
            State: state,
            City: city,
            Pin: input.pinCode,
            CurrentLocation: address,
            Latitude: lat,
            Longitude: lang,
            ImgUrl: pic
        };
        console.log('data========>', data);
        const response = await axios.post(`${baseURL}RegisterApi/Register`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const responseData = await response.data;
        console.log('responseData=================>', responseData);
        if (responseData.status == "Success") {
            Alert.alert("Registration Sucessfull")
            navigation.navigate('AdminScreen')
        } else {
            Alert.alert("Wrong Details")

        }
    }
    //   console.log('input.lat====>',lat);
    //   console.log('input.long====>',lang);
    //   console.log('address====>',address);
    //   console.log('input===========22====>',input);
    const getLoc = (data, details) => {
        console.log('details=======>', details);
        setaddress(details?.formatted_address);
        setLat(details?.geometry?.location?.lat)
        setLang(details?.geometry?.location?.lng)
        // getCurrentLocation(address, lat, lang)
    }
    const Pick_Date = (date) => {
        // console.log('date2 544545',date2);
        console.log('hoiiii');

        // console.log('new date of birth====>',date);
        setDateOfBirth(moment(date).format('DD/MM/YYYY'))

    }

    const Pick_Date1 = (date) => {
        // console.log('date2 544545',date2);
        console.log('dojj 544545', date);

        // console.log('new date of birth====>',date);
        setDojd(moment(date).format('DD/MM/YYYY'))

    }


    return (
        <>
            <View style={styles.container} >
                <View style={{ backgroundColor: COLORS.white, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, marginBottom: 10, padding: 10 }}>
                    <View style={styles.imageBox}>
                        <Avatar.Image
                            size={100}
                            source={pic ? { uri: 'data:image/png;base64,' + pic } : require('../../../assets/imgs/user.png')}
                        />
                        <TouchableHighlight
                            underlayColor='rgba(0,0,0,0)'
                            onPress={() => uploadImage()}
                        >
                            <Image style={{ height: 22, width: 22, borderRadius: 20, position: 'absolute', right: 19, top: -29 }} source={require('../../../assets/imgs/penIcon.png')} />
                        </TouchableHighlight>
                    </View>
                </View>
                <ScrollView keyboardShouldPersistTaps='handled' nestedScrollEnabled={true} >
                    <View style={{ paddingBottom: 30 }}>


                        <Inputs title={'Email Id'} onChangeText={(text) => handleOnChange(text, 'emailId')} />
                        <Inputs title={'Employee name'} onChangeText={(text) => handleOnChange(text, 'userName')} />
                        <Inputs onChangeText={(text) => handleOnChange(text, 'contactNumber')} title={'Contact number'} />
                        <View style={styles.staticData_section}>
                            <Text style={styles.textStyle}>Date Of Birth :-</Text>
                            <Date_Picker Pick_Date={Pick_Date} />
                        </View>
                        <View style={styles.staticData_section}>
                            <Text style={styles.textStyle}>Date of joining :-</Text>
                            <Date_Picker Pick_Date={Pick_Date1} />
                        </View>
                        <Inputs onChangeText={(text) => handleOnChange(text, 'designation')} title={'Designation'} />
                        <View style={styles.staticData_section}>
                            <Text style={styles.textStyle}>State :-</Text>
                            <Dropdown
                                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                itemTextStyle={styles.itemTextStyle}
                                data={statedata}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocus ? 'Select State' : '...'}
                                searchPlaceholder="Search..."
                                value={statedata}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setValue(item.value);
                                    handlArray(item.value)
                                    console.log('item label===========', item.label);
                                    setState(item.label)
                                    setIsFocus(false);
                                }}
                            />
                        </View>
                        <View style={styles.staticData_section}>
                            <Text style={styles.textStyle}>City:-</Text>
                            <Dropdown
                                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                itemTextStyle={styles.itemTextStyle}
                                data={citydata}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocus ? 'Select City' : '...'}
                                searchPlaceholder="Search..."
                                value={citydata}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setValue(item.value);
                                    console.log('itemlabel1===========', item.label);
                                    setCity(item.label)
                                    // setInput({citys:item.label})
                                    setIsFocus(false);
                                }}
                            />
                        </View>
                        <Inputs onChangeText={(text) => handleOnChange(text, 'pinCode')} title={'Pin Code'} />
                        <View style={styles.staticData_section}>
                            <Text style={styles.textStyle}>Current Location :-</Text>
                            <GooglePlacesAutocomplete
                                // ref={ref}
                                // placeholder={'hiiiiiiii'}
                                onPress={getLoc}
                                fetchDetails={true}
                                query={{
                                    key: 'AIzaSyD6WfSwXXdRhyMtTgLU9KY1XGnMdiOcbek',
                                    language: 'en',
                                }}
                                styles={{
                                    textInputContainer: {
                                        // backgroundColor:COLORS.white,
                                    },
                                    textInput: {
                                        // height: 38,
                                        // // color: '#5d5d5d',
                                        // fontSize: 16,
                                        backgroundColor: COLORS.white,
                                        borderBottomColor: COLORS.blue,
                                        borderBottomWidth: 1
                                    },
                                    //   container:{
                                    //     backgroundColor:COLORS.White
                                    //   }
                                }}
                            />
                        </View>
                        <Inputs onChangeText={(text) => handleOnChange(text, 'setPassword')} title={'Set Password'} />
                        <TouchableOpacity onPress={Register} style={styles.LoginButton} >
                            <Text style={styles.LoginText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.profileBackGroundColor,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,

    },
    headersText: {
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 32
    },
    text: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        marginBottom: 4,
        color: '#414242',
        marginTop: 5
    },
    imageBox: {
        alignSelf: 'center',
        // marginBottom: 10,
        // backgroundColor:'red',
    },
    TextInput: {
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 10,
        borderColor: '#8d8f8e',
        borderWidth: 1,
        marginBottom: 10,
        fontSize: 20
    },
    LoginButton: {
        height: 50,
        backgroundColor: '#2d52e3',
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    LoginText: {
        fontFamily: 'Poppins-SemiBold',
        color: '#fff'
    },
    dateview: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#8d8f8e',
        paddingHorizontal: 10
    },
    dropdown: {
        height: 45,
        borderColor: 'gray',
        // borderWidth: 0.5,
        borderRadius: 8,
        // paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.blue,

        // marginBottom: 20,
        // backgroundColor:COLORS.white,

    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 18,
        color: 'black'
    },
    placeholderStyle: {
        fontSize: 18,
        color: 'black'
    },
    selectedTextStyle: {
        fontSize: 18,
        color: 'black'
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    itemTextStyle: {
        fontSize: 18,
        color: 'black'
    },
    iconStyle: {
        fontSize: 18
    },
    textStyle: {
        // // fontFamily: 'Poppins-SemiBold',
        // fontSize: 14,
        // // color: '#3e403f',
        // // marginBottom: 8,
        color: COLORS.black,
    },
    staticData_section: {
        backgroundColor: COLORS.white,
        // // padding: 8,
        paddingHorizontal: 4,
        // borderRadius: 10,
        marginBottom: 8,
        // paddingVertical:7,
        borderRadius: 10
    },

})
export default EmployeeEntryScreen;     