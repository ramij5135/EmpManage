
import React, { useState } from 'react'
import { Text, View, StyleSheet,TextInput } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import FullButton from '../../components/fullButton'
const K_OPTIONS = [
    {
        item: 'Juventus',
        id: 'JUVE',
    },
    {
        item: 'Real Madrid',
        id: 'RM',
    },
    {
        item: 'Barcelona',
        id: 'BR',
    },
    {
        item: 'PSG',
        id: 'PSG',
    },
    {
        item: 'FC Bayern Munich',
        id: 'FBM',
    },
    {
        item: 'Manchester United FC',
        id: 'MUN',
    },
    {
        item: 'Manchester City FC',
        id: 'MCI',
    },
    {
        item: 'Everton FC',
        id: 'EVE',
    },
    {
        item: 'Tottenham Hotspur FC',
        id: 'TOT',
    },
    {
        item: 'Chelsea FC',
        id: 'CHE',
    },
    {
        item: 'Liverpool FC',
        id: 'LIV',
    },
    {
        item: 'Arsenal FC',
        id: 'ARS',
    },

    {
        item: 'Leicester City FC',
        id: 'LEI',
    },
]
const AsignWorkScreen = () => {
    const [selectedTeams, setSelectedTeams] = useState([])
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.headersText}>Assign Task</Text>
                <View style={styles.multiselectcontainer}>
                    <View style={styles.empNameSection}>
                        <Text style={styles.empNameTag}>Employee Name :-</Text>
                        <Text style={styles.empName}>Raja Chowdhury (12345)</Text>
                    </View>
                
               
                <SelectBox
                    label="Job Name"
                    labelStyle={styles.labeel}
                    optionContainerStyle={{padding:15}}
                    multiOptionsLabelStyle={styles.text}
                    options={K_OPTIONS}
                    selectedValues={selectedTeams}
                    onMultiSelect={onMultiChange()}
                    onTapClose={onMultiChange()}
                    selectedItemStyle={{ backgroundColor: 'gray', color: 'red', fontSize: 18 }}
                    isMulti
                />
                <Text style={[styles.labeel,{marginTop:10}]}>Note</Text>
                <TextInput style={styles.TextInput}  />
                <FullButton btnTitle={'Assign'} />
            </View>
            </View>
        </>
    )
    function onMultiChange() {
        return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
    }
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
        marginTop: 20
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
    multiselectcontainer:{ 
        backgroundColor: '#fff',
        borderRadius:16,
        padding:15
 },
 labeel:{
    fontFamily:'Poppins-SemiBold',
    fontSize:18,
    color:'#505152',
 },
 text:{
    fontSize:18,
    fontFamily:'Poppins-Regular'
 },
 TextInput:{
    height:90,
    width:'100%',
    backgroundColor:'#e1e2e3',
    borderRadius:10,
    textAlignVertical:'top',
    marginBottom:10
 }

})
export default AsignWorkScreen;

