import { ActivityIndicator, FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ItemSearch from '../Component_Dat/ItemSearch';
import AxiosIntance from '../config/AxiosIntance';



const Search = (props) => {

  const { navigation } = props;
  const gotoSearchAccount = () => {
    navigation.navigate('SearchAccount')
  }
  const [dataLord, setdataLord] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const getPost = async () => {
      const res = await AxiosIntance().get('/post/allpost');
      if (res.post != []) {
        setdataLord(res.post);
        setisLoading(false);
      }
    }
    getPost();
    const unsubscribe = navigation.addListener('focus', () => {
      getPost();
    });
    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <>
      {
        isLoading == true
          ?
          <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.searchView}>
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require('../Image_Dat/Search.png')} />
                <TextInput
                  style={styles.textInput}
                  placeholder="Search"
                  placeholderTextColor={'white'}
                  onPressIn={gotoSearchAccount}
                />
              </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator size='large' color={'#4E4B66'} />
              <Text>Loading...</Text>
            </View>
          </View>
          :
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.searchView} onPress={gotoSearchAccount}>
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require('../Image_Dat/Search.png')} />
                <TextInput
                  style={styles.textInput}
                  placeholder="Search"
                  placeholderTextColor={'white'}
                  editable={false}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <FlatList
                data={dataLord}
                numColumns={3}
                renderItem={({ item }) => <ItemSearch data={item} />}
                keyExtractor={item => item._id}
              />
            </View>

          </View>
      }
    </>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    height: 54,
    paddingHorizontal: 20,

  },
  searchView: {
    width: '100%',
    height: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#BBBBC3',

  },
  textInput: {
    height: 32,
    width: "92%",
    padding: 5,
  },
});