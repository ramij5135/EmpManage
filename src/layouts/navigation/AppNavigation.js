import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import AdminScreen from '../screens/Admin/AdminScreen';
import EmployeeEntryScreen from '../screens/Admin/EmployeeEntryScreen';
import AsignWorkScreen from '../screens/Admin/AsignWorkScreen';
import AdminLoginScreen from '../screens/Admin/AdminLoginScreen';
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Login' >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="AdminScreen" component={AdminScreen} />
            <Stack.Screen name="EmployeeEntryScreen" component={EmployeeEntryScreen} />
            <Stack.Screen name="AsignWorkScreen" component={AsignWorkScreen} />
            <Stack.Screen name="AdminLoginScreen" component={AdminLoginScreen} />
        </Stack.Navigator>
    );
};
export default AppNavigation;
