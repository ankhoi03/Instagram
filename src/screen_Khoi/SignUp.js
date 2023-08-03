import { StyleSheet, Text, View, Image, StatusBar, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import AxiosIntance from '../config/AxiosIntance';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const SignUp = (props) => {
    const { navigation } = props;
    const goBack = () => {
        navigation.goBack();
    }
    const [email, setemail] = useState('');
    const [username, setusername] = useState('');
    const [name, setname] = useState('');
    const [password, setpassword] = useState('');
    const [confirm_password, setconfirm_password] = useState('');
    const backLogin = () => {
        navigation.navigate('Login');
    }
    const goToLogin = async () => {
        const isEmail = email=='';
        const isUsername = username.length =='';
        const isPass = password.length =='';
        if (isEmail) {
            ToastAndroid.show("Hãy nhập Email!!", ToastAndroid.SHORT);
        } else
            if (isUsername) {
                ToastAndroid.show("Hãy nhập Username!!", ToastAndroid.SHORT);
            } else
                if (isPass) {
                    ToastAndroid.show("Hãy nhập Passowrd", ToastAndroid.SHORT);
                } else
                    if (password != confirm_password) {
                        ToastAndroid.show("Mật khẩu không khớp!!", ToastAndroid.SHORT);
                    }
                    else {
                        let data = { email, username, name, password, confirm_password }
                        const res = await AxiosIntance().post('user/register', data);
                        console.log(res);
                        if (res.result == true) {
                            ToastAndroid.show("Đăng ký thành công!!", ToastAndroid.SHORT);
                            setTimeout(function () {
                                navigation.navigate('Login');
                            }, 2000);
                        } else {
                            ToastAndroid.show("Đăng ký thất bại!!", ToastAndroid.SHORT);
                        }

                    }
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goBack}>
                <Image style={styles.btnBack} source={require('../image_Khoi/Back.png')}></Image>
            </TouchableOpacity>
            <KeyboardAwareScrollView extraHeight={200} enableOnAndroid style={{ flex: 1, backgroundColor: '#fff' }}>

                <Image style={styles.logo} source={require('../image_Khoi/Instagram_Logo.png')}></Image>
                <TextInput onChangeText={setemail} style={styles.textInput} placeholder='Email' placeholderTextColor={'#67606070'}></TextInput>
                <TextInput onChangeText={setusername} style={[styles.textInput, { marginTop: 12 }]} placeholder='Username' placeholderTextColor={'#67606070'}></TextInput>
                <TextInput onChangeText={setname} style={[styles.textInput, { marginTop: 12 }]} placeholder='Name' placeholderTextColor={'#67606070'}></TextInput>
                <TextInput onChangeText={setpassword} secureTextEntry={true} style={[styles.textInput, { marginTop: 12 }]} placeholder='Password' placeholderTextColor={'#67606070'}></TextInput>
                <TextInput onChangeText={setconfirm_password} secureTextEntry={true} style={[styles.textInput, { marginTop: 12 }]} placeholder='Confirm Password' placeholderTextColor={'#67606070'}></TextInput>
                <TouchableOpacity style={styles.btnLogin} onPress={goToLogin}>
                    <Text style={styles.loginText}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.orSignUpView}>
                    <Text style={styles.noAccText}>You have an account?</Text>
                    <TouchableOpacity style={{ marginStart: 5 }} onPress={backLogin}>
                        <Text style={styles.signUpText}>Login</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAwareScrollView>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1
    },
    btnBack: {
        marginTop: 32,
        marginStart: 16
    },
    logo: {
        alignSelf: 'center',
        marginTop: 50
    },
    textInput: {
        marginHorizontal: 16,
        paddingHorizontal: 15,
        marginTop: 40,
        height: 44,
        borderRadius: 5,
        backgroundColor: '#FAFAFA',
        borderWidth: 1,
        borderColor: '#0000001A',
        color: '#676060'
    },
    btnLogin: {
        width: 343,
        height: 44,
        backgroundColor: '#3797EF',
        borderRadius: 5,
        marginTop: 60,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '900',
        color: '#FFFFFF',
    },
    orSignUpView: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 30
    },
    noAccText: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '400',
        color: '#676060',
    },
    signUpText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '700',
        color: '#3797EF',
    }
})