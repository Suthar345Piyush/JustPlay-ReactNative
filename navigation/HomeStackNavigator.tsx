import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";


export type HomeStackParamList = {
   Home : undefined;
   ProfileDetails : undefined;
}

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
     <Stack.Navigator screenOptions={{headerShown : false}}>
       <Stack.Screen name="Home" component={HomeScreen}/>
       <Stack.Screen name="ProfileDetails" component={ProfileDetailScreen}/>
       <Stack.Screen name="Chat" component={ChatScreen}/>
     </Stack.Navigator> 
  );
};

export default HomeStackNavigator;


