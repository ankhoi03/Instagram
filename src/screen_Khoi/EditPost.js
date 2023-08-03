import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    StyleSheet,
    Image,
    TextInput,
    ToastAndroid,
    Dimensions,
} from 'react-native';
import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { launchImageLibrary } from 'react-native-image-picker';
import AxiosIntance from '../config/AxiosIntance';
import ImagePlaceholder from 'react-native-image-placeholder';
import { AppContext } from '../screen_Khoi/AppContext';
import ImageResizer from 'react-native-image-resizer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const EditPost = (props) => {
    const { route } = props;
    const { params } = route;
    const navigation = useNavigation();
    const goToHome = () => {
        navigation.navigate('Home');
    };
    const goBack = () => {
        navigation.goBack();
    }
    const [linkimg, setlinkimg] = useState(params.post.image);
    const [content, setcontent] = useState(params.post.content);
    const { infoUser } = useContext(AppContext);

    const clear = () => {
        setcontent('');
        setlinkimg(null);
    }
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
            setlinkimg(res.imageURL);
        }
    }

    const update = async () => {
        if (content == '' || linkimg == null) {
            ToastAndroid.show("Hãy chia sẻ gì đó!!", ToastAndroid.SHORT);
        } else {
            const up = await AxiosIntance().post('/post/update', {
                _id: params.post._id,
                content: content,
                image: linkimg
            });
            if (up.result == true) {
                ToastAndroid.show("Đăng tin thành công!!", ToastAndroid.SHORT);
                goToHome();
                clear();
            } else {
                ToastAndroid.show("Đăng tin thất bại!!", ToastAndroid.SHORT);
            }
        }
    }


    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <TouchableOpacity onPress={goBack} style={{ width: 60, height: 32, justifyContent: 'center' }}>
                    <Image source={require('../Image_Dat/Back.png')} />
                </TouchableOpacity>

                <Text style={Styles.txtSttPost}>Edit Post</Text>

                <TouchableOpacity style={Styles.btnPost} onPress={update}>
                    <Text style={Styles.txtPost}>Update</Text>
                </TouchableOpacity>

            </View>
            <KeyboardAwareScrollView extraHeight={90} enableOnAndroid style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={Styles.information}>
                    <Image
                        style={Styles.imgAvatar}
                        source={{ uri: infoUser.image }}></Image>
                    <Text style={Styles.txtName}>{infoUser.username}</Text>
                    <Image Image style={{ width: 15, height: 15, marginTop: 2, marginStart: 4 }} source={require('../image_Khoi/official_icon.png')} />
                </View>


                <TouchableOpacity onPress={pickImg}>
                    <ImagePlaceholder placeholderStyle={Styles.placeholder}
                        style={Styles.image}
                        source={{ uri: linkimg }} />
                </TouchableOpacity>


                <TextInput
                    style={Styles.NoteStyle}
                    multiline={true}
                    placeholder="What's on your mind?"
                    onChangeText={setcontent}
                    value={content}
                />
            </KeyboardAwareScrollView>
        </View>
    );
};

export default EditPost;
const maxWidth = Dimensions.get('window').width;
const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 54,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    txtSttPost: {
        fontFamily: 'Poppins',
        fontWeight: '900',
        fontSize: 18,
        color: '#000000',
    },
    txtPost: {
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: 14,
        color: '#ffffff',
    },
    btnPost: {
        backgroundColor: '#1877F2',
        width: 60,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
    }
    ,
    btnBack: {
        width: 58,
        height: 28,
        justifyContent: 'center',
        borderRadius: 5,
    }
    ,
    information: {
        flexDirection: 'row',
        alignItems: 'center', paddingHorizontal: 20,
        backgroundColor: '#fff',
        height: 64,
        borderColor: '#00000030',
        borderBottomWidth: 1,
    },

    imgAvatar: { width: 48, height: 48, borderRadius: 99 },
    txtName: { marginLeft: 10, fontSize: 18, color: 'black', fontWeight: '600' },
    Body: {
        width: maxWidth,
        height: maxWidth,
        backgroundColor: '#F2F1F1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgAdd: {
        width: 38,
        height: 38,
    },
    placeholder: {
        width: maxWidth,
        height: maxWidth,
        backgroundColor: '#ccc',
    },
    txtAdd: {
        width: 92,
        textAlign: 'center',
        fontSize: 16,
        color: '#8A8484',
    },
    NoteStyle: {
        width: '100%',
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 20,
        paddingVertical: 20,
        textAlignVertical: 'top',
        backgroundColor: '#fff',
    },
    image: {
        width: maxWidth,
        height: maxWidth
    }
});
