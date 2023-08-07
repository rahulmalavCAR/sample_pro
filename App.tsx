
import React from 'react';
import {
  View,
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

const App:React.FC =() =>  {
  // const stack=createNativeStackNavigator();
  return(
    // <NavigationContainer >
    //   <stack.Navigator initialRouteName='HomeScreen'>
      
    //   </stack.Navigator>
    // </NavigationContainer>
    <HomeScreen/>
  )
}
export default App;
