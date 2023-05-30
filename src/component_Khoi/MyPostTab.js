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
  },
  {
    id: '2',
    images: require('../image_Khoi/myx2.jpg'),
  },
  {
    id: '3',
    images: require('../image_Khoi/myx3.jpg'),
  },
  {
    id: '4',
    images: require('../image_Khoi/myx4.jpg'),
  },
  {
    id: '5',
    images: require('../image_Khoi/myx5.jpg'),
  },
  {
    id: '6',
    images: require('../image_Khoi/myx6.jpg'),
  },
  {
    id: '7',
    images: require('../image_Khoi/myx7.jpg'),
  },
  {
    id: '8',
    images: require('../image_Khoi/myx8.jpg'),
  },
  {
    id: '9',
    images: require('../image_Khoi/myx9.jpg'),
  },
  {
    id: '10',
    images: require('../image_Khoi/myx10.jpg'),
  },
  {
    id: '11',
    images: require('../image_Khoi/myx11.jpg'),
  },
  {
    id: '12',
    images: require('../image_Khoi/myx8.jpg'),
  },

];