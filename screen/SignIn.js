
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput, Checkbox } from 'react-native-paper';

export default function Signin() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Sign in</Text>
      <Text style={styles.text2}>Welcome back! Please enter your details</Text>

      <View style={styles.inputContainer}>
        <TextInput
          label="Email"
          mode="offline"
          placeholder=""
          left={<TextInput.Icon color={'violet'} size={15} icon={"email-outline"} style={{ backgroundColor: '#FF9BD2' }} />}
          style={styles.input}
        />
        <TextInput
          label="Password"
          mode="offline"
          secureTextEntry
          left={<TextInput.Icon color={'#40A2E3'} size={15} icon={"lock-outline"} style={{ backgroundColor: '#BFCFE7' }} />}
          style={styles.input}
        />

        <View style={styles.checkboxContainer}>
          <Checkbox status='unchecked' />
          <Text style={{ marginLeft: 5 }}>Remember Me</Text>
        </View>
      </View>

      <TouchableOpacity>
        <Text style={styles.text3}>Forgot password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Sign In</Text>
      </TouchableOpacity>
      <View style={{ marginTop: 25, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap:130 }}>
      <TouchableOpacity>
                    <Text style={{ fontSize: 15, fontWeight: '300', marginLeft: 40 }}>Create account</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ marginRight: 40, color: 'orange', borderWidth: 1, borderColor: '#EEEDEB', backgroundColor: '#EEEDEB', borderRadius: 15, padding: 5, width: 70, textAlign: 'center', fontSize: 15, fontWeight: '400' }}>Sign Up</Text>
             </TouchableOpacity>
             </View>
      <View style={styles.view2}>
        <TouchableOpacity><Icon name="facebook" size={30} color="blue" style={styles.socialIcon} /></TouchableOpacity>
        <TouchableOpacity><Icon name="google" size={30} color="red" style={styles.socialIcon} /></TouchableOpacity>
        <TouchableOpacity><Icon name="apple" size={30} color="black" style={styles.socialIcon} /></TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: -5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: 300,
    alignSelf: 'center',
  },
  input: {
    marginTop: 10,
    backgroundColor: '#EEF5FF',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'flex-start', 
    width:300,
  },
  text3: {
    marginTop: 90,
    color: '#add8e6',
  },
  btn: {
    backgroundColor: '#40A2E3',
    padding: 20,
    width: 300,
    borderRadius: 20,
    marginTop: 20,
    color: 'white',
    textAlign: 'center',
  },
  view2: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    marginTop: 80,
    borderRadius: 60,
    border: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcon: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 80,
    padding: 10,
    backgroundColor: '#EEF5FF',
  },
});
