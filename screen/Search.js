import { ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'
import React, { useState, useEffect } from 'react'
import Searchcomp from '../components/Searchcomp'

const Search = ({ navigation }) => {
  const [searched, setSearched] = useState([]);
  const [searchText, setSearchText] = useState('');

  const options = { 
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MWM1YzNjZTI1OWZjY2IxODU0MDc5OGM5MGQ3MCIsInN1YiI6IjYzZDhkZTM1YTkxMTdmMDA5ZGE0MDI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32-d9hDkp91rDw98i-VzmDQIOVZA-0DHeIOn9Af2JTI'
    }
  };

  const searchMovies = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?language=en-US&page=1&query=${searchText}`, options);
      const data = await response.json();
      setSearched(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (searchText.length > 0) {
      searchMovies();
    } else {
      setSearched([]);
    }
  }, [searchText]);

  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={{}}></View>
        <Text style={{ marginLeft: 20, color: 'white', fontSize: 25 }}>Search</Text>
        <View style={{ flexDirection: 'row', marginTop: 20, backgroundColor: '#252625', padding: 10 }}>
          <TextInput
            style={{ marginLeft: 20, color: 'white', flex: 1 }}
            placeholder="Type, title, categories, years, etc"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
          <Ionicons name="search-outline" size={24} color="yellow" style={{ marginLeft: 10 }} />
        </View>
        <View style={{ height: 20 }}></View>
        <View>
          
          <FlatList
            vertical={true}
            style={styles.list}
            data={searched}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => (
              <Searchcomp img={item.poster_path} text={item.original_title} year={item.release_date} type={item.media_type} onPress={()=>{navigation.navigate('Action', item)}} />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#26282C',
    width: '100%',
    height: '100%',
  },
  separator: {
    height: 10,
  },
  list: {
    padding: 10,
  },
});
