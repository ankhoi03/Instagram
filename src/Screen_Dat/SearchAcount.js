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



const SearchAcount = (props) => {
  const { navigation } = props;
  const goBack = () => {
    navigation.goBack();
}
  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={{width:20,height:36,justifyContent:'center'}}>
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
        </View>
      </View>
      <View style={{flex:1,paddingHorizontal:20,backgroundColor:'#fff'}}>
        <FlatList
          data={data}
          renderItem={({ item }) => <ItemSearchUser data={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default SearchAcount;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height:54,
    paddingHorizontal: 20,
    alignItems: 'center'
},
  searchView: {
    width: '92%',
    height: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#BBBBC3',
    marginStart: 10,
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
  },
  {
    id: '2',
    images: require('../image_Khoi/myx2.jpg'),
    username: 'tmy_dthuong',
    title:'Mot bong hong xinh tuoi tham',
  },
  {
    id: '13',
    images: require('../image_Khoi/myx13.jpg'),
    username: 'tmy_dthuong',
    title:'Mot bong hong xinh tuoi tham',
  },
  {
    id: '3',
    images: require('../image_Khoi/myx3.jpg'),
    username: 'tmy_dthuong',
    title:'Mot bong hong xinh tuoi tham',
  },
  {
    id: '4',
    images: require('../image_Khoi/myx4.jpg'),
    username: 'tmy_dthuong',
    title:'Mot bong hong xinh tuoi tham',
  },
  {
    id: '14',
    images: require('../image_Khoi/myx14.jpg'),
    username: 'tmy_dthuong',
    title:'Mot bong hong xinh tuoi tham',
  },
  {
    id: '5',
    images: require('../image_Khoi/myx5.jpg'),
    username: 'tmy_dthuong',
    title:'Mot bong hong xinh tuoi tham',
  },
  {
    id: '15',
    images: require('../image_Khoi/myx15.jpg'),
    username: 'tmy_dthuong',
    title:'Mot bong hong xinh tuoi tham',
  },
  {
    id: '6',
    images: require('../image_Khoi/myx6.jpg'),
    username: 'tmy_dthuong',
    title:'Mot bong hong xinh tuoi tham',
  },
  {
    id: '7',
    images: require('../image_Khoi/myx7.jpg'),
    username: 'tmy_dthuong',
    title:'Mot bong hong xinh tuoi tham',
  },
  {
    id: '16',
    images: require('../image_Khoi/myx15.jpg'),
    username: 'tmy_dthuong',
    title:'Mot bong hong xinh tuoi tham',
  },
  {
    id: '8',
    images: require('../image_Khoi/myx8.jpg'),
    username: 'tmy_dthuong',
    title:'Mot bong hong xinh tuoi tham',
  },
  {
    id: '9',
    images: require('../image_Khoi/myx9.jpg'),
    username: 'tmy_dthuong',
    title:'Mot bong hong xinh tuoi tham',
  },
  {
    id: '10',
    images: require('../image_Khoi/myx10.jpg'),
    username: 'tmy_dthuong',
    title:'Mot bong hong xinh tuoi tham',
  },
  {
    id: '11',
    images: require('../image_Khoi/myx11.jpg'),
    username: 'tmy_dthuong',
    title:'Mot bong hong xinh tuoi tham',
  },
  {
    id: '12',
    images: require('../image_Khoi/myx12.jpg'),
    username: 'tmy_dthuong',
    title:'Mot bong hong xinh tuoi tham',
  },

];
