import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{backgroundColor:'orange', color:'white', width:400, padding:30, textAlign:'right', marginTop:30, fontSize:30}}>Todo</Text>
      </View>
      <Text style={{marginTop:40, width:300}}>Todo list items </Text>
      <TouchableOpacity style={{borderWidth: 1, gap:10, bordercolor: 'black', padding: 10, width: 300, borderRadius: 10, borderStyle: 'dashed', marginTop:20, display:'flex', flexDirection:'row'}}>
          <Text>1</Text>
          <Text>cleaning</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth: 1, gap:10, bordercolor: 'black', padding: 10, width: 300, borderRadius: 10, borderStyle: 'dashed', marginTop:20, display:'flex', flexDirection:'row'}}>
        <Text>1</Text>
        <Text>cleaning</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth: 1, gap:10, bordercolor: 'black', padding: 10, width: 300, borderRadius: 10, borderStyle: 'dashed', marginTop:20, display:'flex', flexDirection:'row'}}>
        <Text>1</Text>
        <Text>cleaning</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth: 1, gap:10, bordercolor: 'black', padding: 10, width: 300, borderRadius: 10, borderStyle: 'dashed', marginTop:20, display:'flex', flexDirection:'row'}}>
        <Text>1</Text>
        <Text>cleaning</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />

      {/* <View style={{width:"100%"}}>
  <TextInput style={{borderBottomWidth:2, borderRadius:5, padding:10, marginTop:200, width:"60%", backgroundColor:'#f8f8ff'}}>Enter new todo item</TextInput>
  <TouchableOpacity style={{backgroundColor:'orange', color:'white', width:"20%", alignItems:'center', padding:5, textAlign:'right', marginTop:"-10%",  borderRadius:5}}>
  <Text>Add Todo</Text>
  </TouchableOpacity>
</View> */}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



// import { StatusBar } from 'expo-status-bar';
// import { View, Text, TouchableOpacity } from 'react-native';
// import React from 'react'
// import {Icon} from "react-native-elements";
// import { AntDesign, Entypo, FontAwesome } from "react-native-vector-icons"
// import { TextInput, checkbox } from "react-native-paper"

// export const Signin = () => {
//     return (
//         <View>


//             <TouchableOpacity>
//                 <Entypo name='cross' size={20} style={{ marginTop: 50, marginLeft: 30, }} />
//             </TouchableOpacity>
//             <View style={{ alignItems: 'center' }}>

//                 <Text style={{ marginTop: 5, fontSize: 25, fontWeight: '500' }}>Sign ln</Text>
//                 <Text style={{ marginTop: 10, fontWeight: '300', fontSize: 15 }}>Welcome back! Please enter your details</Text>
//             </View>
//             <View>

//                 <TextInput label="Email" mode="offline" style={{ marginTop: 10, width: 300, alignSelf: 'center', backgroundColor: '#EEF5FF', }} />
//             </View>
//             {/* <View style={{}}>

//                 <CheckBox title="Remember" containerStyle={{ backgroundColor: 'white', borderColor: 'white', marginLeft: 30, fontWeight: '300', }} />
//             </View> */}

//             <View style={{ marginTop: 60, alignItems: 'center' }}>
//                 <Text style={{ color: '#40A2E3', padding: 10, fontWeight: '500', fontSize: 18 }}>Forgot Password</Text>
//                 <TouchableOpacity>
//                     <Text style={{ backgroundColor: '#40A2E3', color: 'white', borderRadius: 20, padding: 15, width: 290, textAlign: 'center', fontSize: 20, fontWeight: '500' }}>Sign ln</Text>
//                 </TouchableOpacity>
//             </View>
//             <View style={{ marginTop: 25, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
//                 <TouchableOpacity>
//                     <Text style={{ fontSize: 15, fontWeight: '300', marginLeft: 40 }}>Create account</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <Text style={{ marginRight: 40, color: 'orange', borderWidth: 1, borderColor: '#EEEDEB', backgroundColor: '#EEEDEB', borderRadius: 15, padding: 5, width: 70, textAlign: 'center', fontSize: 15, fontWeight: '400' }}>Sign Up</Text>
//                 </TouchableOpacity>
//             </View>
//             <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 40, }}>

//                 <Icon name="facebook" size={30} color="blue" style={{ borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10, backgroundColor: '#EEF5FF', marginLeft: 20 }} />
//                 <AntDesign name='google' size={24} color="red" style={{ borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10, backgroundColor: '#EEF5FF' }} />
//                 <Icon name="apple" size={30} color="black" style={{ borderWidth: 1, borderColor: 'white', borderRadius: 80, padding: 10, backgroundColor: '#EEF5FF', marginRight: 30 }} />
//             </View>



//             <StatusBar style="auto" />
//         </View>


//     )
// }