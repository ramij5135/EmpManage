import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';



const HomeScreen = () => {
  return(
    <View style={styles.container}>
      <View style={styles.heading}>
        <Image style={styles.image} source={require('../../../assets/imgs/profile.jpg')} />
        <View style={styles.welcome}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.welcomeName}>Ramij Dafadar</Text>
        </View>
        <View style={styles.notification}>
          <Ionicons name='notifications' size={30} color={'rgba(100,100,100,0.5)'} />
        </View>
      </View>
      <View style={styles.assignwork}>
        <Text style={styles.todayWork}>Today's Work</Text>
        <View style={styles.work}>
          <Text style={styles.workTitle}>Work Title</Text>
          <Text>File Collect</Text>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    padding:20,
    flex:1,
    backgroundColor:'rgba(130,209,209,0.4)',
  },
  heading:{
    // backgroundColor:'red',
    flexDirection:'row',
    alignItems:'center'
  },
  image:{
    height:70,
    width:70,
    resizeMode:'contain',
    borderRadius:50,
    borderWidth:0.5,
    borderColor:'#fff'
  },
  welcome:{
    marginHorizontal:20
  },
  welcomeText:{
    fontFamily:'Poppins-Regular',
    fontSize:16
  },
  welcomeName:{
    fontFamily:'Poppins-SemiBold',
    fontSize:18,
    fontStyle:'italic'
  },
  notification:{
    position:'absolute',
    right:10,
    padding:5,
    borderWidth:1,
    borderRadius:50,
    borderColor:'grey'
  },
  assignwork:{
    backgroundColor:'rgba(100,100,100,0.2)',
    padding:5,
    marginTop:20,
    borderRadius:10,
    height:150
  },
  todayWork:{
    fontFamily:'Poppins-Regular',
    fontSize:18,
    fontStyle:'italic'
  },
  work:{
    flexDirection:'row',
    paddingHorizontal:10,
    backgroundColor:'red',
    marginVertical:10,
    justifyContent:'space-between'
  }
});

export default HomeScreen;
