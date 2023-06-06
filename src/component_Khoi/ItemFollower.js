import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ItemFollower = (props) => {
    const { data } = props;
    console.log(data);
    return (
        <TouchableOpacity
            style={{ flexDirection: 'row', width: '100%', height: 80, justifyContent: 'space-between', alignItems: 'center',backgroundColor:'#fff' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center',height:'100%' }}>
                <Image source={data.images} style={{ width: 64, height: 64, borderRadius: 99 }} />
                <View style={{ flexDirection:'row',width:'81.5%',height:'80%', borderBottomWidth: 1,justifyContent:'space-between',alignItems:'center',borderColor:'#00000050' }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', marginStart: 15, }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: '600', color: '#000000',fontSize:16 }}>{data.username}</Text>
                            <Image Image style={{ width: 14, height: 14, marginTop: 4, marginStart: 4 }} source={require('../image_Khoi/official_icon.png')} />
                            <Text style={{ color: 'blue', marginStart: 10 }}>Follow</Text>
                        </View>
                        <Text numberOfLines={1}
                            style={{ color: '#A3A3A3', width: '90%' }}>{data.title}</Text>
                    </View>

                        <TouchableOpacity style={{ width: 65, height: 36, backgroundColor: '#3797EF', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                            <Text style={{ color: '#ffffff' }}>Remove</Text>
                        </TouchableOpacity>
                    
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default ItemFollower

const styles = StyleSheet.create({})