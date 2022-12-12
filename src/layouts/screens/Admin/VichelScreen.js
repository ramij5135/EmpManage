import React from 'react'

import { Text, StyleSheet, TouchableOpacity, ScrollView, View } from 'react-native'
import BackgroundService from 'react-native-background-actions';
import VichleInformation from '../../components/VichleInformation';
import { COLORS } from '../../../utils/globalStyles';

const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));
const veryIntensiveTask = async (taskDataArguments) => {
  // Example of an infinite loop task
  const { delay } = taskDataArguments;
  await new Promise(async (resolve) => {
    for (let i = 0; BackgroundService.isRunning(); i++) {
      // console.log(i);
      await sleep(delay);
    }
  });
};
const options = {
  taskName: 'Example',
  taskTitle: 'EmpManage running in background',
  taskDesc: 'Tracking is enable',
  taskIcon: {
    name: 'ic_launcher',
    type: 'mipmap',
  },
  color: '#ff00ff',
  linkingURI: 'yourSchemeHere://chat/jane',
  parameters: {
    delay: 1000,
  },
};

const DATA = [
  {
    id: 0,
    vechileType: 'Bike',
    vechileNo: 'WB0123456',
    ownerName: 'Raja Chowdhury',
    VicheleModelName: 'Royal Enfilled',
    VicheleModelNo: 'Royal_123455',
    employeeName: 'Raja Chowdhury',
    employeeId: 1

  },
  {
    id: 1,
    vechileType: 'Bike',
    vechileNo: 'WB023456',
    ownerName: 'Ramij Dafadar',
    VicheleModelName: 'Apachee',
    VicheleModelNo: 'Apachee20235',
    employeeName: 'Ramij Dafadar',
    employeeId: 2
  },
  {
    id: 2,
    vechileType: 'Bike',
    vechileNo: 'WB234O56',
    ownerName: 'Vicky Sharma',
    VicheleModelName: 'Ninza',
    VicheleModelNo: 'Ninza_123455',
    employeeName: 'Vicky Sharma',
    employeeId: 3
  },
  {
    id: 3,
    vechileType: 'Bike',
    vechileNo: 'WB01L3456',
    ownerName: 'Bishnudev Mandal',
    VicheleModelName: 'HayaBusha',
    VicheleModelNo: 'HayaBusha_123455',
    employeeName: 'Bishnudev Mandal',
    employeeId: 4
  },
]

const VicheleScreen = () => {
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
    <ScrollView style={styles.container}>
      {
        DATA.map((item) => {
          // console.log('item===========>',item);
          return (

            <VichleInformation key={item.id.toString()} item={item} />

          )
        }
        )
      }



    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 10,
    backgroundColor: COLORS.primary,

  },
  background: {
    backgroundColor: 'red',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,

  },
  dataConatiner: {
    flexDirection: 'row',
    // justifyContent:'space-evenly'
  },
  Vichele: {
    marginRight: 10,
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold'
  }
})
export default VicheleScreen;       
