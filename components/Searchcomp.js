import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';


export default function Searchcomp({ img, text, year, type, onPress }) {
  return (
    <Pressable style={{ flexDirection: 'row', flexWrap: 'wrap' }} onPress={onPress}>
      <View>
        <Image source={{ uri: `https://image.tmdb.org/t/p/w500${img}` }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{text}</Text>
        <Text>{year}</Text>
        <Text>{type}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  textContainer: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  title: {
    color: 'white',
    fontSize: 15,
  },
});
