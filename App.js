import { View, Text } from 'react-native'
import React from 'react'
import Wellcome from './src/Screen_Dat/Wellcome'
import Login from './src/Screen_Dat/Login'
import Signtup from './src/Screen_Dat/Signtup'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchAcount from './src/Screen_Dat/SearchAcount'
import ItemSearchUser from './src/Component_Dat/ItemSearchUser'
import SearchPicks from './src/Screen_Dat/SearchPicks'
import Notification from './src/Screen_Dat/Notification'
import ItemNotification from './src/Component_Dat/ItemNotification'
import ItemStory from './src/Component_Dat/ItemStory'
import EditProfile from './src/Screen_Dat/EditProfile'
import Search from './src/Screen_Dat/Search'
import ItemSearch from './src/Component_Dat/ItemSearch'
import Post from './src/Screen_Dat/Post'
import Follower from './src/Screen_Dat/Follower'
import ItemFollower from './src/Component_Dat/ItemFollower'
import ItemFollowing from './src/Component_Dat/ItemFollowing'
import Following from './src/Screen_Dat/Following'














const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <Following/>
    // <NavigationContainer>
    //     <Stack.Navigator screenOptions={{headerShown: false}}>
    //       <Stack.Screen name="Wellcome" component={Wellcome} />
    //       <Stack.Screen name="Login" component={Login} />
    //       <Stack.Screen name="Signtup" component={Signtup} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
  )
}

export default App