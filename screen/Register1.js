import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { TextInput, Text } from "react-native-paper";
import { View, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Register1 = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    };

    return (
        <View style={{ backgroundColor: '#26282C', width: '100%', height: '100%' }}>
            <StatusBar style="auto" />
            <View style={{ top: 200, gap: 25, margin: 12.5 }}>
                <View style={{ gap: 10 }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Create Account</Text>
                    <Text style={{ color: 'white', fontSize: 15 }}>Enter information below or login with social {'\n'} account to get started</Text>
                </View>
                <View style={{ gap: 10 }}>
                    <TextInput 
                        label="Email" 
                        mode="flat" 
                        style={{ backgroundColor: '#26282C', color: 'white' }} 
                        right={<TextInput.Icon icon={'email-outline'} color='#FCD22E' style={{ marginLeft: '90%' }} />} 
                    />
                    <TextInput 
                        label="Password" 
                        mode="flat" 
                        style={{ backgroundColor: '#26282C', color: 'white', position: 'relative' }} 
                        secureTextEntry={!isPasswordVisible}
                        right={
                            <TextInput.Icon 
                                icon={isPasswordVisible ? 'eye' : 'eye-off'} 
                                color='#FCD22E' 
                                style={{ marginLeft: '90%' }} 
                                onPress={togglePasswordVisibility} 
                            />
                        } 
                    />
                    <TextInput 
                        label="Confirmation Password" 
                        mode="flat" 
                        secureTextEntry={!isConfirmPasswordVisible}
                        style={{ backgroundColor: '#26282C', color: 'white', position: 'relative' }} 
                        right={
                            <TextInput.Icon 
                                icon={isConfirmPasswordVisible ? 'eye' : 'eye-off'} 
                                color='#FCD22E' 
                                style={{ marginLeft: '90%' }} 
                                onPress={toggleConfirmPasswordVisibility} 
                            />
                        } 
                    />
                </View>
                <View>
                    <Text style={{ color: 'white' }}>or continue with</Text>
                    <AntDesign name='facebook-square' size={20} color={'blue'} style={{ color: 'blue' }} />
                </View>
                <View style={{ backgroundColor: '#FCD22E', width: '95%', height: 40, borderRadius: 5, justifyContent: 'center', alignItems: 'center', top: 170, margin: 10 }}>
                    <TouchableOpacity>
                        <Text style={{ color: 'black', fontSize: 16 }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Register1;
