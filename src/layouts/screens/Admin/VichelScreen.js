import React from 'react'

import {Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import BackgroundService from 'react-native-background-actions';
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
const VicheleScreen = () => {
  const startBackgroundService = async () => {
    await BackgroundService.start(veryIntensiveTask, options);
    await BackgroundService.updateNotification({ taskDesc: 'New ExampleTask description'});
  }
  const stopBackgroundService=async()=>{
    await BackgroundService.stop();
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>startBackgroundService()} style={styles.background}>
        <Text>enable background</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>stopBackgroundService()} style={styles.background}>
        <Text>disable background</Text>
      </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    backgroundColor: 'red',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,

  }
})
export default VicheleScreen;       
