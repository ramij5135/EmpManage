import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Alert, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../../utils/globalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getMethod, postMethod } from '../../../utils/helper';
import { Employee_Attendence_Data, Employee_Attendence_In, Employee_Attendence_List, Employee_Attendence_Out } from '../../store/actions/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const optionButton = [
  {
    id: 0,
    optionName: 'In Time',
    icon: 'time-outline',
    btnTitle: 'In Time'
  },
  {
    id: 1,
    optionName: 'Out Time',
    icon: 'time-outline',
    btnTitle: 'Out Time'
  },
  {
    id: 2,
    optionName: 'Attendence',
    icon: 'calendar',
    btnTitle: 'Attendence'
  },
  {
    id: 3,
    optionName: 'My visit list',
    icon: 'list-outline',
    btnTitle: 'My visit list'
  },
  {
    id: 4,
    optionName: 'Your Task',
    icon: 'bicycle-outline',
    btnTitle: 'Your Task'
  },
  {
    id: 5,
    optionName: 'Visiting Report',
    icon: 'document-attach-outline',
    btnTitle: 'Visiting Report'
  },
  {
    id: 6,
    optionName: 'Add New Shop',
    icon: 'add-outline',
    btnTitle: 'Add New Shop'
  },
  {
    id: 7,
    optionName: 'My Location',
    icon: 'location-outline',
    btnTitle: 'My Location'
  },
  {
    id: 8,
    optionName: 'My Store',
    icon: 'home-outline',
    btnTitle: 'My Store'
  },
  {
    id: 9,
    optionName: 'Complaint',
    icon: 'notifications-off-outline',
    btnTitle: 'Complaint'
  },
  {
    id: 10,
    optionName: 'Vichele',
    icon: 'bicycle-outline',
    btnTitle: 'Vechile'
  },
]


const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [res, setRes] = useState()
  const userData = useSelector(state => state.auth.user)
  const Emp_Id = userData.ID;
  const attendence = useSelector(state => state?.attendence?.atnList[0])
  console.log('attendence', attendence);
  const InTime = attendence?.InTime;
  const OutTime = attendence?.OutTime;
  // useEffect(() => {
  //   const backAction = () => {
  //     AsyncStorage.getItem('token').then((res) =>
  //       res ? navigation.goBack() : undefined
  //     )
  //     return true;
  //   };
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );
  //   return () => backHandler.remove();
  // }, []);

  useEffect(() => {
    const today = new Date().toJSON().slice(0, 10);
    try {
      getMethod(`EmployeeApi/AttendanceList?Emp_Id=${Emp_Id}`).then(async (res) => {
        const AtnList = res?.data.AttendanceList;
        const AtnData = res?.data.data;
        dispatch(Employee_Attendence_List(AtnList));
        dispatch(Employee_Attendence_Data(AtnData))
      }).catch((error) => {
        console.log(error);
      })
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  const AttendenceInTime = () => {
    const today = new Date();
    const timeIn = today.getHours() + ":" + today.getMinutes();
    try {
      var raw = JSON.stringify({
        User_Id: userData.ID,
        InTime: timeIn,
      });
      postMethod('EmployeeApi/EmpAttendance', raw).then((res) => {
        Alert.alert(res.data.msg);
      }).catch((error) => {
        console.log('hi');
      })
    } catch (error) {
      console.log('error', error);
    }
  }

  const AttendenceOutTime = () => {
    const today = new Date();
    const timeOut = today.getHours() + ":" + today.getMinutes();
    try {
      var raw = JSON.stringify({
        User_Id: userData.ID,
        OutTime: timeOut,
      });
      postMethod('EmployeeApi/EmpAttendance', raw).then((res) => {
        Alert.alert(res.data.msg);
      }).catch((error) => {
        console.log('hi');
      })
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.welcomeName}>
          {userData.UserName}
          {/* Name */}
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <View style={styles.square} />
          <Image style={styles.profileImg} source={ userData.ImgUrl ? {uri: `https://demo38.gowebbi.in${userData.ImgUrl}`} : require('../../../assets/imgs/user.png')} />
          <Text style={styles.workTitle}>
            {userData.Designation}
            {/* Designation */}
          </Text>
          <Text style={styles.workTime}>Office In-Out Time</Text>
        </View>
        <View style={styles.option}>
          {
            optionButton.map((op) => {
              return (
                <View key={op.id.toString()} style={styles.optionButton}>
                  {
                    op.btnTitle === 'In Time' ?
                      <>
                        <Text style={styles.buttonTitle}>{op.optionName}</Text>
                        {
                          attendence?.Date === new Date().toJSON().slice(0, 10) && InTime ? <Text>{InTime}</Text> : null
                        }
                        <View style={styles.button}>
                          <Ionicons name='time-outline' size={15} color={'#fff'} />
                          <Text onPress={attendence?.Date === new Date().toJSON().slice(0, 10) && InTime ? null : AttendenceInTime} style={{ color: '#fff', marginLeft: 5 }}>{op.btnTitle}</Text>
                        </View>
                      </> : op.btnTitle === 'Out Time' ?
                        <>
                          <Text style={styles.buttonTitle}>{op.optionName}</Text>
                          {
                            attendence?.Date === new Date().toJSON().slice(0, 10) && OutTime ? <Text>{OutTime}</Text> : null
                          }
                          <View style={styles.button}>
                            <Ionicons name='time-outline' size={15} color={'#fff'} />
                            <Text onPress={AttendenceOutTime} style={{ color: '#fff', marginLeft: 5 }}>{op.btnTitle}</Text>
                          </View>
                        </> :
                        <>
                          <Ionicons name={op.icon} size={30} />
                          <Text onPress={
                            op.optionName === 'Attendence' ? () => navigation.navigate('Attendence') : op.optionName === 'My visit list' ? () => navigation.navigate('VisitList') : op.optionName === 'Your Task' ? () => navigation.navigate('YourTask') : op.optionName === 'Visiting Report' ? () => navigation.navigate('Report') : op.optionName === 'Add New Shop' ? () => navigation.navigate('NewShop') : op.optionName === 'My Location' ? () => navigation.navigate('Location') : op.optionName === 'My Store' ? () => navigation.navigate('Store') : op.optionName === 'Complaint' ? () => navigation.navigate('Complaint') : op.optionName === 'Vichele' ? () => navigation.navigate('VechicleDetails') : null
                          } style={{ fontFamily: 'Poppins-Regular', fontSize: 16 }}>{op.optionName}</Text>
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
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    backgroundColor: COLORS.white,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcome: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16
  },
  welcomeName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: 'green'
  },
  wrapper: {
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    overflow: 'hidden',
    marginVertical: 10,
    paddingVertical: 20,
    alignItems: 'center',
  },
  square: {
    height: 0,
    width: 0,
    alignSelf: 'center',
    marginTop: -20,
    top: 0,
    borderBottomWidth: 20,
    borderRightWidth: 15,
    borderLeftWidth: 15,
    borderBottomColor: 'rgba(130,209,209,0.4)',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    transform: [{ rotate: '180deg' }],
    marginBottom: 10,
    overflow: 'hidden'
  },
  profileImg: {
    height: 70,
    width: 70,
    borderRadius: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20
  },
  workTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#2a2a2a',
    letterSpacing: 1
  },
  workTime: {
    color: '#2a2a22',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    letterSpacing: 1
  },
  option: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  optionButton: {
    backgroundColor: COLORS.white,
    marginHorizontal: 5,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    overflow: 'hidden',
    marginVertical: 5,
    width: '45%'
  },
  buttonTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#2a2a22'
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.blue,
    width: 120,
    paddingVertical: 5,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 10
  }
});

export default HomeScreen;
