import { StatusBar } from 'expo-status-bar';
import { View,Text  } from 'react-native';
// import SignIn from './screen/SignIn.js';
import React from 'react';
// import Login from './Login'
import Register from '../screen/Register.js';



export default function App () {
  return (
    <View>
      {/* // <SignIn />
      // <Shipping/>
      // <Photo/> */}
      {/* <Login /> */}
      <Register/>
    </View>
  );
}