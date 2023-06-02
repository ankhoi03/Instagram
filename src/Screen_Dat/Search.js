import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ItemSearch from '../Component_Dat/ItemSearch';



const data = [
    {
        id: '1',
        images: require('../Image_Dat/Search1.png'),
    },
    {
        id: '2',
        images: require('../Image_Dat/Search2.png'),
    },
    {
        id: '3',
        images: require('../Image_Dat/Search3.png'),
    },
    {
        id: '4',
        images: require('../Image_Dat/Search4.png'),
    },
    {
        id: '5',
        images: require('../Image_Dat/Search5.png'),
    },
    {
        id: '6',
        images: require('../Image_Dat/Search6.png'),
    },
    {
        id: '7',
        images: require('../Image_Dat/Search1.png'),
    },
    {
        id: '8',
        images: require('../Image_Dat/Search2.png'),
    },
    {
        id: '9',
        images: require('../Image_Dat/Search3.png'),
    },
    {
        id: '10',
        images: require('../Image_Dat/Search4.png'),
    },
    {
        id: '11',
        images: require('../Image_Dat/Search5.png'),
    },
    {
        id: '12',
        images: require('../Image_Dat/Search6.png'),
    },
    {
        id: '13',
        images: require('../Image_Dat/Search1.png'),
    },
    {
        id: '14',
        images: require('../Image_Dat/Search2.png'),
    },
    {
        id: '15',
        images: require('../Image_Dat/Search3.png'),
    },
    {
        id: '16',
        images: require('../Image_Dat/Search4.png'),
    },
    {
        id: '17',
        images: require('../Image_Dat/Search5.png'),
    },
    {
        id: '18',
        images: require('../Image_Dat/Search6.png'),
    },
    {
        id: '19',
        images: require('../Image_Dat/Search1.png'),
    },
    {
        id: '20',
        images: require('../Image_Dat/Search2.png'),
    },
    {
        id: '21',
        images: require('../Image_Dat/Search3.png'),
    },
];

const Search = () => {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={'dark-content'}
                translucent={true}
                backgroundColor={'transparent'}></StatusBar>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 24 }}>
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
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 30,
    },
    searchView: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#BBBBC3',

    },
    textInput: {
        height: 36,
        width: 280,
        padding: 5,
    },
});