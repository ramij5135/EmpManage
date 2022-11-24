import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import DatePicker from 'react-native-date-picker'
import FullTextInput from "../../components/textInput";
import { Dropdown } from 'react-native-element-dropdown';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import axios from "axios"
const Active = ["TRUE", "FALSE"]
const EmployeeEntryScreen = () => {
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
    const [address, setaddress] = useState()

    const [input, setInput] = useState({
        emailId: '',
        userName: '',
        contactNumber: '',
        designation: '',
        pinCode: '',
        setPassword: '',
        lat: '',
        long: '',
        // states:'',
        // citys:''
    })
    const handleOnChange = (text, input) => {
        setInput(prevState => ({ ...prevState, [input]: text }))
    }
    useEffect(() => {
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'https://demo38.gowebbi.in/api/RegisterApi/FetchState',
        };
        axios(config)
            .then(function (response) {
                var count = Object.keys(response.data.data).length;
                let countArray = [];
                for (var i = 0; i < count; i++) {
                    countArray.push({
                        value: response.data.data[i]?.id,
                        label: response.data.data[i]?.state
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
            url: `https://demo38.gowebbi.in/api/RegisterApi/FetchCity?SID=${stateCode}`,
            headers: {
            }
        };
        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                var count = Object.keys(response.data.data).length;
                let cityArray = [];
                for (var i = 0; i < count; i++) {
                    cityArray.push({
                        value: response.data.data[i]?.id,
                        label: response.data.data[i]?.city
                    })
                }
                setCitydata(cityArray)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    Geocoder.init("AIzaSyD6WfSwXXdRhyMtTgLU9KY1XGnMdiOcbek");

    const map=()=>{
        Geolocation.getCurrentPosition(info => {
            console.log('info.coords.latitude===',info.coords.latitude);
            setInput((prev) => ({...prev,lat : info.coords.latitude}))
            if(info.coords.longitude){
                console.log('info.coords.longitude===',info.coords.longitude);
            // setInput({long : info.coords.longitude})
            setInput((prev) => ({...prev,long : info.coords.longitude}))
            }
            Geocoder.from(info.coords.latitude,info.coords.longitude)
           
                .then(json => {
                    var location = json.results[0].address_components[3].long_name;
                    // var abc = JSON.parse(...location)
                    // console.log('location======',location);
                    
                    // setInput(info.coords.longitude,'long')
                    
              setaddress(location)
            //   setInput(info.coords.latitude,'lat')
            //         setInput(info.coords.longitude,'long')
                })
                .catch(error => console.log('error============>',error));
        
          })
    }
useEffect(()=>{
    map()
},[])
const Register = async () => {
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    var data = {
        EmailId: input.emailId,
        UserName:input.userName,
        Password: input.setPassword,
        ContactNumber:input.contactNumber,
        Dob:date,
        Doj:doj,
        Designation:input.designation,
        State:state,
        City:city,
        Pin:input.pinCode,
        CurrentLocation:address,
        Latitude:input.lat,
        Longitude:input.long

    };
    console.log({data});
    // // console.log(raw);
    //  axios.post('https://demo38.gowebbi.in/api/RegisterApi/Register',data,{headers: {'Content-Type': 'application/json'}}).then(async (response) => {
    //   const responseData = response.data;
    //   console.log(responseData);
    // //   if(responseData.status ===  "success"){
    // //     console.log('success',responseData.token);
    // // //    const data = await AsyncStorage.setItem('token',responseData.token.toString());
    // //     navigation.navigate('AdminScreen')
    // //   }else{
    // //     // console.log(response);
    // //   }
    // })
    // .catch( (error) =>{
    //   console.log(error);
    // });
    const response = await axios.post("https://demo38.gowebbi.in/api/RegisterApi/Register",data,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
    const responseData = await response.data;
    console.log({responseData});
    console.log('responseData',responseData.status);
    if(responseData.status=="Success"){
        Alert.alert("Registration Sucessfull")
    } else{
        Alert.alert("Wrong Details")

    }
  }

//   console.log('input====>',input);
  console.log('input====>',input);
//   console.log('input====>',input.long);

  
 
    return (
        <>
            <ScrollView style={styles.container}>
                <View style={{ paddingBottom: 30 }}>
                    <Text style={styles.headersText}>Enter employee details</Text>
                    <FullTextInput onChangeText={(text) => handleOnChange(text,'emailId')} title={'Email Id'} />

                    <FullTextInput onChangeText={(text) => handleOnChange(text, 'userName')} title={'Employee name'} />
                    <FullTextInput onChangeText={(text) => handleOnChange(text, 'contactNumber')} title={'Contact number'} />
                    <Text style={styles.text}>Date of birth</Text>
                    <DatePicker
                        modal
                        textColor='black'
                        mode={'date'}
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                    <View style={styles.dateview}>
                        <TextInput value={date.toDateString()} style={{ width: '92%', fontSize: 20 }} />
                        <Ionicons name="calendar-outline" size={30} style={{ alignSelf: 'center' }} onPress={() => setOpen(true)} />
                    </View>
                    <Text style={styles.text}>Date of joining</Text>
                    <DatePicker
                        modal
                        textColor='black'
                        mode={'date'}
                        open={dojopen}
                        date={doj}
                        onConfirm={(date) => {
                            setdojopen(false)
                            setDoj(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                    <View style={styles.dateview}>
                        <TextInput value={doj.toDateString()} style={{ width: '92%', fontSize: 20 }} />
                        <Ionicons name="calendar-outline" size={30} style={{ alignSelf: 'center' }} onPress={() => setdojopen(true)} />
                    </View>
                    <FullTextInput  onChangeText={(text) => handleOnChange(text,'designation')} title={'Designation'} />
                    <Text style={styles.text}>State</Text>
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
                    <Text style={styles.text}>City</Text>
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
                    <FullTextInput onChangeText={(text) => handleOnChange(text, 'pinCode')} title={'Pin Code'} />
                    <Text style={[styles.text,]}>Current Location</Text>
                    <View style={[styles.TextInput, { backgroundColor: '#E0E1E2', justifyContent: 'center' }]} >
                        <Text style={[styles.text, { marginLeft: 15 }]}>{address}</Text>
                    </View>
                    <FullTextInput onChangeText={(text) => handleOnChange(text, 'setPassword')} title={'Set Password'} />
                    <TouchableOpacity onPress={Register} style={styles.LoginButton} >
                        <Text style={styles.LoginText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#57befa',
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
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 20,
        backgroundColor: '#fff'
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
    }
})
export default EmployeeEntryScreen;     