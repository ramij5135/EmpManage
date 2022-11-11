import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import AdminScreen from '../screens/Admin/AdminScreen';
import EmployeeLogin from '../screens/Employee/EmployeeLoginScreen';
import EmployeeEntryScreen from '../screens/Admin/EmployeeEntryScreen';
import AsignWorkScreen from '../screens/Admin/AsignWorkScreen';
import AdminLoginScreen from '../screens/Admin/AdminLoginScreen';
import HomeScreen from '../screens/Employee/EmployeeHomeScreen';
import BottomTab from './BottomTab';
import VicheleScreen from '../screens/Admin/VichelScreen';
import Attendence from '../screens/Employee/AttendenceScreen';
import VisitScreen from '../screens/Employee/VisitScreen';
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Login' >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="AdminScreen" component={AdminScreen} />
            <Stack.Screen name="Emp_Login" component={EmployeeLogin} />
            <Stack.Screen name="EmployeeEntryScreen" component={EmployeeEntryScreen} />
            <Stack.Screen name="AsignWorkScreen" component={AsignWorkScreen} />
            <Stack.Screen name="AdminLoginScreen" component={AdminLoginScreen} />
            <Stack.Screen name='VicheleScreen' component={VicheleScreen} />
            <Stack.Screen name='BottomTab' component={BottomTab} />
            <Stack.Screen name='Attendence' component={Attendence} />
            <Stack.Screen name='VisitList' component={VisitScreen} />
        </Stack.Navigator>
    );
};
export default AppNavigation;
