import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const ItemPost = (props) => {
    const { data } = props;
    const [isLike, setisLike] = useState(false);
    const [isSaved, setisSaved] = useState(false);
    const [numsofLike, setnumsofLike] = useState(201102);
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={styles.imgProfile} source={require('../image_Khoi/myx1.jpg')} />
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.username}>tmy_dthuong</Text>
                            <Image Image style={{ width: 10, height: 10, marginTop: 3 }} source={require('../image_Khoi/official_icon.png')} />
                        </View>
                        <Text style={styles.placeText}>Seoul, Korea</Text>
                    </View>
                </View>
                <TouchableOpacity style={{ height: 24, justifyContent: 'center' }}>
                    <Image source={require('../image_Khoi/More.png')} />
                </TouchableOpacity>
            </View>
            <Image style={styles.imgPost} source={data?.images} />
            <View style={styles.actionView}>
                <View style={{ flexDirection: 'row', width: 75, justifyContent: 'space-between', paddingHorizontal: 4 }}>
                    {
                        isLike ?
                            <TouchableOpacity onPress={() => { setisLike(false), setnumsofLike(numsofLike - 1) }}>
                                <Image style={styles.likeIcon} source={require('../image_Khoi/Like.png')} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => { setisLike(true), setnumsofLike(numsofLike + 1) }}>
                                <Image source={require('../image_Khoi/nonLike.png')} />
                            </TouchableOpacity>
                    }
                    <TouchableOpacity>
                        <Image source={require('../image_Khoi/Comment.png')} />
                    </TouchableOpacity>

                </View>
                {
                    isSaved ?
                        <TouchableOpacity onPress={() => setisSaved(false)}>
                            <Image style={styles.likeIcon} source={require('../image_Khoi/Saved.png')} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => setisSaved(true)}>
                            <Image source={require('../image_Khoi/nonSave.png')} />
                        </TouchableOpacity>
                }
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.numsofLikeText}>{numsofLike} likes</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.username}>tmy_dthuong
                        <Text style={styles.statusText}> Tớ và biển.</Text>
                    </Text>

                </View>

            </View>

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
    username: {
        fontFamily: 'Poppins',
        fontSize: 14,
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
    }



})