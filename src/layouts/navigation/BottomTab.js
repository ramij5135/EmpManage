import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/Employee/EmployeeHomeScreen';
import AssignWork from '../screens/Employee/AssingWorkScreen';

const Tab = createBottomTabNavigator();


const BottomTab = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ focused }) => (
                    <Ionicons color={focused ? "#199e1e" : "#C6C4C0"} name="home" size={25} />
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