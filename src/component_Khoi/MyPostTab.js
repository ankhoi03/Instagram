import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ItemImageProfile from './ItemImageProfile'

const MyPostTab = () => {
  return (
    <View style={styles.container}>





      <View style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          numColumns={3}
          renderItem={({ item }) => <ItemImageProfile data={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

export default MyPostTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})


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
  {
    id: '17',
    images: require('../image_Khoi/myx15.jpg'),
    username: 'tmy_dthuong',
    title:'Mot bong hong xinh tuoi tham',
  },
  {
    id: '18',
    images: require('../image_Khoi/myx6.jpg'),
    username: 'tmy_dthuong',
    title:'Mot bong hong xinh tuoi tham',
  },
];