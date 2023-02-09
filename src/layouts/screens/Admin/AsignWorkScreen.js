import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput,ScrollView } from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
import { xorBy } from 'lodash';
import { COLORS } from '../../../utils/globalStyles';
import FullButton from '../../components/fullButton';
import Inputs from '../../components/inputs';
import axios from 'axios';
import { set } from 'react-native-reanimated';
import { baseURL } from '../../../utils/config';
import { Snackbar } from 'react-native-paper';
const AsignWorkScreen = ({ navigation }) => {
  const [selectedTeam, setSelectedTeam] = useState({});
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [statedata, setStatedata] = useState([]);
  const [Work, setWork] = useState([]);
  const [text, setText] = useState();
  const [visible, setVisible] = React.useState(false);

  // const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
  // const [jobData,setJobdat]=useState()
  // const [data,set]=useState()
  const [data, setdata] = useState([]);

  console.log('selectedTeam=============>', selectedTeam.id);
  console.log('text=============>', text);
  useEffect(() => {
    selectedTeams.map((item, index) => {
      setdata([...data, item.id]);
    });
  }, [selectedTeams]);
  // console.log('dtaa====>',data.toString());
  const value = data?.toString();
  useEffect(() => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: `${baseURL}JobMasterApi/FetchEmployee`,
    };
    axios(config)
      .then(function (response) {
        // console.log('response-==============>',response);
        var count = Object.keys(response.data.data).length;
        let countArray = [];
        for (var i = 0; i < count; i++) {
          countArray.push({
            id: response.data.data[i]?.ID,
            item: `${response.data.data[i]?.Item} (SW_000${response.data.data[i]?.ID})`,
          });
        }
        setStatedata(countArray);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios.get(`${baseURL}JobMasterApi/GetJobMaster`).then(response => {
      var count = Object.keys(response.data.data).length;
      let Work = [];
      for (var i = 0; i < count; i++) {
        Work.push({
          id: response.data.data[i]?.Id,
          item: response.data.data[i]?.Item,
        });
      }
      setWork(Work);
    });
  }, []);
  function onMultiChange() {
    return item => {
      // console.log('itemkjifijfh======>',item);
      setSelectedTeams(xorBy(selectedTeams, [item], 'id'));
    };
  }
  const asignWork = () => {
    const data = {
      EmpId: selectedTeam.id,
      JobId: value,
      Note: text,
    };
    axios.post(`${baseURL}TaskApi/TaskAssign`, data).then(response => {
      console.log('response.data.status', response.data);
      if (response.data.status == 'Success') {
        setVisible(!visible)
        setTimeout(() => {
          navigation.navigate('AdminScreen')
        }, 2000);

      }
    });


  };
  function onChange() {
    return val => setSelectedTeam(val);
  }
  return (
    <>
    <View style={visible ? styles.container2:undefined}>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        style={styles.snackbar}
        action={{
          onPress: () => {
            // Do something
          },
        }}>
        Work asign successfully
      </Snackbar>
    </View>
    <View style={styles.container}>
        {/* <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          style={styles.snackbar}
          action={{
            onPress: () => {
              // Do something
            },
          }}>
          Asign Work Successfully
        </Snackbar> */}
      <View keyboardShouldPersistTaps='handled'
        style={{ backgroundColor: COLORS.White, borderRadius: 14, padding: 15 ,margin:10}}>
        
        <SelectBox
          label="Select employee name for the work"
          labelStyle={styles.label}
          options={statedata}
          value={selectedTeam}
          onChange={onChange()}
          hideInputFilter={false}
          selectedItemStyle={styles.selectedItemStyle}
          searchInputProps={{ fontSize: 20 }}
          inputPlaceholder="Search"
        />

        <SelectBox
          label="Asign a Work...."
          labelStyle={styles.label}
          options={Work}
          selectedValues={selectedTeams}
          onMultiSelect={onMultiChange()}
          onTapClose={onMultiChange()}
          isMulti
          inputPlaceholder="Search"
          searchInputProps={{ fontSize: 20 }}
          multiOptionsLabelStyle={styles.multiOptionsLabelStyle}
          multiOptionContainerStyle={{ backgroundColor: '#709a9e' }}
        />

        <Inputs
          onChangeText={text => setText(text)}
          height={100}
          bgColor="#f0f0f0"
          multiline={true}
          zIndex={2}
          title={'Description'}
        />

        <FullButton onPressName={asignWork} btnTitle={'Asign'} />
        <View style={{}}>

        </View>


      </View>
    </View>
    </>
    
  );
};
const styles = StyleSheet.create({
  container: {
    // padding: 15,
    backgroundColor: COLORS.primary,
    flex: 1,
  },
  selectedItemStyle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  label: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  multiOptionsLabelStyle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  snackbar: {
    // position:'absolute',
    backgroundColor: 'green',
    // top:-450
    // bottom:-100
  },
  container2:{
    backgroundColor: COLORS.primary,
    paddingTop:'20%',
    // position:'absolute',
    // top:500
  }
});
export default AsignWorkScreen;
