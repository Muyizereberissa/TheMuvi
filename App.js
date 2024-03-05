import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Screen from './Screen/Screen.js';
import Screen2 from './Screen/Screen2.js';
import Screen1 from './Screen/Screen1.js'
import Register1 from './Screen/Register1.js';
import Signup from './Screen/Signup.js';
import Register2 from './Screen/Register2.js'
import Homes from './Screen/Homes.js';
import Search from './Screen/Search.js';
import Profile from './Screen/Profile.js';
import Action from './Screen/Action.js'
import AntDesign from "react-native-vector-icons/AntDesign"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

 function Bottomnav() {
  return (
      <Tab.Navigator screenOptions={{ headerShown: false}}>
        <Tab.Screen name='Home' component={Homes} options={{
          tabBarIcon: () =>
            <AntDesign name='home' size={20} color='red'/>
        }}/>
        <Tab.Screen name='Search' component={Search} options={{
          tabBarIcon: () =>
            <AntDesign name='search1' size={20} color='red'/> }} screenOptions={{ headerShown: false }} />
        <Tab.Screen name='Profile' component={Profile}  options={{
          tabBarIcon: () =>
            <AntDesign name='profile' size={20} color='red'/>}} />
      </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='screen1' component={Screen1} />
        <Stack.Screen name='screen' component={Screen} />
        <Stack.Screen name='screen2' component={Screen2} />
        <Stack.Screen name='register1' component={Register1} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Main' component={Bottomnav} /> 
        <Stack.Screen name='Search' component={Search} /> 
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Register2' component={Register2}/>
        <Stack.Screen name='Action' component={Action}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
