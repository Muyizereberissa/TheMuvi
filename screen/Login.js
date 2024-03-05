// import { StatusBar } from "expo-status-bar";
// import { TextInput, Icon } from "react-native-paper";
// import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
// import FontAwesome from "react-native-vector-icons/FontAwesome"
// import AntDesign from "react-native-vector-icons/AntDesign"
// import Ionicons from "react-native-vector-icons/Ionicons"
// import React from "react";
// const images = require('../assets/rogin.jpg');


// const Login = ({navigation}) => {
//     return (
//         <ScrollView>
//         <View style={{ backgroundColor: '#F3F5F6',width: '100%',height: 'auto',display: 'flex',alignItems: 'center',paddingBottom: 40,}}>
//             <StatusBar style="auto"/>
//             <Image source={images} style={{width: '100%'}} />
//             <View style={{backgroundColor: '#F3F5F6',width: '100%',height: 'auto',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',paddingHorizontal: '6%',borderWidth: 0,}}>
//               <Text style={{fontSize: 25,fontWeight: 'bold',}}>Login</Text>
//               <TextInput
//                     style={{width: '100%',marginTop: 30,display: 'flex',flexDirection: 'row',alignItems: 'center',backgroundColor: 'white',paddingLeft: '4%',borderTopLeftRadius: 25,borderTopRightRadius: 25,borderWidth: 0,height: 65,}}
//                     mode="flat"
//                     underlineColor="white"
//                     placeholder="Username" placeholderTextColor={'#B8B7C0'}
//                     left={<TextInput.Icon icon={'account-outline'} color='#F6A035' style={{backgroundColor: '#FDE8EA', marginLeft: '90%',}} />}
//                 />
//                 <TextInput
//                     style={{  width: '100%',display: 'flex',flexDirection: 'row',alignItems: 'center',backgroundColor: 'white',paddingLeft: '4%',borderRadius: 25,borderBottomWidth: 0,height: 65,}}
//                     mode="flat"
//                     underlineColor="white"
//                     secureTextEntry
//                     placeholder="Password" placeholderTextColor={'#B8B7C0'}
//                     left={<TextInput.Icon icon={'lock-outline'} color='#A09EF3' style={{backgroundColor: '#E6ECFC', marginLeft: '90%',}} />}
//                 />
//                 <View style={{marginTop: 20,width: '100%',height: 'auto',display: 'flex',flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',}}>
//                     <TouchableOpacity>
//                         <Text style={{color: '#818FFC',fontSize: 15,}}>Forgot Password?</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={{backgroundColor: '#1A1C33',width: '40%',height: 50,borderRadius: 30,display: 'flex',flexDirection: 'row',justifyContent: 'center',alignItems: 'center',}}
//                     onPress={() =>
//                         navigation.navigate('Register')
//                       }
                    
//                     >
//                         <Text style={{color: 'white',fontSize: 16,}}>Login</Text>
//                     </TouchableOpacity>
//                 </View>
//                 <View style={{marginTop: 100,width: '100%',height: 'auto',display: 'flex',flexDirection: 'row',justifyContent: 'space-around',}}>
//                     <TouchableOpacity style={{width: '15%',height: 50,alignItems: 'center',display:'flex',flexDirection: 'row',justifyContent: 'center',backgroundColor: 'white',borderRadius: 30,}}>
//                         <Ionicons name="logo-facebook" style={{color: '#216CD3',fontSize: 30,}} />
//                     </TouchableOpacity>
//                     <TouchableOpacity style={{width: '15%',height: 50,alignItems: 'center',display:'flex',flexDirection: 'row',justifyContent: 'center',backgroundColor: 'white',borderRadius: 30,}}>
//                         <Image source={require('../assets/google.jpg')} style={{width: '80%',height: '80%',}} />
//                     </TouchableOpacity>
//                     <TouchableOpacity style={{width: '15%',height: 50,alignItems: 'center',display:'flex',flexDirection: 'row',justifyContent: 'center',backgroundColor: 'white',borderRadius: 30,}}>
//                         <AntDesign name="apple1" style={{ color: '#15131E',fontSize: 30,}} />
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//         </ScrollView>
// )
// };


// export default Login


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();




<NavigationContainer>
<Stack.Navigator>
        <Stack.Screen name='Login'  component={Login} /> */}
        <Stack.Screen name='Register'  component={Register}/>
        <Stack.Screen name='Home'  component={Home} options={{headerShown : false}}/>
      </Stack.Navigator>
</NavigationContainer>