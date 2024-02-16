import { StatusBar } from 'expo-status-bar';
import { View,Text  } from 'react-native';
// import SignIn from './screen/SignIn.js';
import React from 'react';
import Login from './screen/Login.js'
import Register from './screen/Register.js';
import Home from './screen/Home.js'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



export default function App () {
  return (
<NavigationContainer>
<Stack.Navigator>
        <Stack.Screen name='Login'  component={Login} />
        <Stack.Screen name='Register'  component={Register}/>
        <Stack.Screen name='Home'  component={Home} options={{headerShown : false}}/>
      </Stack.Navigator>
</NavigationContainer>
  );
}