import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import ItemPost from '../component_Khoi/ItemPost'
import ItemStory from '../component_Khoi/ItemStory'

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Image source={require("../image_Khoi/InsLogo_mini.png")}></Image>
        <TouchableOpacity>
          <Image source={require("../image_Khoi/messenger.png")}></Image>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <ScrollView style={styles.storyView} nestedScrollEnabled={true} showsHorizontalScrollIndicator={false} horizontal={true}>
          {
            data.map((item) => <ItemStory key={item.id} data={item} />)
          }
        </ScrollView>
        <View style={{ flex: 1 }}>
          {
            data.map((item) => <ItemPost key={item.id} data={item} />)
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#FFFFFF',
    flex: 1

  },
  headerView: {
    marginTop: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10

  },
  storyView: {
    height: 98,
    borderTopWidth: 1,
    borderColor: '#0000003A',
    
   
  }

})

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
    id: '3',
    images: require('../image_Khoi/myx3.jpg'),
    username: 'tmy_dthuong'
  },
  {
    id: '4',
    images: require('../image_Khoi/myx4.jpg'),
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
    id: '7',
    images: require('../image_Khoi/myx7.jpg'),
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
    id: '12',
    images: require('../image_Khoi/myx8.jpg'),
    username: 'tmy_dthuong'
  },

];