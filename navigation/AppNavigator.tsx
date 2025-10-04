import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

type TabParamList = {
   Home : undefined;
   Play : undefined;
   Book : undefined;
   More : undefined;
}

const Tab = createBottomTabNavigator();


const AppNavigator:React.FC = () => {
  return (
    <View>
      <Text>AppNavigator</Text>
    </View>
  )
}

export default AppNavigator;


const styles = StyleSheet.create({});

