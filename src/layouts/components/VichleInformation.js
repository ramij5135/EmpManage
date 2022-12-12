import React from 'react'

import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import BackgroundService from 'react-native-background-actions';
import { COLORS } from '../../utils/globalStyles';
const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));
// const veryIntensiveTask = async (taskDataArguments) => {
//   // Example of an infinite loop task
//   const { delay } = taskDataArguments;
//   await new Promise(async (resolve) => {
//     for (let i = 0; BackgroundService.isRunning(); i++) {
//       // console.log(i);
//       await sleep(delay);
//     }
//   });
// };
// const options = {
//   taskName: 'Example',
//   taskTitle: 'EmpManage running in background',
//   taskDesc: 'Tracking is enable',
//   taskIcon: {
//     name: 'ic_launcher',
//     type: 'mipmap',
//   },
//   color: '#ff00ff',
//   linkingURI: 'yourSchemeHere://chat/jane',
//   parameters: {
//     delay: 1000,
//   },
// };
const VichleInformation = ({item}) => {
  // const startBackgroundService = async () => {
  //   await BackgroundService.start(veryIntensiveTask, options);
  //   await BackgroundService.updateNotification({ taskDesc: 'New ExampleTask description' });
  // }
  // const stopBackgroundService = async () => {
  //   await BackgroundService.stop();
  // }
{/* <TouchableOpacity onPress={()=>startBackgroundService()} style={styles.background}>
        <Text>enable background</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>stopBackgroundService()} style={styles.background}>
        <Text>disable background</Text>
      </TouchableOpacity> */}

  return (
    <View style={styles.container}>
      
      <View style={styles.dataConatiner}>
        <Text style={styles.Vichele}>vechile Type :-</Text>
        <Text style={styles.Vichele}>{item.vechileType}</Text>
      </View>
      <View style={styles.dataConatiner}>
        <Text style={styles.Vichele}>vechile No :-</Text>
        <Text style={styles.Vichele}>{item.vechileNo}</Text>
      </View>
      <View style={styles.dataConatiner}>
        <Text style={styles.Vichele}>Owner Name :-</Text>
        <Text style={styles.Vichele}>{item.ownerName}</Text>
      </View>
      <View style={styles.dataConatiner}>
        <Text style={styles.Vichele}>Vechile Model Name :-</Text>
        <Text style={styles.Vichele}>{item.VicheleModelName}</Text>
      </View>
      <View style={styles.dataConatiner}>
        <Text style={styles.Vichele}>Vechile Model No :-</Text>
        <Text style={styles.Vichele}>{item.VicheleModelNo}</Text>
      </View>
      <View style={styles.dataConatiner}>
        <Text style={styles.Vichele}>Employee Name :-</Text>
        <Text style={styles.Vichele}>{item.employeeName}</Text>
      </View>
      <View style={styles.dataConatiner}>
        <Text style={styles.Vichele}>Employee Id :-</Text>
        <Text style={styles.Vichele}>{item.employeeId}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
   
    padding:5,
    backgroundColor:COLORS.white,
    marginVertical:5,
    borderRadius:10,
    
  },
  background: {
    backgroundColor: 'red',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,

  },
  dataConatiner:{
    flexDirection:'row',
    
  },
  Vichele:{
    marginRight:10,
    fontSize:18,
    fontFamily:'Poppins-SemiBold'
  }
})
export default VichleInformation;       
