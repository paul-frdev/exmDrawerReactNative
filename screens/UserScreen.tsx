import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button, StyleSheet } from 'react-native';

export const UserScreen = () => {
  const navigation = useNavigation<DrawerNavigationProp<any>>()
  const operDrawerHandler = () => {
    navigation.toggleDrawer();
  }
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      <Button title='Open the drawer' onPress={operDrawerHandler} />
    </View>
  )
}


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064',
  },
});