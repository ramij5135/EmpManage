import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import AdminScreen from '../screens/Admin/AdminScreen';
import EmployeeLogin from '../screens/Employee/EmployeeLoginScreen';
import EmployeeEntryScreen from '../screens/Admin/EmployeeEntryScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Login' >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="AdminScreen" component={AdminScreen} />
            <Stack.Screen name="Emp_Login" component={EmployeeLogin} />
            <Stack.Screen name="EmployeeEntryScreen" component={EmployeeEntryScreen} />
        </Stack.Navigator>
    );
};
export default AppNavigation;
