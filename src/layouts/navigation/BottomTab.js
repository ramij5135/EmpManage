import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/Employee/EmployeeHomeScreen';
import AssignWork from '../screens/Employee/AssingWorkScreen';
import ProfileScreen from '../screens/Employee/ProfileScreen';

const Tab = createBottomTabNavigator();


const BottomTab = () => {
    // console.log('props=========>', props.route);
    return(
        <Tab.Navigator>
            <Tab.Screen name="Dashboard" component={HomeScreen} options={{ tabBarIcon: ({ focused }) => (
                    <MaterialIcons color={focused ? "#199e1e" : "#C6C4C0"} name="dashboard" size={25} />
                ),
                headerShown:false
            }}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: ({ focused }) => (
                    <Ionicons color={focused ? "#199e1e" : "#C6C4C0"} name="person" size={25} />
                ),
                headerShown:false
            }}/>
            <Tab.Screen name="AssignWork" component={AssignWork} options={{ tabBarIcon: ({ focused }) => (
                    <Ionicons color={focused ? "#199e1e" : "#C6C4C0"} name="md-list" size={25} />
                ),
                headerShown:false
            }} />
        </Tab.Navigator>
    )
}

export default BottomTab;