import React, { useState } from 'react'
import { View,Text,StyleSheet,TextInput} from 'react-native'
import DatePicker from 'react-native-date-picker'
import Ionicons from 'react-native-vector-icons/Ionicons'

const PickDate = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    // console.log('date========>',date);

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
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
            <View style={styles.dateview}>
                <TextInput value={date.toDateString()} style={{ width: '92%', fontSize: 20 }} />
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
export default PickDate;