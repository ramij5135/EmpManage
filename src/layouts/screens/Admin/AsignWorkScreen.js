
import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native'
import FullButton from '../../components/fullButton'
import MultiSelectDropDown from '../../components/MultiSelectDropDown'
const DATA = [
    {
        id: '0',
        item: 'Ramij Dafadar (0)',

    },
    {
        item: 'Raja Chowdhury (1)',
        id: '1',
    },
    {
        item: 'Arijit Danda (2)',
        id: '2',
    },
    {
        item: 'Rahul Mete (3)',
        id: '3',
    },
    {
        item: 'Purba Gupta (4) #2141625',
        id: '4',
    },
    {
        item: 'Umaes kumar (5)',
        id: '5',
    },
]

const AsignWorkScreen = () => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false)

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.headersText}>Assign Task</Text>
                <View style={styles.multiselectcontainer}>

                    {
                        loader ? <Text>Loading</Text> :
                            <View>
                                <MultiSelectDropDown title='Employee Name' item={DATA} />
                            </View>
                    }
                    <Text style={[styles.labeel, { marginTop: 10 }]}>Note</Text>
                    <TextInput style={styles.TextInput} />
                    <FullButton btnTitle={'Assign'} />
                </View>
            </View>
        </>
    )

}
const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: '#87c6e8',
        flex: 1
    },
    headersText: {
        textAlign: 'center',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 24,
        color: '#fff',
        marginTop: 20,
    },
    empName: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        color: '#505152',
        marginLeft: 7

    },
    empNameTag: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        color: '#505152',
    },
    empNameSection: {
        flexDirection: 'row',
        marginTop: 20,
    },
    multiselectcontainer: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 15,
    },
    labeel: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        color: '#505152',
    },
    text: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular'
    },
    TextInput: {
        height: 90,
        width: '100%',
        backgroundColor: '#e1e2e3',
        borderRadius: 10,
        textAlignVertical: 'top',
        marginBottom: 10
    }

})
export default AsignWorkScreen;

