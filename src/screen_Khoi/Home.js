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
    flex: 1
  },
  headerView: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    height:54
  },
  storyView: {
    height: 98,
    borderColor: '#00000030',
    backgroundColor:'#fff'
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
    id: '4',
    images: require('../image_Khoi/myx4.jpg'),
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
  

];