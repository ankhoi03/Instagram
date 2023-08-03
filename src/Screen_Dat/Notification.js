import { FlatList, StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import ItemNotification from '../Component_Dat/ItemNotification';






const Notification = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={{ fontSize: 18, fontWeight: '900', color: '#000000' }}>Notifications</Text>
            </View>
            <View style={{ flex:1 ,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
                {/* <FlatList
                    data={data}
                    renderItem={({ item }) => <ItemNotification data={item} />}
                    keyExtractor={item => item.id}
                /> */}
                <Text style={{fontFamily: 'Poppins',fontSize: 24,fontWeight:'700',color: '#262626',width:'75%',textAlign:'center'}}>We are trying to dev comming soon...</Text>
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
  }

];