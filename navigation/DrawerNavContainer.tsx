import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer"
import { Ionicons } from "@expo/vector-icons"
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { UserScreen } from '../screens/UserScreen';

const Drawer = createDrawerNavigator<any>();

const DrawerNavContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='User' screenOptions={{
        drawerActiveBackgroundColor: "#1acccc",
        drawerStyle: { backgroundColor: "#ccc" }
      }}>
        <Drawer.Screen name='Welcome' component={WelcomeScreen} options={{
          headerStyle: { backgroundColor: "#ccc", },
          drawerLabel: "Welcome Screen",
          drawerIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />
        }} />
        <Drawer.Screen name='User' component={UserScreen} options={{
          drawerIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default DrawerNavContainer;
