import React from 'react';
import { View, Text, TouchableOpacity, Pressable, ImageBackground } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput, Checkbox } from 'react-native-paper';

const Input = ({ placeholder, mode, IconName, background, secureTextEntry }) => {
  return (
    <TextInput
      label={placeholder}
      mode={mode}
      style={{ backgroundColor: background, color: 'white' }}
      right={<TextInput.Icon icon={IconName} color="#FCD22E" />}
      secureTextEntry={secureTextEntry}
    />
  );
};

const Signup = ({navigation}) => {
  return (
    <View>
      <View style={{ backgroundColor: '#1f2123', paddingLeft: 50, paddingTop: 30, paddingBottom: 20, display: 'flex', flexDirection: 'row', gap: 25}}>
        <AntDesign name="arrowleft" size={24} color="black" style={{ color: 'white' }} />
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Sign In</Text>
      </View>
      <View style={{ backgroundColor: '#26282c', display: 'flex', paddingTop: 30, height: 700, paddingLeft: 30, borderWidth: 1 }}>
        <Text style={{ color: '#9d9fa3' }}>Email Address</Text>
        <Input
          placeholder={'jackyshacky03@gmail.com'}
          mode={'outlined'}
          IconName='email-outline'
          background={'#26282c'}
        />
        <Text style={{ color: '#9d9fa3' }}>Password</Text>
        <Input
          placeholder={'Your Password'}
          secureTextEntry={true}
          mode={'outlined'}
          background={'#26282c'}
          IconName={'lock-outline'}
        />
        <Pressable>
          <Text style={{ paddingTop: 10, paddingLeft: 231, color: '#9d9fa3', fontWeight: 'bold' }}>ForgetPassword?</Text>
        </Pressable>
        <View style={{ paddingLeft: 4, paddingTop: 30 }}>
          <TouchableOpacity style={{ backgroundColor: 'yellow', borderRadius: 10, width: 340 }} onPress={() =>
                        navigation.navigate('Main')
                      }>
            <Text style={{ padding: 8, textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ paddingTop: 30, textAlign: 'center', color: '#9d9fa3', fontWeight: 'bold', fontSize: 20 }}>or sign in with</Text>
        </View>
        <View style={{ paddingRight: 30 }}>
          <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', padding: 10, borderWidth: 1, marginBottom: 20, justifyContent: 'center', gap: 10, borderColor: 'gray' }}>
            <AntDesign name="google" size={24} color="red" style={{}} />
            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, color: '#9d9fa3' }}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', padding: 10, borderWidth: 1, gap: 10, justifyContent: 'center', marginBottom: 20, borderColor: 'gray' }}>
            <AntDesign name="link" size={24} color="white" style={{}} />
            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, color: '#9d9fa3' }}>Watch Movie</Text>
          </TouchableOpacity>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', gap: 20 }}>
          <Pressable>
            <Text style={{ paddingTop: 10, color: '#9d9fa3', fontWeight: 'bold', fontSize: 15, paddingLeft: 50 }}>Don't have an account?</Text>
          </Pressable>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
          <TouchableOpacity onPress={() =>
                        navigation.navigate('register1')
                      }>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'yellow'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;
