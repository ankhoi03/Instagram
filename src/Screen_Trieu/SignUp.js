import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const SignUp = props => {
  const {navigation} = props;
  const goBack = () => {
    navigation.goBack();
  };
  const goToLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={Styles.container}>
      <StatusBar barStyle={'dark-content'}
                translucent={true}
                backgroundColor={'transparent'}
            />
      <View style={Styles.back}>
        <TouchableOpacity>
          <Image
            onPress={goBack}
            source={require('../Image_Trieu/back.jpg')}
            style={Styles.imgBack}
          />
        </TouchableOpacity>
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
      <View style={Styles.txtLogin}>
        <TextInput
          placeholder="Confirm Password"
          style={Styles.txtConfirmpass}
        />
      </View>
      <View style={Styles.btn}>
        <TouchableOpacity style={Styles.btnLogin} onPress={goToLogin}>
          <Text style={Styles.txtLogin1}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.footer}>
        <Text style={Styles.txtFooter1}>You have an account?</Text>
        <TouchableOpacity  onPress={goToLogin}>
          <Text style={Styles.txtFooter2}>Login.</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.footerEnd}>
        <View style={Styles.row2}></View>
        <View style={Styles.row2}></View>
        <Text style={Styles.txtEndins}>Instagram from Team 7</Text>
        <View style={Styles.row3}></View>
      </View>
    </View>
  );
};

export default SignUp;
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  imgBack: {
    width: 9.38,
    height: 17.47,
    color: '#000',
    marginTop: 44,
    marginLeft: 16.41,
    position: 'absolute',
    backgroundColor: '#262626',
  },
  imgLogo: {
    position: 'absolute',
    width: 186,
    height: 50,
    left: 114,
    top: 128,

    backgroundColor: ' #262626',
  },
  txtUser: {
    // position: 'absolute',

    backgroundColor: ' #FAFAFA',
    borderRadius: 5,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    marginTop: 216,
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
  txtConfirmpass: {
    backgroundColor: ' #FAFAFA',
    borderRadius: 5,
    borderWidth: 0.5,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    marginTop: 12,
    marginLeft: 16,
    marginRight: 16,
    padding: 13.5,
    marginBottom: 40,
  },
  txtLogin1: {
    textAlign: 'center',
    font: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.15,
    color: 'white',
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 108,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    /* identical to box height */

    textAlign: 'center',
    letterSpacing: -0.15,
    marginBottom: 70,
    color: '#676060',
  },
  txtFooter1: {},
  txtFooter2: {color: '#3797EF'},

  footerEnd: {flexDirection: 'column', position: 'relative', top: 10},
  row2: {width: 395, backgroundColor: '#676060', height: 1, marginTop: 9},
  txtEndins: {textAlign: 'center', marginTop: 32.5},
  row3: {
    // position: 'absolute',
    width: 134,
    height: 5,
    backgroundColor: '#060606',
    borderRadius: 100,
    marginLeft: 130,
    marginTop: 14.5,
  },
});
