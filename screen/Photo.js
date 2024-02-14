

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image, StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Photo() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="backspace-outline" size={30} color="black" />
        <Text style={{ fontSize: 20, fontWeight: '500' }}>Text to image</Text>
        <Entypo name="dots-three-vertical" size={30} color="black" />
      </View>
      <View style={styles.imagesContainer}>
        <View style={styles.row}>
          <Image source={require('../assets/image1.jpg')} style={styles.image} />
          <Image source={require('../assets/image1.jpg')} style={styles.image} />
        </View>
        <View style={styles.row}>
          <Image source={require('../assets/image1.jpg')} style={styles.image} />
          <Image source={require('../assets/image1.jpg')} style={styles.image} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
  },
  imagesContainer: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  image: {
    width: '48%',
    height: 800,
    aspectRatio:1,
    marginBottom:10,
    borderRadius:10,
    alignself:'center',

  },
});
