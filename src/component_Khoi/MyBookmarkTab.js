import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyBookmarkTab = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'Poppins',fontSize: 20,fontWeight:'700',color: '#262626',width:'70%',textAlign:'center'}}>When people tag you in post they'll appear here.</Text>
    </View>
  )
}

export default MyBookmarkTab

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    }
})