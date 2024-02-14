import { StatusBar } from 'expo-status-bar';
import { View,Text  } from 'react-native';
import SignIn from './screen/SignIn.js';
// import Shipping from './screen/Shipping.js';

export default function App () {
  return (
      <SignIn />
      // <Shipping/>
  );
}