import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/AdminLoginScreen';
import AdminScreen from '../screens/AdminScreen';
import EmployeeEntryScreen from '../screens/EmployeeEntryScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="LoginScreen">
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="AdminScreen" component={AdminScreen} />
            <Stack.Screen name="EmployeeEntryScreen" component={EmployeeEntryScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigation;
