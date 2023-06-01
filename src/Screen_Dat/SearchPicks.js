import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ItemSearchPicks from '../Component_Dat/ItemSearchPicks';

const data = [
  {
    id: '1',
    images: require('../Image_Dat/post1.png'),
  },
  {
    id: '2',
    images: require('../Image_Dat/post2.png'),
  },
  {
    id: '3',
    images: require('../Image_Dat/post3.png'),
  },
  {
    id: '4',
    images: require('../Image_Dat/post1.png'),
  },
  {
    id: '5',
    images: require('../Image_Dat/post2.png'),
  },
  {
    id: '6',
    images: require('../Image_Dat/post3.png'),
  },
  {
    id: '7',
    images: require('../Image_Dat/post1.png'),
  },
  {
    id: '8',
    images: require('../Image_Dat/post2.png'),
  },
  {
    id: '9',
    images: require('../Image_Dat/post3.png'),
  },
  {
    id: '10',
    images: require('../Image_Dat/post1.png'),
  },
  {
    id: '11',
    images: require('../Image_Dat/post2.png'),
  },
  {
    id: '12',
    images: require('../Image_Dat/post3.png'),
  },
  {
    id: '13',
    images: require('../Image_Dat/post1.png'),
  },
  {
    id: '14',
    images: require('../Image_Dat/post2.png'),
  },
  {
    id: '15',
    images: require('../Image_Dat/post3.png'),
  },
  {
    id: '16',
    images: require('../Image_Dat/post1.png'),
  },
  {
    id: '17',
    images: require('../Image_Dat/post2.png'),
  },
  {
    id: '18',
    images: require('../Image_Dat/post3.png'),
  },
  {
    id: '19',
    images: require('../Image_Dat/post1.png'),
  },
  {
    id: '20',
    images: require('../Image_Dat/post2.png'),
  },
  {
    id: '21',
    images: require('../Image_Dat/post3.png'),
  },
];
const SearchPicks = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 24,
        }}>
        <TouchableOpacity>
          <Image source={require('../Image_Dat/Back.png')} />
        </TouchableOpacity>

        <Text style={{ fontWeight: '900', fontSize: 16 }}>All post</Text>
        <View></View>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          numColumns={3}
          renderItem={({ item }) => <ItemSearchPicks data={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default SearchPicks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
