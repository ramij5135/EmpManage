import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const HomeScreen = () => {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.welcomeName}>Ramij Dafadar</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    // padding:20,
    flex:1,
    backgroundColor:'rgba(130,209,209,0.4)',
  },
  header:{
    backgroundColor:'rgba(255,255,255,0.4)',
    height:60,
    alignItems:'center',
    justifyContent:'center'
  },
  welcome:{
    fontFamily:'Poppins-Regular',
    fontSize:16
  }, 
  welcomeName:{
    fontFamily:'Poppins-SemiBold',
    fontSize:16,
    color:'green'
  }
});

export default HomeScreen;
