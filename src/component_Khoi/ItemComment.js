import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'

const ItemComment = (props) => {
    const { data } = props;
    return (
        <View
            style={{ flexDirection: 'row', width: '100%', height: 60, justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                <TouchableOpacity>
                    <Image source={{ uri: data.userid.image }} style={{ width: 48, height: 48, borderRadius: 99 }} />
                </TouchableOpacity>

                <View style={{ flexDirection: 'column', justifyContent: 'center', marginStart: 5,flex:1 }}>

                    <Text style={{ fontWeight: 'bold', color: '#000000' }}>{data.userid.username}</Text>

                    <Text numberOfLines={1}
                        style={{ color: '#262626', width: '90%',fontWeight:'400',fontSize:14 }}>{data.content}</Text>
                </View>
            </View>
            {/* <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                {
                    isLike == true
                        ?
                        <TouchableOpacity onPress={()=>setisLike(false)} style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 6 }}>
                            <Image style={{ width: 24, height: 24 }}
                                source={require('../image_Khoi/Like.png')} />

                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={()=>setisLike(true)} style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 6 }}>
                            <Image style={{ width: 24, height: 24 }}
                                source={require('../image_Khoi/nonLike.png')} />

                        </TouchableOpacity>
                }

            </View> */}


        </View>
    )
}

export default ItemComment

const styles = StyleSheet.create({})