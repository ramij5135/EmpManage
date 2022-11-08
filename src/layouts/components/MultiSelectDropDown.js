import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'

function MultiSelectDropDown({ title, item }) {
  const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedTeams, setSelectedTeams] = useState([])
  return (
    <View >
      <SelectBox
        label={title}
        labelStyle={styles.label}
        options={item}
        value={selectedTeam}
        onChange={onChange()}
        hideInputFilter={false}
      />
      <SelectBox
        label="Job Name"
        labelStyle={styles.label}
        optionContainerStyle={{ padding: 15 }}
        multiOptionsLabelStyle={styles.text}
        options={item}
        selectedValues={selectedTeams}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        selectedItemStyle={{ backgroundColor: 'gray', color: 'red', fontSize: 18 }}
        isMulti
      />
    </View>
  )
  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
  }
  function onChange() {
    return (val, id) => setSelectedTeam(val, id)
  }
} const styles = StyleSheet.create({
  container: {

  },
  label: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#505152',
  },
  text:{
    fontSize:18,
    fontFamily:'Poppins-Regular'
 },
})

export default MultiSelectDropDown;