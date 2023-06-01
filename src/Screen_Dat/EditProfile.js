import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const EditProfile = () => {
  const [text, setText] = useState('');
  const handleTextChange = (inputText) => {
    setText(inputText);
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent={true}
        backgroundColor={'#FAFAFA'}></StatusBar>
      <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingBottom: 10, backgroundColor: '#FAFAFA', paddingTop: 44 }}>
          <TouchableOpacity style={{ width: 70 }}>
            <Text style={styles.textCancel}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.textEditProfile}>Edit Profile</Text>
          <TouchableOpacity style={{ width: 70, }}>
            <Text style={styles.textDone}>Done</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewimgProfile}>
          <Image source={require('../Image_Dat/edProfile1.png')} />
          <TouchableOpacity>
            <Text style={styles.textchangeProfile}>Change Profile Photo</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.viewdadtextInput}>
          <View style={styles.viewtitle}>
            <Text style={styles.textName}>Name</Text>
            <TextInput style={styles.textinput}
              placeholder='Pandari_j' />
          </View>
        </View>
        <View style={styles.viewdadtextInput}>
          <View style={styles.viewtitle}>
            <Text style={styles.textName}>Username</Text>
            <TextInput style={styles.textinput}
              placeholder='Pandari_j' />
          </View>
        </View>
        <View style={styles.viewdadtextInput}>
          <View style={styles.viewtitle}>
            <Text style={styles.textName}>Website</Text>
            <TextInput style={styles.textinput}
              placeholder='Website' />
          </View>
        </View>
        <View style={[styles.viewdadtextInput, { borderBottomWidth: 0.5 }]}>
          <View style={styles.viewtitle}>
            <Text style={styles.textName}>Bio</Text>
            <TextInput style={[styles.textinput, { height: 60, borderBottomWidth: 0 }]}
              multiline
              numberOfLines={2}
              value={text}
              onChangeText={handleTextChange}
              placeholder='Digital goodies designer @pixsellz Everything is designed.' />
          </View>
        </View>



        <Text style={styles.textswitch}>Switch to Professional Account</Text>
        <Text style={styles.textPrivate}>Private Information</Text>
        <View style={[styles.viewdadtextInput, { marginTop: 20 }]}>
          <View style={styles.viewtitle}>
            <Text style={styles.textName}>Email</Text>
            <TextInput style={styles.textinput}
              placeholder='jacob.west@gmail.com' />
          </View>
        </View>
        <View style={styles.viewdadtextInput}>
          <View style={styles.viewtitle}>
            <Text style={styles.textName}>Phone</Text>
            <TextInput style={styles.textinput}
              placeholder='+1 202 555 0147' />
          </View>
        </View>
        <View style={styles.viewdadtextInput}>
          <View style={styles.viewtitle}>
            <Text style={styles.textName}>Gender</Text>
            <TextInput style={styles.textinput}
              placeholder='Male' />
          </View>
        </View>

      </View>

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
    fontWeight: '500'
  },
  textEditProfile: {
    color: '#262626',
    fontSize: 16,
    fontWeight: '900'
  },
  textDone: {
    color: '#3897F0',
    fontSize: 16,
    fontWeight: '900',
    alignSelf: 'flex-end'
  },
  viewimgProfile: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingTop: 20
  },
  textchangeProfile: {
    color: '#3897F0',
    fontSize: 13,
    fontWeight: '900',
    marginTop: 10
  },
  viewdadtextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    marginTop: 10
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
    padding: 20,
  },
  textPrivate: {
    fontSize: 15,
    fontWeight: '900',
    paddingHorizontal: 20,
    color: '#000000'
  },


})