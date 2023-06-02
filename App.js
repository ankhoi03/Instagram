
import React from "react";
import {View,Text} from "react-native";
import Login from "./src/Screen_Trieu/Login";
import SignUp from"./src/Screen_Trieu/SignUp";
import Forgot from"./src/Screen_Trieu/Forgot";
import NewPass from"./src/Screen_Trieu/NewPass";
import NewPost from"./src/Screen_Trieu/NewPost";


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    // <View>
    //   <Forgot/>
    // </View>
  //   <NavigationContainer>
  //   <Stack.Navigator  screenOptions={{ headerShown: false }}>
  //     <Stack.Screen name="Login" component={Login} />
  //     <Stack.Screen name="SignUp" component={SignUp} />
  //     <Stack.Screen name="Forgot" component={Forgot} />
  //     <Stack.Screen name="NewPass" component={NewPass} />
  //   </Stack.Navigator>
  // </NavigationContainer>
<NewPost/>
  );
}


export default App;
