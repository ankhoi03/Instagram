import React, { useContext } from 'react'
import { Image } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from './Welcome';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import Comment from './Comment';
import Profile from './Profile';
import AllPost from './AllPost';
import Follower from './Follower';
import Following from './Following';
import Search from '../Screen_Dat/Search';
import SearchAcount from '../Screen_Dat/SearchAcount';
import { AppContext } from './AppContext';
import Post from './Post';
import Notification from '../Screen_Dat/Notification';
import EditProfile from '../Screen_Dat/EditProfile';
import Saved from './Saved';
import EditPost from './EditPost';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();










const HomeTabs = () => {
    const { infoUser } = useContext(AppContext);
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    let source;

                    if (route.name === 'Home') {
                        if (source = focused) {
                            return <Image source={require('../image_Khoi/iccon_bottomtab/home_active.png')} />
                        } else {
                            return <Image source={require('../image_Khoi/iccon_bottomtab/home.png')} />
                        }
                    } else if (route.name === 'Profile') {
                        if (source = focused) {
                            return <Image source={{ uri: infoUser.image }} style={{ borderRadius: 99, width: 26, height: 26, borderWidth:2,borderColor:'#3797EF' }} />
                        } else {
                            return <Image source={{ uri: infoUser.image }} style={{ borderRadius: 99, width: 24, height: 24 }} />
                        }
                    }
                    else if (route.name === 'Search') {
                        if(source = focused){
                            return <Image source={require('../image_Khoi/iccon_bottomtab/search_active.png')}/>
                        } else {
                            return <Image source={require('../image_Khoi/iccon_bottomtab/search.png')}/>
                        }  

                    }
                    else if (route.name === 'Notification') {
                        if(source = focused){
                            return <Image source={require('../image_Khoi/iccon_bottomtab/notification_active.png')}/>
                        } else {
                            return <Image source={require('../image_Khoi/iccon_bottomtab/notification.png')}/>
                        }  

                    }

                },
                tabBarShowLabel: false,


            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Notification" component={Notification} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}




const User = () => {
    return (
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
    )
}

const HomeFuntion = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeTabs" component={HomeTabs} />
            <Stack.Screen name="Comment" component={Comment} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="Post" component={Post} />
            <Stack.Screen name="SearchAccount" component={SearchAcount} />
            <Stack.Screen name="AllPost" component={AllPost} />
            <Stack.Screen name="Follower" component={Follower} />
            <Stack.Screen name="Following" component={Following} />
            <Stack.Screen name="Saved" component={Saved} />
            <Stack.Screen name="EditPost" component={EditPost} />
        </Stack.Navigator>
    )
}


const AppNavigator = () => {

    const { isLogin } = useContext(AppContext);
    return (
        <>

            {
                isLogin === false ? <User /> : <HomeFuntion />

            }

        </>

    )
}



export default AppNavigator;