import { FlatList, StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import ItemNotification from '../Component_Dat/ItemNotification';






const Notification = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={{ fontSize: 18, fontWeight: '900', color: '#000000' }}>Notifications</Text>
            </View>
            <View style={{ flex:1 ,backgroundColor:'#fff'}}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <ItemNotification data={item} />}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

export default Notification

const styles = StyleSheet.create({
    header: {
        height:54,
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
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
      id: '5',
      images: require('../image_Khoi/myx5.jpg'),
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
      images: require('../image_Khoi/myx8.jpg'),
      username: 'tmy_dthuong',
      title:'Mot bong hong xinh tuoi tham',
    },
  
  ];
  