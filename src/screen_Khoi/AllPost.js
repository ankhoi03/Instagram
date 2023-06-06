import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React from 'react'
import MyPostTab from '../component_Khoi/MyPostTab';
import ItemPost from '../component_Khoi/ItemPost';

const AllPost = (props) => {
    const { navigation } = props;
    const goBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <TouchableOpacity onPress={goBack} style={{ width: 20, height: 36, justifyContent: 'center' }}>
                    <Image source={require('../image_Khoi/Back.png')} />
                </TouchableOpacity>
                <Text style={styles.textAllPost}>All Posts</Text>
                <View style={{ width: 20, height: 36 }}></View>
            </View>
            <View style={styles.allpostView}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => <ItemPost data={item} />}
                    keyExtractor={item => item.id}
                />

            </View>
        </View>
    )
}

export default AllPost

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerView: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 54
    },
    textAllPost: {
        color: '#262626',
        fontSize: 18,
        fontWeight: '900'
    },
    allpostView: {
        flex: 1,
        backgroundColor: '#fff'
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