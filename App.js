import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import HomePage from './Screens/HomePage';
import Chatpage from './Screens/ChatPage';
import NewAccount from './Screens/NewAccount';
import Profile from './Screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const tab = createBottomTabNavigator();


function Home(){

  return (
  <SafeAreaView style = {styles.parent_view}>
    <HomePage/>
  </SafeAreaView>)
}

export default function Nshades()  {

  return (
    <NavigationContainer>
      <tab.Navigator>
        <tab.Screen name = "homepage" 
        component = {Home} options = {{headerShown:false}}/>
      </tab.Navigator>
      
    </NavigationContainer>
          
  );
}

const styles = StyleSheet.create({

  parent_view : {
    flex :1,
  },
});