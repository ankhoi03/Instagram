import { Image, KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppContext } from '../screen_Khoi/AppContext';
import AxiosIntance from '../config/AxiosIntance';
import { launchImageLibrary } from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const EditProfile = (props) => {
  const { navigation } = props;
  const goBack = () => {
    navigation.goBack();
  }
  const [text, setText] = useState('');
  const { infoUser, setinfoUser } = useContext(AppContext);
  const pickImg = async () => {
    const result = await launchImageLibrary();
    const imageInfo = result.assets[0];


    const newWidth = 1200;
    const newHeight = 1200;


    const resizedImage = await ImageResizer.createResizedImage(
      imageInfo.uri,
      newWidth,
      newHeight,
      'JPEG',
      80,
      0
    );
    const formdata = new FormData();
    formdata.append('image', {
      uri: resizedImage.uri,
      type: 'image/jpeg',
      name: 'imageinstagram'
    })
    const res = await AxiosIntance("multipart/form-data").post('/post/image', formdata);
    if (res.imageURL != "") {
      setinfoUser({ ...infoUser, image: res.imageURL })
    }
  }
  const updateProfile = async () => {
    if (infoUser.username.length >=6) {
      const res = await AxiosIntance().post('/user/update', {
        _id: infoUser._id,
        name: infoUser.name,
        username: infoUser.username,
        website: infoUser.website,
        phone: infoUser.phone,
        email: infoUser.email,
        image: infoUser.image,
        bio: infoUser.bio,
        gender: infoUser.gender
      });
      if (res.result == true) {
        ToastAndroid.show("Cập nhật thông tin thành công!!", ToastAndroid.SHORT);
        setTimeout(function () {
          navigation.navigate('Profile');
        }, 1500);
      } else {
        ToastAndroid.show("Cập nhật thông tin thất bại!!", ToastAndroid.SHORT);
      }

    } else {
      ToastAndroid.show("Username có ít nhất 6 ký tự!!", ToastAndroid.SHORT);
    }
  }


  return (
    <View style={styles.container} >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center', height: 54 }}>
        <TouchableOpacity style={{ width: 70 }} onPress={goBack}>
          <Text style={styles.textCancel}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.textEditProfile}>Edit Profile</Text>
        <TouchableOpacity style={{ width: 70, }} onPress={updateProfile}>
          <Text style={styles.textDone}>Done</Text>
        </TouchableOpacity>
      </View>
      <KeyboardAwareScrollView extraHeight={120} enableOnAndroid style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.viewimgProfile}>
          <Image style={{ width: 100, height: 100, borderRadius: 99 }} source={{ uri: infoUser?.image }} />
          <TouchableOpacity onPress={pickImg}>
            <Text style={styles.textchangeProfile}>Change Profile Photo</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.viewdadtextInput}>
          <View style={styles.viewtitle}>
            <Text style={styles.textName}>Name</Text>
            <TextInput style={styles.textinput} onChangeText={(text) => setinfoUser({ ...infoUser, name: text })}
              value={infoUser?.name} />
          </View>
        </View>
        <View style={styles.viewdadtextInput}>
          <View style={styles.viewtitle}>
            <Text style={styles.textName}>Username</Text>
            <TextInput style={styles.textinput} onChangeText={(text) => setinfoUser({ ...infoUser, username: text })}
              value={infoUser?.username} />
          </View>
        </View>
        <View style={styles.viewdadtextInput}>
          <View style={styles.viewtitle}>
            <Text style={styles.textName}>Website</Text>
            <TextInput style={styles.textinput} onChangeText={(text) => setinfoUser({ ...infoUser, website: text })}
              value={infoUser?.website} />
          </View>
        </View>
        <View style={[styles.viewdadtextInput, { borderBottomWidth: 0.5, borderColor: '#00000080' }]}>
          <View style={styles.viewtitle}>
            <Text style={styles.textName}>Bio</Text>
            <TextInput style={[styles.textinput, { height: 60, borderBottomWidth: 0 }]}
              onChangeText={(text) => setinfoUser({ ...infoUser, bio: text })}
              value={infoUser?.bio} />
          </View>
        </View>



        <Text style={styles.textswitch}>Switch to Professional Account</Text>
        <Text style={styles.textPrivate}>Private Information</Text>



        <View style={styles.viewdadtextInput}>
          <View style={styles.viewtitle}>
            <Text style={styles.textName}>Email</Text>
            <TextInput style={styles.textinput} onChangeText={(text) => setinfoUser({ ...infoUser, email: text })}
              value={infoUser?.email} />
          </View>
        </View>
        <View style={styles.viewdadtextInput}>
          <View style={styles.viewtitle}>
            <Text style={styles.textName}>Phone</Text>
            <TextInput style={styles.textinput} onChangeText={(text) => setinfoUser({ ...infoUser, phone: text })}
              value={infoUser?.phone} />
          </View>
        </View>
        <View style={styles.viewdadtextInput}>
          <View style={styles.viewtitle}>
            <Text style={styles.textName}>Gender</Text>
            <TextInput style={styles.textinput} onChangeText={(text) => setinfoUser({ ...infoUser, gender: text })}
              value={infoUser?.gender} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textCancel: {
    color: '#262626',
    fontSize: 16,
    fontWeight: '400'
  },
  textEditProfile: {
    color: '#262626',
    fontSize: 18,
    fontWeight: '900'
  },
  textDone: {
    color: '#3897F0',
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'flex-end'
  },
  viewimgProfile: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textchangeProfile: {
    color: '#3897F0',
    fontSize: 15,
    fontWeight: '900',
    marginTop: 10,
  },
  viewdadtextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff'
  },

  viewtitle: {
    flexDirection: 'row',
    width: '100%',
    height: 48,
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  textName: {
    fontSize: 15,
    color: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textUsername: {
    fontSize: 15,
    color: '#262626',
    marginBottom: 20,
  },
  textWebsite: {
    fontSize: 15,
    color: '#262626',
    marginBottom: 20,
  },
  textBio: {
    fontSize: 15,
    color: '#262626',
    marginBottom: 20,
  },
  textinput: {
    height: 48,
    width: '70%',
    borderColor: '#262626',
    borderBottomWidth: 0.5,

  },

  textswitch: {
    color: '#3897F0',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  textPrivate: {
    fontSize: 15,
    fontWeight: '900',
    paddingHorizontal: 20,
    color: '#000000',
    marginBottom: 15
  },


})