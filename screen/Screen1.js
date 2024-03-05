import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Image, View } from 'react-native';

const Screen1 = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Signup');
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={{ backgroundColor: '#1F2123', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar style="auto" />
            <TouchableOpacity>
                <Image source={require('../assets/logo.jpg')} style={{}} />
            </TouchableOpacity>
        </View>
    );
};

export default Screen1;
