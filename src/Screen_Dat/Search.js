import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ItemSearch from '../Component_Dat/ItemSearch';



const data = [
    {
      id: '1',
      images: require('../image_Khoi/myx1.jpg'),
      username: 'tmy_dthuong'
    },
    {
      id: '2',
      images: require('../image_Khoi/myx2.jpg'),
      username: 'tmy_dthuong'
    },
    {
      id: '14',
      images: require('../image_Khoi/myx14.jpg'),
      username: 'tmy_dthuong'
    },
    {
      id: '3',
      images: require('../image_Khoi/myx3.jpg'),
      username: 'tmy_dthuong'
    },
    {
      id: '12',
      images: require('../image_Khoi/myx12.jpg'),
      username: 'tmy_dthuong'
    },
    {
      id: '5',
      images: require('../image_Khoi/myx5.jpg'),
      username: 'tmy_dthuong'
    },
    {
      id: '6',
      images: require('../image_Khoi/myx6.jpg'),
      username: 'tmy_dthuong'
    },
    {
      id: '16',
      images: require('../image_Khoi/myx16.jpg'),
      username: 'tmy_dthuong'
    },
    {
      id: '7',
      images: require('../image_Khoi/myx7.jpg'),
      username: 'tmy_dthuong'
    },
    {
      id: '15',
      images: require('../image_Khoi/myx15.jpg'),
      username: 'tmy_dthuong'
    },
   
    {
      id: '8',
      images: require('../image_Khoi/myx8.jpg'),
      username: 'tmy_dthuong'
    },
    {
      id: '9',
      images: require('../image_Khoi/myx9.jpg'),
      username: 'tmy_dthuong'
    },
    {
      id: '10',
      images: require('../image_Khoi/myx10.jpg'),
      username: 'tmy_dthuong'
    },
    {
      id: '11',
      images: require('../image_Khoi/myx11.jpg'),
      username: 'tmy_dthuong'
    },
    
    {
      id: '13',
      images: require('../image_Khoi/myx13.jpg'),
      username: 'tmy_dthuong'
    },
    {
        id: '12',
        images: require('../image_Khoi/myx12.jpg'),
        username: 'tmy_dthuong'
      },
      {
        id: '5',
        images: require('../image_Khoi/myx5.jpg'),
        username: 'tmy_dthuong'
      },
      {
        id: '6',
        images: require('../image_Khoi/myx6.jpg'),
        username: 'tmy_dthuong'
      },
      {
        id: '21',
        images: require('../image_Khoi/myx16.jpg'),
        username: 'tmy_dthuong'
      },
      {
        id: '20',
        images: require('../image_Khoi/myx7.jpg'),
        username: 'tmy_dthuong'
      },
      {
        id: '19',
        images: require('../image_Khoi/myx15.jpg'),
        username: 'tmy_dthuong'
      },
     
      {
        id: '18',
        images: require('../image_Khoi/myx8.jpg'),
        username: 'tmy_dthuong'
      },
      {
        id: '17',
        images: require('../image_Khoi/myx9.jpg'),
        username: 'tmy_dthuong'
      },
      {
        id: '22',
        images: require('../image_Khoi/myx10.jpg'),
        username: 'tmy_dthuong'
      },
  
  ];
const Search = (props) => {
    const { navigation } = props;
    const gotoSearchAccount = () => {
        navigation.navigate('SearchAccount')
    }
    return (
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
            <View style={{ flex: 1 }}>
                <FlatList
                    data={data}
                    numColumns={3}
                    renderItem={({ item }) => <ItemSearch data={item} />}
                    keyExtractor={item => item.id}
                />
            </View>

        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        justifyContent:'center',
        height:54,
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