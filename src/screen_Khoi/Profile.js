import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

import MyPostTab from '../component_Khoi/MyPostTab';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import MyBookmarkTab from '../component_Khoi/MyBookmarkTab';

const Profile = () => {

    const MyPostRoute = () => (
        <MyPostTab />
    );

    const MyBookmarkRoute = () => (
        <MyBookmarkTab />
    );
    const renderScene = SceneMap({
        mypost: MyPostRoute,
        mybookmark: MyBookmarkRoute,
    });
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'mypost',image: require('../image_Khoi/MyPost.png') },
        { key: 'mybookmark', image: require('../image_Khoi/Bookmark.png') },

    ]);
    const CustomTabBarImage = ({ source, focused }) => {
        return (
          <Image source={source} style={{ width: 24, height: 24, tintColor: focused ? '#000000' : '#00000040' }} />
        );
      };
    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{backgroundColor:'#262626'}}
            style={{ backgroundColor: 'transparent'}}
            indicatorContainerStyle={{borderTopWidth:1, borderColor: '#0000008A'}}
            renderIcon={({ route, focused }) => (
                <CustomTabBarImage source={route.image} focused={focused} />
              )}
            pressColor='transparent'
        />
    );
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'}
                translucent={true}
                backgroundColor={'transparent'}
            />
            <View style={styles.headerView}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.username}>tmy_dthuong</Text>
                    <Image style={{width:15,height:15, marginTop:5}} source={require('../image_Khoi/official_icon.png')}></Image>
                </View>
                <TouchableOpacity>
                    <Image source={require('../image_Khoi/Menu.png')}></Image>
                </TouchableOpacity>
            </View>

            <View style={styles.profileView}>
                <Image style={styles.imgProfile} source={require("../image_Khoi/myx1.jpg")}></Image>
                <TouchableOpacity style={styles.imformationView}>
                    <Text style={styles.nummberText}>20</Text>
                    <Text style={styles.ttText}>Posts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imformationView}>
                    <Text style={styles.nummberText}>2.1M</Text>
                    <Text style={styles.ttText}>Followers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imformationView}>
                    <Text style={styles.nummberText}>1</Text>
                    <Text style={styles.ttText}>Following</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.name}>Mỹ Nguyễn</Text>
            <Text numberOfLines={2} style={styles.gtText}>Mot bong hong xinh tuoi tham huhh trong em kieu sa</Text>
            <TouchableOpacity style={styles.btnEdit}>
                <Text style={styles.editprofileText}>Edit Profile</Text>
            </TouchableOpacity>
            <View style={styles.tabView}>
                <TabView
                    navigationState={{ index, routes }}
                    onIndexChange={setIndex}
                    renderScene={renderScene}
                    renderTabBar={renderTabBar}

                />
            </View>
        </View>


    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1

    },
    headerView: {
        marginTop: 44,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

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
    imgProfile: {
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
    tabView: {
        marginTop: 20,
        flex: 1,
    },
  

})