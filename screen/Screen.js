import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, View, Text, TouchableOpacity, ScrollView } from 'react-native';

const image = { uri: 'https://media.wired.com/photos/5db0965e60047600090d3a68/16:9/w_2287,h_1286,c_limit/Culture_jokerstairs_rev-1-JOK-19666_High_Res_JPEG.jpg' };

const Screen = ({ navigation }) => {
    return (   
        <ScrollView>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <StatusBar style="auto" />
                <ImageBackground source={image} resizeMode="cover" style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', position: 'absolute', backgroundColor: 'rgba(000,000,000,0.7)', height: '100%', width: '100%' }}>
                        <View style={{ gap: 10, width: '90%' }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>Enjoy your favorite {"\n"} movie everywhere</Text>
                            <Text style={{ color: 'white', fontSize: 15 }}>Browse through our collections and {"\n"} and discover hundreds of movies and series that {"\n"} you'll love! </Text>
                        </View>
                        <View style={{ backgroundColor: '#FCD22E', width: '90%', height: 50, borderRadius: 10, justifyContent: 'center', alignItems: 'center', bottom: 20, position: 'absolute' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('screen2')}>
                                <Text style={{ color: 'black', fontSize: 16 }}>Get Started</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
    );
};

export default Screen;
