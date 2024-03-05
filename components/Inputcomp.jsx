import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Inputcomp = ( {image, text,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }} style={{width:400, height: 350, marginVertical:10}}/>
      <Text style={{position: 'absolute', backgroundColor:'#f1b91c', color: 'black', right: 10, top: 10, borderRadius: 4, width: 30, textAlign: 'center', padding: 0}}>{text}</Text>
   
    </TouchableOpacity>
  )
}

export default Inputcomp   