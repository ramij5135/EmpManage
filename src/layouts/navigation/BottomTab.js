import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/Employee/EmployeeHomeScreen';
import AssignWork from '../screens/Employee/AssingWorkScreen';
import ProfileScreen from '../screens/Employee/ProfileScreen';
import { COLORS } from '../../utils/globalStyles';

const Tab = createBottomTabNavigator();


const BottomTab = () => {
    return(
        <Tab.Navigator screenOptions={{
            tabBarStyle:{
                // borderRadius:30,
                // position:'absolute',
                // marginHorizontal:10,
                // bottom:5,
                // backgroundColor:COLORS.white
            }
        }}>
            <Tab.Screen name="Dashboard" component={HomeScreen} options={{ tabBarIcon: ({ focused }) => (
                    <MaterialIcons color={focused ? COLORS.tab : COLORS.grey} name="dashboard" size={25} />
                ),
                headerShown:false,
                tabBarShowLabel:false   
            }}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: ({ focused }) => (
                    <Ionicons color={focused ? COLORS.tab : COLORS.grey} name="person" size={25} />
                ),
                headerShown:false,
                tabBarShowLabel:false
            }}/>
            <Tab.Screen name="AssignWork" component={AssignWork} options={{ tabBarIcon: ({ focused }) => (
                    <Ionicons color={focused ? COLORS.tab : COLORS.grey} name="md-list" size={25} />
                ),
                headerShown:false,
                tabBarShowLabel:false
            }} />
        </Tab.Navigator>
    )
}

export default BottomTab;