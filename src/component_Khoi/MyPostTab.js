import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState,useContext } from 'react'
import ItemImageProfile from './ItemImageProfile'
import AxiosIntance from '../config/AxiosIntance';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../screen_Khoi/AppContext';

const MyPostTab = () => {
  const navigation=useNavigation();
  const [dataLord, setdataLord] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const { infoUser, setinfoUser } = useContext(AppContext);
  useEffect(() => {
    const getPost = async () => {
      const res = await AxiosIntance().get('/post/mypost/'+infoUser._id);
      if (res.post != []) {
        const reversedData = res.post.reverse();
        setdataLord(reversedData);
        setisLoading(false);
      }
    }
    getPost();
    const unsubscribe = navigation.addListener('focus', () => {
      getPost();
    });
    return () => {
      unsubscribe();
    }
  }, [])
  return (
    <>
      {
        isLoading == true
          ?
          <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator size='large' color={'#4E4B66'} />
              <Text>Loading...</Text>
            </View>
          </View>
          :
          <View style={styles.container}>
            <View style={{ flex: 1 }}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={dataLord}
                numColumns={3}
                renderItem={({ item }) => <ItemImageProfile data={item} />}
                keyExtractor={item => item._id}
              />
            </View>
          </View>
      }
    </>
  )
}

export default MyPostTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})


