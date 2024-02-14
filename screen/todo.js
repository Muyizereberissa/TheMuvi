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

      <View style={{width:"100%"}}>
  <TextInput style={{borderBottomWidth:2, borderRadius:5, padding:10, marginTop:200, width:"60%", backgroundColor:'#f8f8ff'}}>Enter new todo item</TextInput>
  <TouchableOpacity style={{backgroundColor:'orange', color:'white', width:"20%", alignItems:'center', padding:5, textAlign:'right', marginTop:"-10%",  borderRadius:5}}>
  <Text>Add Todo</Text>
  </TouchableOpacity>
</View>
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
