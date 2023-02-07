import React, { useState } from 'react'
import { View,Text,StyleSheet,TextInput} from 'react-native'
import DatePicker from 'react-native-date-picker'
import Ionicons from 'react-native-vector-icons/Ionicons'
import moment from 'moment'
const Date_Picker = ({Pick_Date,dateOfBirth}) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const dateOfJoin = moment(date).format('DD/MM/YYYY')
    const dateOfBirth2 = moment(dateOfBirth).format('DD/MM/YYYY')
    const [date2, setDate2] = useState(dateOfBirth2)

    // console.log('date2========>',date2);
    // console.log('dateOfBirth========>',dateOfBirth2);

    const currentDate=(date)=>{
        
        Pick_Date(date,date2)
    }
    
    return (
        <>
            <DatePicker
                modal
                textColor='black'
                mode={'date'}
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                    setDate2(moment(date).format('DD/MM/YYYY'))
                    currentDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
                // onDateChange={()=>}
            />
            <View style={styles.dateview}>
                <TextInput value={date2} style={{ width: '92%', fontSize: 20 }} />
                <Ionicons name="calendar-outline" size={30} style={{ alignSelf: 'center' }} onPress={() => setOpen(true)} />
            </View> 
      
        </>
    )
}
const styles=StyleSheet.create({
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
export default Date_Picker;