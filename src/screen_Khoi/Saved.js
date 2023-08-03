import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList, ActivityIndicator } from 'react-native'
import React,{useEffect,useState,useContext} from 'react'
import ItemPost from '../component_Khoi/ItemPost';
import AxiosIntance from '../config/AxiosIntance';
import { AppContext } from '../screen_Khoi/AppContext';


const Saved = (props) => {
  const { navigation } = props;
  const goBack = () => {
    navigation.goBack();
  }
  const [dataLord, setdataLord] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const { infoUser } = useContext(AppContext);
  useEffect(() => {
    const getPost = async () => {
      const res = await AxiosIntance().get('/post/savedpost/'+infoUser._id);
      console.log(res);
      if (res.result != []) {
        const reversedData = res.result.reverse();
        setdataLord(reversedData);
        setisLoading(false);
      }
    }
    getPost();

    return () => {

    }
  }, [])
  return (
    <>
      {
        isLoading == true
          ?
          <View style={styles.container}>
            <View style={styles.headerView}>
              <TouchableOpacity onPress={goBack} style={{ width: 20, height: 36, justifyContent: 'center' }}>
                <Image source={require('../image_Khoi/Back.png')} />
              </TouchableOpacity>
              <Text style={styles.textAllPost}>Saved Posts</Text>
              <View style={{ width: 20, height: 36 }}></View>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator size='large' color={'#4E4B66'} />
              <Text>Loading...</Text>
            </View>
          </View>
          :
          <View style={styles.container}>
            <View style={styles.headerView}>
              <TouchableOpacity onPress={goBack} style={{ width: 20, height: 36, justifyContent: 'center' }}>
                <Image source={require('../image_Khoi/Back.png')} />
              </TouchableOpacity>
              <Text style={styles.textAllPost}>Saved Posts</Text>
              <View style={{ width: 20, height: 36 }}></View>
            </View>
            <View style={styles.allpostView}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={dataLord}
                renderItem={({ item }) => <ItemPost data={item} />}
                keyExtractor={item => item._id}
              />
            </View>
          </View>
      }
    </>
  )
}

export default Saved

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

