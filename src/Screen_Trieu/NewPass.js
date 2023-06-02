import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    StatusBar,
  } from 'react-native';
  import React from 'react';
  
  const NewPass = props => {
    const {navigation} = props;
    const goBack = () => {
      navigation.goBack();
    };
    const goToLogin = () => {
      navigation.navigate('Login');
    };
    const goToSignUp = () => {
        navigation.navigate('SignUp');
      };
    return (
      <View style={Styles.container}>
        <StatusBar
          barStyle={'dark-content'}
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
  
        <View style={Styles.txtBody}>
          <View style={Styles.txtInput}>
         <View style={Styles.childPassword}>
         <TextInput
              placeholder="Please enter a password"
              style={Styles.txtInput_Password}
            />
         </View>
          </View>
  
          <View style={Styles.txtInput}>
            <TextInput
              placeholder="Please re-enter your password"
              style={Styles.txtInput_Confirm_Password}
            />
          </View>
        </View>
        <View style={Styles.btn}>
          <TouchableOpacity style={Styles.btnNext}
          onPress={goToLogin}>
            <Text style={Styles.txtNext}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.footer}>
          <Text style={Styles.txtFooter1}>Don’t have an account?</Text>
          <TouchableOpacity onPress={goToSignUp}>
            <Text style={Styles.txtFooter2}>Sign up.</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default NewPass;
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
      backgroundColor: '#262626',
    },
    imgLogo: {
      position: 'absolute',
      width: 186,
      height: 50,
      left: 114,
      top: 128,
      backgroundColor: ' #262626',
      marginBottom: 24,
    },
  
    txtBody: {
      color: '#000',
      marginTop: 46,
      position: 'relative',
      marginLeft: 25,
      marginRight: 10,
      
    },
    txtInput: {
      color: '#3797EF',
      fontWeight: 'bold',
      fontSize: 14,
      height: 50,
      top: 154,
      boxSizing: 'border-box',
      marginBottom: 10,
      
    },
    childPassword:{ position: 'relative'},
    txtInput_Password: {
      paddingVertical: 10,
      paddingHorizontal: 13,
      backgroundColor: ' #FAFAFA',
      borderRadius: 5,
      borderWidth: 0.5,
      borderStyle: 'solid',
      borderColor: 'rgba(0, 0, 0, 0.2)',
      marginTop: 12,
      padding: 13.5,
      height:44
    },

    txtInput_Confirm_Password: {
      paddingVertical: 10,
      paddingHorizontal: 13,
      backgroundColor: ' #FAFAFA',
      borderRadius: 5,
      borderWidth: 0.5,
      borderStyle: 'solid',
      borderColor: 'rgba(0, 0, 0, 0.2)',
      marginTop: 12,
      backgroundColor: ' #FAFAFA',
      padding: 13.5,
      height:44
    },
    btn:{position: 'relative',top:200},
    btnNext: {
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
    },txtNext:{
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
    footer:{
      position: 'relative',
      top:250,
      fontWeight:'bold',
      height:21,
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 24,
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 21,
    },
    txtFooter2:{
      marginLeft: 3,
      color: '#3797EF',
    }
  });
  