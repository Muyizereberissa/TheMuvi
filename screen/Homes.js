import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import Inputcomp from '../components/Inputcomp';
import Trendcomp from '../components/Trendcomp';
import Imagecomp from '../components/Imagecomp';

const Homes = ({navigation}) => {
  const [newRelease, setNewRelease] = useState([]);
  const [madeForYou, setMadeForYou] = useState([]);
  const [popularOnMuvi, setPopularOnMuvi] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MWM1YzNjZTI1OWZjY2IxODU0MDc5OGM5MGQ3MCIsInN1YiI6IjYzZDhkZTM1YTkxMTdmMDA5ZGE0MDI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32-d9hDkp91rDw98i-VzmDQIOVZA-0DHeIOn9Af2JTI'
      }
    };

    // Fetch New Release
    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => setNewRelease(response.results))
      .catch(err => console.error(err));

    // Fetch Made for You
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => setMadeForYou(response.results))
      .catch(err => console.error(err));

    // Fetch Popular on Muvi
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => setPopularOnMuvi(response.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={{ marginBottom: 60 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', marginTop: 60, alignSelf: 'start' }}>
            <Image source={require('../assets/logo.jpg')} />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 70, marginLeft: 180 }}>
            <Ionicons name="bookmark-outline" size={24} color="white" />
            <Ionicons name="notifications-outline" size={24} color="white" />
          </View>
        </View>

        <View>
          <ScrollView horizontal={true}>
            <View style={{ flexDirection: 'row', gap: 40 }}>
              <View>
                <Text style={{ color: '#f1b91c' }}>Featured</Text>
                <View style={{ width: 20, height: 2, backgroundColor: '#f1b91c' }}></View>
              </View>
              <View style={{ flexDirection: 'row', gap: 40 }}>
                <Text style={{ color: 'white' }}>Series</Text>
                <Text style={{ color: 'white' }}>Films</Text>
                <Text style={{ color: 'white' }}>origin</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', marginTop: 20, gap: 20, fontSize: 20 }}>
            <Trendcomp trend="Popular Today" />
            <Trendcomp trend="Marvel" />
            <Trendcomp trend="Fans Choice" />
            <Trendcomp trend="Star Wars" />
            <Trendcomp trend="Star Wars" />
            <Trendcomp trend="Star Wars" />
          </View>
        </ScrollView>

        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <Text style={{ color: 'white', fontSize: 25 }}> New Release</Text>
            <Text style={{ color: '#5f6064' }}>View more</Text>
          </View>

          <FlatList
            horizontal={true}
            style={styles.list}
            data={newRelease}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => (
              <Imagecomp text='0.8' image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}  onPress={()=>{navigation.navigate('Action', item)}} />
            )}
          />
        </View>

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', marginTop: 20, gap: 20 }}>
              {/* Add any additional content for this section if needed */}
            </View>
          </ScrollView>
        </View>

        <View>
          <View style={{ flexDirection: 'row', justifyContent:'space-between', marginTop: 20 }}>
            <Text style={{ color: 'white', fontSize: 25 }}> Made for you</Text>
            <Text style={{ color: '#5f6064' }}>View more</Text>
          </View>

          <FlatList
            horizontal={true}
            style={styles.list}
            data={madeForYou}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => (
              <Imagecomp text='0.8' image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}  onPress={()=>{navigation.navigate('Action', item)}}/>
            )}
          />
        </View>

        <Text style={{ color: 'white', marginTop: 20, fontSize: 25 }}>Popular on Muvi</Text>
        <View style={{ gap: 40 }}>
          
          <FlatList
            data={popularOnMuvi}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => (
              <Inputcomp text={item.vote_average} image={item.poster_path}  onPress={()=>{navigation.navigate('Action', item)}}/>
            )}
          />
              

        </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#26282C',
    width: '100%',
    height: '100%',
  },
  list: {
    marginTop: 20,
    flexDirection: 'row',
  },
  separator: {
    width: 10,
  },
});

export default Homes;

