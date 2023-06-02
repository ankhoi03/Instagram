import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import ItemSearchUser from '../Component_Dat/ItemSearchUser';

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
    title: 'I heard this is a good movie, s…',
  },
  {
    id: '3',
    images: require('../Image_Dat/avt2.png'),
    name: 'martini_rond',
    title: 'See you on the next meeting!',
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

const SearchAcount = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent={true}
        backgroundColor={'transparent'}></StatusBar>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 24 }}>
        <TouchableOpacity>
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
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => <ItemSearchUser data={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default SearchAcount;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 30,
  },
  searchView: {
    width: 330,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#BBBBC3',
    marginStart: 10,
  },
  textInput: {
    height: 36,
    width: 280,
    padding: 5,
  },
});
