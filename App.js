/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, Image
} from 'react-native';


import Welcome from './src/screen_Khoi/Welcome';
import Login from './src/screen_Khoi/Login';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUp from './src/screen_Khoi/SignUp';
import Profile from './src/screen_Khoi/Profile';
import MyPostTab from './src/component_Khoi/MyPostTab';
import ItemPost from './src/component_Khoi/ItemPost';
import Home from './src/screen_Khoi/Home';
import NewPost from './src/screen_Khoi/Post';
import Post from './src/screen_Khoi/Post';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const App = () => {


  

  const HomeTabs = () => {
    return (


      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let source;

            if (route.name === 'Home') {
              source = focused
                ? require('./src/image_Khoi/iccon_bottomtab/home_active.png')
                : require('./src/image_Khoi/iccon_bottomtab/home.png')
            } else if (route.name === 'Profile') {
              source = focused
                ? require('./src/image_Khoi/iccon_bottomtab/profile_active.png')
                : require('./src/image_Khoi/iccon_bottomtab/profile.png')
            }
            else if (route.name === 'StackPost') {
              source =
                require('./src/image_Khoi/iccon_bottomtab/post.png')
            }

            // You can return any component that you like here!
            return <Image source={source} />

          },
          tabBarShowLabel: false,


        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="StackPost" component={Post} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
    
  }

  return (



    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="HomeTab" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};







export default App;
