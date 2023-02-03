import React, { useState } from 'react'
import { View,Text,StyleSheet,TextInput} from 'react-native'
import DatePicker from 'react-native-date-picker'
import Ionicons from 'react-native-vector-icons/Ionicons'
import moment from 'moment'
const Date_Picker = ({Pick_Date}) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const dateOfJoin = moment(date).format('DD/MM/YYYY')
    // console.log('dateOfJoin========>',dateOfJoin);

    const currentDate=(date)=>{
        Pick_Date(date)
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
                    currentDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
            <View style={styles.dateview}>
                <TextInput value={dateOfJoin} style={{ width: '92%', fontSize: 20 }} />
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