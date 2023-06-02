import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ItemFollower from '../Component_Dat/ItemFollower'

const data = [
  {
    id: '1',
    images: require('../Image_Dat/Oval.png'),
    name: 'Joshua',
    title: 'Have a nice day, bro!',
  },
  {
    id: '2',
    images: require('../Image_Dat/avt1.png'),
    name: 'Karenne',
    title: 'Hey bitch you can =',
  },
  {
    id: '3',
    images: require('../Image_Dat/avt2.png'),
    name: 'martini_rond',
    title: 'I can see you',
  },
  {
    id: '4',
    images: require('../Image_Dat/avt3.png'),
    name: 'andrewww_',
    title: 'Sounds good 😂😂😂',
  },
  {
    id: '5',
    images: require('../Image_Dat/avt3.png'),
    name: 'andrewww_',
    title: 'Sounds good 😂😂😂',
  },
  {
    id: '6',
    images: require('../Image_Dat/avt3.png'),
    name: 'andrewww_',
    title: 'Sounds good 😂😂😂',
  },
  {
    id: '7',
    images: require('../Image_Dat/avt3.png'),
    name: 'andrewww_',
    title: 'Sounds good 😂😂😂',
  },
  {
    id: '8',
    images: require('../Image_Dat/avt3.png'),
    name: 'andrewww_',
    title: 'Sounds good 😂😂😂',
  },
  {
    id: '9',
    images: require('../Image_Dat/avt3.png'),
    name: 'andrewww_',
    title: 'Sounds good 😂😂😂',
  },
  {
    id: '10',
    images: require('../Image_Dat/avt3.png'),
    name: 'andrewww_',
    title: 'Sounds good 😂😂😂',
  },
];
const Follower = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity style={{ height: 26, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../Image_Dat/Back.png')} />
        </TouchableOpacity>
        <View style={styles.searchView}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require('../Image_Dat/Search.png')} />
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            placeholderTextColor={'white'}
          />
          <TouchableOpacity>
            <Image name="check" size={18} color="#4E4B66" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => <ItemFollower data={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default Follower

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20
  },
  searchView: {
    width: '90%',
    height: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#BBBBC3',
    marginStart: 24,
  },
  textInput: {
    height: 36,
    width: 280,
    padding: 5,
  },
});