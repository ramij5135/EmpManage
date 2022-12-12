
import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import { COLORS } from '../../../utils/globalStyles'
import FullButton from '../../components/fullButton'
import Inputs from '../../components/inputs'
const AsignWorkScreen = () => {
  const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedTeams, setSelectedTeams] = useState([])
  const [statedata, setStatedata] = useState([]);
  const [Work, setWork] = useState([]);
  // console.log('selectedTeam=============>',selectedTeam);
  // console.log('selectedTeams=============>',selectedTeams);
  useEffect(() => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://demo38.gowebbi.in/api/JobMasterApi/FetchEmployee',
    };
    axios(config)
      .then(function (response) {
        console.log('response-==============>',response);
        var count = Object.keys(response.data.data).length;
        let countArray = [];
        for (var i = 0; i < count; i++) {
          countArray.push({
            id: response.data.data[i]?.ID,
            item: `${response.data.data[i]?.Item} (SW_000${response.data.data[i]?.ID})`
            
          })
        }
        setStatedata(countArray)
      })
      .catch(function (error) {
        console.log(error);
      });
    axios.get("https://demo38.gowebbi.in/api/JobMasterApi/GetJobMaster").then((response) => {
      var count = Object.keys(response.data.data).length;
      let Work = [];
      for (var i = 0; i < count; i++) {
        Work.push({
          id: response.data.data[i]?.Id,
          item: response.data.data[i]?.Item
        })
      }
      setWork(Work)
    }
    )

  }, [])
  function onMultiChange() {
    return (item) =>
    // console.log('itemkjifijfh======>',item);
     setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
  }

  function onChange() {
    return (val) => setSelectedTeam(val)
  }
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: COLORS.White, borderRadius: 14, padding: 15 }}>
        <SelectBox
          label="Select employee name for the work"
          labelStyle={styles.label}
          options={statedata}
          value={selectedTeam}
          onChange={onChange()}
          hideInputFilter={false}
          selectedItemStyle={styles.selectedItemStyle}
          searchInputProps={{ fontSize: 20 }}
          inputPlaceholder='Search'
        />
        
        <SelectBox
          label="Asign a Work...."
          labelStyle={styles.label}
          options={Work}
          selectedValues={selectedTeams}
          onMultiSelect={onMultiChange()}
          onTapClose={onMultiChange()}
          isMulti
          inputPlaceholder='Search'
          searchInputProps={{ fontSize: 20 }}
          multiOptionsLabelStyle={styles.multiOptionsLabelStyle}
          multiOptionContainerStyle={{ backgroundColor: '#709a9e' }}

        />
        
          <Inputs height={100} bgColor='#f0f0f0' multiline={true} zIndex={2} title={'Description'} />
       
         <FullButton btnTitle={'Asign'} />
      </View>
     
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: COLORS.primary,
    flex: 1
  },
  selectedItemStyle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold'
  },
  label: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold'
  },
  multiOptionsLabelStyle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold'
  }
})
export default AsignWorkScreen;