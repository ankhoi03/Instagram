import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import ItemComment from '../component_Khoi/ItemComment';
import { AppContext } from '../screen_Khoi/AppContext';
import AxiosIntance from '../config/AxiosIntance';


const Comment = (props) => {
  const { navigation } = props;
  const { route } = props;
  const { params } = route;
  const [content, setcontent] = useState('');
  const [isLoading, setisLoading] = useState(true)
  const [cmt, setCmt] = useState([]);
  const { infoUser } = useContext(AppContext);
  const getCmt = async () => {
    const res = await AxiosIntance().get('/post/comment/' + params.postid);
    if (res.result != []) {
      setCmt(res.result);
      setisLoading(false);
    }
  }
  useEffect(() => {
    getCmt();
    const unsubscribe = navigation.addListener('focus', () => {
      getCmt();
    });
    return () => {
      unsubscribe();
    };
  }, [])

  const addCmt = async () => {
    if (content == '') {
      ToastAndroid.show("Hãy viết gì đó cho bài viết này!!", ToastAndroid.SHORT);
    } else {
      const cmt = await AxiosIntance().post('/post/comment', {
        userid: infoUser._id,
        postid: params.postid,
        content: content,
      });
      if (cmt.result == true) {
        ToastAndroid.show("Comment thành công!!", ToastAndroid.SHORT);
        setcontent('');
        getCmt();
      } else {
        ToastAndroid.show("Comment thất bại!!", ToastAndroid.SHORT);
      }

    }
  }


  const goBack = () => {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={goBack} style={{ width: 20, height: 36, justifyContent: 'center' }}>
          <Image source={require('../Image_Dat/Back.png')} />
        </TouchableOpacity>

        <Text style={{ fontSize: 20, color: '#000000', fontWeight: '900' }}>Comment</Text>
        <View style={{ width: 20, height: 36 }}></View>
      </View>
      {
        isLoading == true
          ?
          <View style={[styles.commentView, { justifyContent: 'center', alignItems: 'center' }]}>
            <ActivityIndicator size='large' color={'#4E4B66'} />
            <Text>Loading...</Text>
          </View>
          :
          <View style={styles.commentView}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={cmt}
              renderItem={({ item }) => <ItemComment data={item} />}
              keyExtractor={item => item._id}
            />
          </View>
      }


      <View style={styles.inputCommentView}>
        <Image
          style={styles.imgAvatar}
          source={{ uri: infoUser.image }} />
        <View style={styles.information}>

          <TextInput
            style={styles.inputcomment}
            placeholder="Add a comment for this post"
            onChangeText={setcontent}
            value={content}
          />
        </View>
        <TouchableOpacity onPress={addCmt}>
          <Image source={require('../image_Khoi/send.png')} />
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default Comment

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

  inputCommentView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor:'#F2F2F2',
    height: 64,
    position:'absolute',
    bottom:0,
    left:0,
    right:0
  },
  information: {
    alignItems: 'flex-start',
    flex: 1,
    height: '70%',
    marginStart: 5,
  },
  commentView: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  imgAvatar: { width: 48, height: 48, borderRadius: 99 },
  txtName: { fontSize: 17, color: 'black', fontWeight: '600', },
  inputcomment: {
    width: '100%',
    height: '100%',
    fontSize: 16,
    padding: 2
  },
});
