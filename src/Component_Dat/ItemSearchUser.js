import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';

const ItemSearchUser = props => {
  const {data} = props;
  console.log(data);
  return (
    <View>
      <TouchableOpacity>
        <View
          style={{flexDirection: 'row', marginTop: 20, paddingHorizontal: 24}}>
          <Image source={data.images} style={{width: 64, height: 64}} />
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              marginStart: 15,
            }}>
            <Text style={{fontWeight: 'bold', color: '#000000'}}>
              {data.name}
            </Text>
            <Text style={{color: '#A3A3A3'}}>{data.title}</Text>

            
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemSearchUser;

const styles = StyleSheet.create({});
