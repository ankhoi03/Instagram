import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'

import Modal from "react-native-modal"
import { useNavigation } from '@react-navigation/native';
import ImagePlaceholder from 'react-native-image-placeholder';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AxiosIntance from '../config/AxiosIntance';
import { AppContext } from '../screen_Khoi/AppContext';

const ItemPost = (props) => {
    const { data, onDelete, onHide } = props;
    const navigation = useNavigation();
    const gotoComment = () => {
        navigation.navigate('Comment', { postid: data?._id });
    }
    const gotoEditPost = () => {
        navigation.navigate('EditPost', { post: data });
    }
    const [isLike, setisLike] = useState(false);
    const [isSaved, setisSaved] = useState(false);
    const [numsofLike, setnumsofLike] = useState(0);
    const [visible, setvisible] = useState(false);
    const [user, setuser] = useState('');
    const { infoUser, setinfoUser } = useContext(AppContext);
    (async () => {
        try {
            const value = await AsyncStorage.getItem('userid');
            if (value !== null) {
                setuser(value);
            }
        } catch (error) {
            console.log(error);
        }
    })();


    useEffect(() => {
        const checkLike = async () => {
            setisLike(data.likes.includes(infoUser._id));
            setnumsofLike(data.likes.length);
        }
        const checkSave = async () => {
            setisSaved(data.saves.includes(infoUser._id));
        }
        checkLike();
        checkSave();
        return () => {
        }
    }, [])

    const handleLike = async (postid) => {
        const userid = infoUser._id;
        const res = await AxiosIntance().post('/post/like', { userid, postid });
        if (res.result == true) {
            setnumsofLike(numsofLike + 1)
            setisLike(true)
        }
    };
    const handleUnLike = async (postid) => {
        const userid = infoUser._id;
        const res = await AxiosIntance().post('/post/unlike', { userid, postid });
        if (res.result == true) {
            setnumsofLike(numsofLike - 1)
            setisLike(false)
        }
    };

    const handleSave = async (postid) => {
        const userid = infoUser._id;
        const res = await AxiosIntance().post('/post/save', { userid, postid });
        if (res.result == true) {
            setisSaved(true);
        }
    };
    const handleUnSave = async (postid) => {
        const userid = infoUser._id;
        const res = await AxiosIntance().post('/post/unsave', { userid, postid });
        if (res.result == true) {
            setisSaved(false);
        }
    };

    const inBeta = () => {
        ToastAndroid.show('Tính năng đang phát triển', ToastAndroid.SHORT);
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.imgProfile} source={{ uri: data?.userid.image }} />
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.usernamePost}>{data?.userid.username}</Text>
                            <Image Image style={{ width: 10, height: 10, marginTop: 3 }} source={require('../image_Khoi/official_icon.png')} />
                        </View>
                        <Text style={styles.placeText}>FPT Polytechnic</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => setvisible(true)} style={{ width: 24, height: 36, justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Image source={require('../image_Khoi/More.png')} />
                </TouchableOpacity>
            </View>
            <ImagePlaceholder placeholderStyle={styles.placeholder} style={styles.imgPost} source={{ uri: data?.image }} />
            <View style={styles.actionView}>
                <View style={{ flexDirection: 'row', width: 75, justifyContent: 'space-between', paddingHorizontal: 4 }}>
                    {
                        isLike ?
                            <TouchableOpacity onPress={() => handleUnLike(data._id)}>
                                <Image style={styles.likeIcon} source={require('../image_Khoi/Like.png')} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => handleLike(data._id)}>
                                <Image source={require('../image_Khoi/nonLike.png')} />
                            </TouchableOpacity>
                    }
                    <TouchableOpacity onPress={gotoComment}>
                        <Image source={require('../image_Khoi/Comment.png')} />
                    </TouchableOpacity>

                </View>
                {
                    isSaved ?
                        <TouchableOpacity onPress={() => handleUnSave(data._id)}>
                            <Image style={styles.likeIcon} source={require('../image_Khoi/Saved.png')} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => handleSave(data._id)}>
                            <Image source={require('../image_Khoi/nonSave.png')} />
                        </TouchableOpacity>
                }
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.numsofLikeText}>{numsofLike} likes</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.usernamePost}>{data?.userid.username}
                        <Text style={styles.statusText}>{" " + data?.content}</Text>
                    </Text>

                </View>

            </View>

            <Modal
                style={{ width: '100%', marginLeft: 0, marginRight: 0 }}
                isVisible={visible} onBackdropPress={() => setvisible(false)}
                onBackButtonPress={() => setvisible(false)}
            >
                <View style={styles.optionView}>

                    <>
                        {
                            infoUser._id == data?.userid._id
                                ?
                                <View style={styles.btmView}>
                                    <TouchableOpacity onPress={onDelete} onPressOut={() => setvisible(false)} style={{ flexDirection: 'row', height: 48, width: '100%', alignItems: 'center' }}>
                                        <Image style={styles.btsImg} source={require('../image_Khoi/icon_bottomsheet/delete.png')} />
                                        <Text style={styles.optionText} >Delete this post</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={gotoEditPost} style={{ flexDirection: 'row', height: 48, width: '100%', alignItems: 'center' }}>
                                        <Image style={styles.btsImg} source={require('../image_Khoi/icon_bottomsheet/draw.png')} />
                                        <Text style={[styles.optionText]} >Edit post</Text>
                                    </TouchableOpacity>

                                </View>
                                :
                                <View style={styles.btmView}>
                                    <TouchableOpacity onPress={onHide} style={{ flexDirection: 'row', height: 48, width: '100%', alignItems: 'center' }}>
                                        <Image style={styles.btsImg} source={require('../image_Khoi/icon_bottomsheet/hide.png')} />
                                        <Text style={styles.optionText} >Hidden this post</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={inBeta} style={{ flexDirection: 'row', height: 48, width: '100%', alignItems: 'center' }}>
                                        <Image style={styles.btsImg} source={require('../image_Khoi/icon_bottomsheet/post_report.png')} />
                                        <Text style={[styles.optionText, { color: 'red' }]} >Report this post</Text>
                                    </TouchableOpacity>
                                </View>
                        }
                    </>



                </View>


            </Modal>

        </View>


    )
}

export default ItemPost
const maxWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderColor: '#0000002A',
    },
    headerView: {
        height: 54,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'


    },
    imgProfile: {
        width: 36,
        height: 36,
        borderRadius: 99,
        marginEnd: 5
    },
    usernamePost: {
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#262626',
        marginEnd: 2
    },
    placeText: {
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '400',
        color: '#262626',
    },
    imgPost: {
        width: maxWidth,
        height: maxWidth
    },
    placeholder: {
        width: maxWidth,
        height: maxWidth,
        backgroundColor: '#ccc',
    },
    actionView: {
        height: 44,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    numsofLikeText: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#262626',
    },
    bottomView: {
        paddingHorizontal: 16,
        marginBottom: 15

    },
    statusText: {
        position: 'relative',
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '400',
        color: '#262626',
        flex: 1
    },

    optionText: {
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
        marginStart: 10,
    },
    btmView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    optionView: {
        position: 'absolute',
        bottom: -20,
        right: 0,
        left: 0,
        height: 120,
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center'

    },
    btsImg: {
        width: 24,
        height: 24
    },
    username: {
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#262626',
        marginEnd: 3
    },
    profileView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 20
    },
    profileText: {
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',

    },
    imformationView: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgPro5: {
        width: 96,
        height: 96,
        borderRadius: 99
    },
    nummberText: {
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
    ttText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '400',
        color: '#4E4B66',

    },
    name: {
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 10,
        marginStart: 20
    },
    gtText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '400',
        color: '#4E4B66',
        width: Dimensions.get('window').width - 150,
        marginStart: 20
    },
    btnEdit: {
        marginTop: 15,
        marginHorizontal: 20,
        borderWidth: 1,
        height: 36,
        borderRadius: 6,
        borderColor: '#0000005A',
        justifyContent: 'center',
        alignItems: 'center'

    },
    editprofileText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#262626',
    },



})