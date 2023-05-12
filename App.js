/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View,StyleSheet, Image, Text } from 'react-native';
import Register from './src/components/app/user/screens/Register';
import Login from './src/components/app/user/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import  AppNavigation from './src/components/app/navigation/AppNavigation'
import  {UserProvider} from  './src/components/app/user/utilities/UserContext'
import  {NewsProvider} from  './src/components/app/news/utilities/NewsContext'
import Signin from './src/Signin';


const App = () => {
  return (
      <></>
  );
}


export default App;
