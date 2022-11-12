import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const optionButton =[
  {
    id:0,
    optionName:'In Time',
    icon:'time-outline',
    btnTitle:'In Time'
  },
  {
    id:1,
    optionName:'Out Time',
    icon:'time-outline',
    btnTitle:'Out Time'
  },
  {
    id:2,
    optionName:'Attendence',
    icon:'calendar',
    btnTitle:'Attendence'
  },
  {
    id:3,
    optionName:'My visit list',
    icon:'list-outline',
    btnTitle:'My visit list'
  },
  {
    id:4,
    optionName:'Your Task',
    icon:'bicycle-outline',
    btnTitle:'Your Task'
  },
  {
    id:5,
    optionName:'Visiting Report',
    icon:'document-attach-outline',
    btnTitle:'Visiting Report'
  },
  {
    id:6,
    optionName:'Add New Shop',
    icon:'add-outline',
    btnTitle:'Add New Shop'
  },
  {
    id:7,
    optionName:'My Location',
    icon:'location-outline',
    btnTitle:'My Location'
  },
  {
    id:8,
    optionName:'My Store',
    icon:'home-outline',
    btnTitle:'My Store'
  },
  {
    id:9,
    optionName:'Complaint',
    icon:'notifications-off-outline',
    btnTitle:'Complaint'
  },
]


const HomeScreen = () => {
  const navigation = useNavigation();
  const [time, setTime] = useState('');
  const [outTime, setOutTime] = useState('');
  // const [count, setCount] = useState(0);
  
  const getInTime = () => {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes();
    setTime(time)
  }
  const getOutTime = () => {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes();
    setOutTime(time);
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.welcomeName}>Ramij Dafadar</Text>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.square} />
        <Image style={styles.profileImg} source={require('../../../assets/imgs/profile.jpg')} />
        <Text style={styles.workTitle}>Sales Executive</Text>
        <Text style={styles.workTime}>Office In-Out Time</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:20}}>
        <View style={styles.option}>
          {
            optionButton.map((op) =>{
              // console.log('op==========>', op);
              return(
                <View key={op.id.toString()} style={styles.optionButton}>
                  {
                    op.btnTitle === 'In Time' ? 
                    <>
                      <Text style={styles.buttonTitle}>{op.optionName}</Text>
                      <Text>{time}</Text>
                      <View style={styles.button}>
                        <Ionicons name='time-outline' size={15} color={'#fff'} />
                        <Text onPress={getInTime} style={{color:'#fff', marginLeft:5}}>{op.btnTitle}</Text>
                      </View>
                    </> : op.btnTitle === 'Out Time' ? 
                    <>
                      <Text style={styles.buttonTitle}>{op.optionName}</Text>
                      <Text>{outTime}</Text>
                      <View style={styles.button}>
                        <Ionicons name='time-outline' size={15} color={'#fff'} />
                        <Text onPress={getOutTime} style={{color:'#fff', marginLeft:5}}>{op.btnTitle}</Text>
                      </View>
                    </> :
                    <>
                      <Ionicons name={op.icon} size={30} />
                      <Text onPress={
                        op.optionName === 'Attendence' ? ()=> navigation.navigate('Attendence') : op.optionName === 'My visit list' ? ()=> navigation.navigate('VisitList') : null
                      } style={{fontFamily:'Poppins-Regular', fontSize:16}}>{op.optionName}</Text>
                    </>
                  }
                </View>
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
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
  },
  wrapper:{
    backgroundColor:'rgba(255,255,255,0.4)',
    borderBottomLeftRadius:100,
    borderBottomRightRadius:100,
    overflow:'hidden',
    marginVertical:10,
    paddingVertical:20,
    alignItems:'center',
  },
  square:{
    height:0,
    width:0,
    alignSelf:'center',
    marginTop:-20,
    top:0,
    borderBottomWidth:20,
    borderRightWidth:15,
    borderLeftWidth:15,
    borderBottomColor:'rgba(130,209,209,0.4)',
    borderLeftColor:'transparent',
    borderRightColor:'transparent',
    borderTopColor:'transparent',
    transform:[{rotate:'180deg'}],
    marginBottom:10,
    overflow:'hidden'
  },
  profileImg:{
    height:70,
    width:70,
    borderRadius:50,
    resizeMode:'contain',
    alignSelf:'center',
    marginBottom:20
  },
  workTitle:{
    fontFamily:'Poppins-SemiBold',
    fontSize:16,
    color:'#2a2a2a',
    letterSpacing:1
  },
  workTime:{
    color:'#2a2a22',
    fontFamily:'Poppins-Regular',
    fontSize:16,
    letterSpacing:1
  },
  option:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
  optionButton:{
    backgroundColor:'rgba(255,255,255,0.4)',
    marginHorizontal:5,
    paddingVertical:10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
    overflow:'hidden',
    marginVertical:5,
    width:'45%'
  },
  buttonTitle:{
    fontFamily:'Poppins-Regular',
    fontSize:16,
    color:'#2a2a22'
  },
  button:{
    flexDirection:'row', 
    alignItems:'center', 
    backgroundColor:'blue', 
    width:120,
    paddingVertical:5, 
    justifyContent:'center',
    borderRadius:10,
    marginTop:10
  }
});

export default HomeScreen;
