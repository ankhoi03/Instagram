import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
} from 'react-native'
import React from 'react'

const ItemSearch = (props) => {
    const { data } = props;
    const itemWidth = Dimensions.get('window').width / 3;
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
                style={{
                    width: itemWidth,
                    height: itemWidth,
                    backgroundColor: '#ffffff',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Image
                    source={{ uri: data?.image }}
                    style={{ width: itemWidth - 1.5, height: itemWidth - 1.5 }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default ItemSearch

const styles = StyleSheet.create({})