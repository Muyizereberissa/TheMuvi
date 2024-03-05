import React from 'react'
import { StatusBar } from "expo-status-bar";
import { TextInput, Icon } from "react-native-paper";
import { View, Text, Image,TouchableOpacity } from "react-native";

const Screen2 = ({navigation}) => {
    return(
     <View style={{backgroundColor:'#26282C',width:'100%',height:'100%',position:'relative'}}>
        <View style={{marginTop:40}}>
        <Image source={require('../assets/logoa.jpg')}/>
        </View>
        <View style={{gap:20}}>
            <View style={{top:50}}>
                <Image source={require('../assets/logo1.jpg')}/>
            </View>
            <View style={{gap:20,justifyContent:'center',alignItems:'center',top:50}}>
               <Text style={{color:'white',fontSize:25}}>Welcome to Muvi</Text>
               <Text style={{color:'white',fontSize:20,opacity:0.5}}>Free movie streaming all your needs {'\n'} everytime and everywhere.</Text>
            </View >
            <View style={{backgroundColor: '#FCD22E',width: '95%',height: 50,borderRadius: 10,justifyContent: 'center',alignItems:'center',top:180,margin:10}}>
         <TouchableOpacity>
            <Text style={{color: 'black',fontSize: 16,}}>Watch Movie</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() =>
                        navigation.navigate('Home')
                      }>
            <Text style={{color:'white',alignSelf:'center',top:200}}>Sign In</Text>
            </TouchableOpacity>
        </View>

     </View>
    )
}

export default Screen2