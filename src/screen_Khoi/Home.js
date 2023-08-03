import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, FlatList, ScrollView, ActivityIndicator, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import ItemPost from '../component_Khoi/ItemPost'
import ItemStory from '../component_Khoi/ItemStory'

import AxiosIntance from '../config/AxiosIntance';


const Home = (props) => {
  const { navigation } = props;
  const [dataLord, setdataLord] = useState([]);
  const [isLoading, setisLoading] = useState(true)
  useEffect(() => {
    const getPost = async () => {
      const res = await AxiosIntance().get('/post/allpost');
      if (res.post != []) {
        const reversedData = res.post.reverse();
        setdataLord(reversedData);
        setisLoading(false)
      }
    }
    getPost();

    const unsubscribe = navigation.addListener('focus', () => {
      getPost();
    });
    return () => {
      unsubscribe();
    };
  }, [])

  const handleReload = async () => {
    setisLoading(true);
    const res = await AxiosIntance().get('/post/allpost');
    if (res.post != []) {
      const reversedData = res.post.reverse();
      setdataLord(reversedData);
      setisLoading(false)
    }
  }

  const handleDelete = async (postid) => {
    const res = await AxiosIntance().get('/post/delete/' + postid);
    if (res.result == true) {
      ToastAndroid.show("Xóa bài viết thành công!!", ToastAndroid.SHORT);
      const newData = dataLord.filter((dataL) => dataL._id !== postid);
      setdataLord(newData);
    }
  };
  const handleHide = (postid) => {
    ToastAndroid.show("Ẩn bài viết thành công!!", ToastAndroid.SHORT);
    const newData = dataLord.filter((dataL) => dataL._id !== postid);
    setdataLord(newData);
  };

  const inBeta = () => {
    ToastAndroid.show('Tính năng đang phát triển', ToastAndroid.SHORT);
  }
  const goToPost = () => {
    navigation.navigate('Post');
}

  return (
    <>
      {
        isLoading == true ?
          <View style={styles.container}>
            <View style={styles.headerView}>

              <Image source={require("../image_Khoi/InsLogo_mini.png")}></Image>


              <TouchableOpacity>
                <Image source={require("../image_Khoi/messenger.png")}></Image>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator size='large' color={'#4E4B66'} />
              <Text>Loading...</Text>
            </View>
          </View>
          :

          <View style={styles.container}>
            <View style={styles.headerView}>
              <TouchableOpacity onPress={handleReload}>
                <Image source={require("../image_Khoi/InsLogo_mini.png")}></Image>
              </TouchableOpacity>
              <View style={{flexDirection:'row',width:65,justifyContent:'space-between',alignItems:'center'}}>
                <TouchableOpacity onPress={goToPost}>
                  <Image source={require("../image_Khoi/iccon_bottomtab/post.png")}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={inBeta}>
                  <Image source={require("../image_Khoi/messenger.png")}></Image>
                </TouchableOpacity>
              </View>

            </View>
            {/* <ScrollView showsVerticalScrollIndicator={false}>
              <ScrollView style={styles.storyView} nestedScrollEnabled={true} showsHorizontalScrollIndicator={false} horizontal={true}>
                {
                  data.map((item) => <ItemStory key={item.id} data={item} />)
                }
              </ScrollView>
              <View style={{ flex: 1 }}>
                {
                  dataLord.map((item) => <ItemPost key={item._id} data={item} onDelete={() => handleDelete(item._id)} onHide={() => handleHide(item._id)} />)
                }
              </View>
            </ScrollView> */}
            <View style={{ flex: 1 }}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={dataLord}
                renderItem={({ item }) => <ItemPost key={item._id} data={item} onDelete={() => handleDelete(item._id)} onHide={() => handleHide(item._id)} />}
                keyExtractor={item => item._id}
              />
            </View>
          </View>
      }
    </>
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
    alignItems: 'center',
    height: 54
  },
  storyView: {
    height: 98,
    borderColor: '#00000030',
    backgroundColor: '#fff'
  }

})

const data = [
  {
    id: '1',
    images: require('../image_Khoi/myx1.jpg'),
    username: 'tmy_dthuong'
  }
];