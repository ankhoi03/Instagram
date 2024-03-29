import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View  } from 'react-native'
import React from 'react'
import ItemFollowing from '../component_Khoi/ItemFollowing'


const Following = (props) => {
  const { navigation } = props;
  const goBack = () => {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center',height:54,justifyContent:'space-between',paddingHorizontal:20 }}>
        <TouchableOpacity onPress={goBack} style={{ height: 36,width:20, alignItems: 'flex-start', justifyContent: 'center' }}>
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
      <View style={{  backgroundColor:'#ffffff',paddingHorizontal:20}}>
        <FlatList
          data={data}
          renderItem={({ item }) => <ItemFollowing data={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default Following

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  },
  textInput: {
    height: 36,
    width: '92%',
    padding: 5,
  },
  });

  const data = [
    {
      id: '1',
      images: require('../image_Khoi/myx1.jpg'),
      username: 'tmy_dthuong',
      title:'Mot bong hong xinh tuoi tham',
    }
  ];