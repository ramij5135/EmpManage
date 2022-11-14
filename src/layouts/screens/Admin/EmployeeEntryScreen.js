import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import SelectList from 'react-native-dropdown-select-list'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SelectDropdown from 'react-native-select-dropdown'
import DatePicker from 'react-native-date-picker'
import FullTextInput from "../../components/textInput";
import PickDate from "../../components/DatePicker";
const Active = ["TRUE", "FALSE"]
const EmployeeEntryScreen = () => {
    const [selected, setSelected] = useState("");
    const data = [
        { key: '14', value: 'Select Options' },
        { key: '0', value: 'Sales Associate' },
        { key: '1', value: 'Sales Representative' },
        { key: '2', value: 'Account Executive' },
        { key: '3', value: 'Sales Manager' },
        { key: '4', value: 'Salesperson' },
        { key: '5', value: 'Business Development Manager' },
        { key: '6', value: 'Sales Consultant' },
        { key: '7', value: 'Sales Development Representative' },
        { key: '8', value: 'Sales Rep' },
        { key: '9', value: 'Business Development Representative' },
        { key: '10', value: 'Sales Executive' },
        { key: '11', value: ' Chief Revenue Officer' },
        { key: '12', value: 'Director of Business Development' },
        { key: '13', value: 'Account Representative' },


    ];
    const Current = new Date()
    const [date, setDate] = useState(new Date())
    // const [date, setDate] = useState(
    //     Current.getDate / Current.getDay / Current.getFullYear()
    // )
    const [open, setOpen] = useState(false)
    return (
        <>
            <ScrollView style={styles.container}>

                <View style={{ paddingBottom: 30 }}>

                    <Text style={styles.headersText}>Enter employee details</Text>
                    <Text style={[styles.text,]}>Employee Id</Text>
                    <View style={[styles.TextInput, { backgroundColor: '#E0E1E2', justifyContent: 'center' }]} >
                        <Text style={[styles.text, { marginLeft: 15 }]}>SW_0001</Text>
                    </View>
                    <FullTextInput title={'Employee name'} />
                    <FullTextInput title={'Contact number'} />
                    <Text style={styles.text}>Date of birth</Text>
                    {/* <DatePicker
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
                    </View> */}
                    <PickDate />
                    <Text  style={styles.text}>Date of joining</Text>
                    <PickDate />
                    <Text style={styles.text}>Designation</Text>
                    {/* <View style={{marginBottom:40}}>            */}
                    <SelectList setSelected={setSelected} data={data}
                        arrowicon={<Ionicons name="chevron-down-outline" size={20} color={'black'} />}
                        searchicon={<Ionicons name="search-outline" size={20} color={'black'} />}
                        boxStyles={{
                            borderRadius: 10,
                            backgroundColor: '#fff',
                            height: 50,
                            borderColor: '#8d8f8e',
                        }}
                        inputStyles={{ fontSize: 18 }}
                        dropdownStyles={{ backgroundColor: '#fff', }}
                        dropdownTextStyles={{ fontSize: 20 }}
                        defaultOption={{ key: '14', value: 'Select Options' }}
                    />
                    {/* </View> */}
                    <Text style={styles.text}>State</Text>
                    <SelectList setSelected={setSelected} data={data}

                        arrowicon={<Ionicons name="chevron-down-outline" size={20} color={'black'} />}
                        searchicon={<Ionicons name="search-outline" size={20} color={'black'} />}
                        boxStyles={{
                            borderRadius: 10,
                            backgroundColor: '#fff',
                            height: 50,
                            borderColor: '#8d8f8e',
                        }}
                        inputStyles={{ fontSize: 18 }}
                        dropdownStyles={{ backgroundColor: '#fff', }}
                        dropdownTextStyles={{ fontSize: 20 }}
                        defaultOption={{ key: '14', value: 'Select Options' }}
                    />
                    <Text style={styles.text}>City</Text>
                    <SelectList setSelected={setSelected} data={data}
                        arrowicon={<Ionicons name="chevron-down-outline" size={20} color={'black'} />}
                        searchicon={<Ionicons name="search-outline" size={20} color={'black'} />}
                        boxStyles={{
                            borderRadius: 10,
                            backgroundColor: '#fff',
                            height: 50,
                            borderColor: '#8d8f8e',
                        }}
                        inputStyles={{ fontSize: 18 }}
                        dropdownStyles={{ backgroundColor: '#fff', }}
                        dropdownTextStyles={{ fontSize: 20 }}
                        defaultOption={{ key: '14', value: 'Select Options' }}
                    />
                    <FullTextInput title={'Pin Code'} />
                    <Text style={[styles.text,]}>Current Location</Text>
                    <View style={[styles.TextInput, { backgroundColor: '#E0E1E2', justifyContent: 'center' }]} >
                        <Text style={[styles.text, { marginLeft: 15 }]}>Durgapur</Text>
                    </View>
                    <Text style={[styles.text]}>Is Active</Text>
                    <SelectDropdown
                        data={Active}
                        buttonStyle={{ width: '100%', }}
                        onSelect={(selectedItem, index) => {
                            // console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}

                    />
                    <TouchableOpacity style={styles.LoginButton} >
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
        marginTop:5
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
    }
})
export default EmployeeEntryScreen;     