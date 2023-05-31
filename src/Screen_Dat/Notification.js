import { FlatList, StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import ItemNotification from '../Component_Dat/ItemNotification';




const data = [
    {
        id: '1',
        images: require('../Image_Dat/Oval.png'),
        name: 'Joshua',
        title: 'Have a nice day, bro!',
        imagess: require('../Image_Dat/ntf1.png'),

    },
    {
        id: '2',
        images: require('../Image_Dat/avt1.png'),
        name: 'Karenne',
        title: 'I heard this is a good movie',
        imagess: require('../Image_Dat/ntf1.png'),
    },
    {
        id: '3',
        images: require('../Image_Dat/avt2.png'),
        name: 'martini_rond',
        title: 'See you on the next meeting!',
        imagess: require('../Image_Dat/ntf1.png'),
    },
    {
        id: '4',
        images: require('../Image_Dat/avt3.png'),
        name: 'andrewww_',
        title: 'Sounds good 😂😂😂',
        imagess: require('../Image_Dat/ntf1.png'),
    },
];
const Notification = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar
                barStyle={'dark-content'}
                translucent={true}
                backgroundColor={'transparent'}></StatusBar>
            <View style={{ marginTop: 35, borderBottomWidth: 0.5 }}>
                <Text style={{ fontSize: 15, fontWeight: '900', paddingHorizontal: 24, marginBottom: 15, color: '#000000' }}>Notifications</Text>
            </View>
            <View style={{ height: 500 }}>
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

})