import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { UserScreen } from '../screens/UserScreen';
import { WelcomeScreen } from '../screens/WelcomeScreen';

const BottomTab = createBottomTabNavigator<any>();

export const BottomTabs = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName='User' screenOptions={{

      }}>
        <BottomTab.Screen name='Welcome' component={WelcomeScreen} options={{
          tabBarIcon: ({color, size}) => <Ionicons name="home" color={color} size={size} />
        }}/>
        <BottomTab.Screen name='User' component={UserScreen} options={{
          tabBarIcon: ({color, size}) => <Ionicons name="person" color={color} size={size} />
        }}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}
