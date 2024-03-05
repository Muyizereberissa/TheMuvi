import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'


const Imagecomp = ( {image, text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }} style={{width:250, height: 250}}/>
      <Text style={{position: 'absolute', backgroundColor:'#f1b91c', color: 'black', right: 10, top: 10, borderRadius: 4, width: 30, textAlign: 'center', padding: 0}}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Imagecomp   