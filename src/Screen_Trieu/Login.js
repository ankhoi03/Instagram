import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.back}>
        <Image
          source={require('../Image_Trieu/back.jpg')}
          style={Styles.imgBack}
        />
      </View>
      <View style={Styles.loginIns}>
        <Image
          source={require('../Image_Trieu/loginins.jpg')}
          style={Styles.imgLogo}
        />
      </View>
      <View style={Styles.txtLogin}>
        <TextInput placeholder="Username" style={Styles.txtUser} />
      </View>
      <View style={Styles.txtLogin}>
        <TextInput placeholder="Password" style={Styles.txtPass} />
      </View>
      <View>
        <Text style={Styles.txtForgot}>Forgot password?</Text>
      </View>
      <View style={Styles.btn}>
        <Pressable style={Styles.btnLogin}>
          <Text style={Styles.txtLogin}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  imgBack: {
    width: 9.38,
    height: 17.47,
    color: '#000',
    marginTop: 56,
    marginLeft: 16.41,
    position: 'absolute',
    backgroundColor: '#262626',
  },
  imgLogo: {
    position: 'absolute',
    width: 186,
    height: 50,
    left: 114,
    top: 168,

    backgroundColor: ' #262626',
  },
  txtUser: {
    // position: 'absolute',

    backgroundColor: ' #FAFAFA',
    borderRadius: 5,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    marginTop: 256,
    marginLeft: 16,
    marginRight: 16,
    padding: 13.5,
  },
  txtPass: {
    backgroundColor: ' #FAFAFA',
    borderRadius: 5,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    marginTop: 12,
    marginLeft: 16,
    marginRight: 16,
    padding: 13.5,
  },
  txtForgot: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    color: '#3797EF',
    textAlign: 'right',
    letterSpacing: 0.15,
    lineHeight: 18,
    marginRight: 16,
    marginTop: 19,
    marginBottom: 61,
  },
  txtLogin: {
    textAlign: 'center',
    font: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.15,
    color: '#FFFFFF',
    paddingTop: 14,
    paddingBottom: 9,
  },
  btn: {display: 'flex'},
  btnLogin: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
    width: 343,
    left: 0,
    top: 0,
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '0%',
    backgroundColor: '#3797EF',
    borderRadius: 5,
  },
});
