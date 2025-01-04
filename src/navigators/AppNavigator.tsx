import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabsNavigator} from './TabsNavigator';
import {AppNavigatorProps} from '../types/navigator.types';
import {SCREENS} from './routes';
import {NonTabNavigator} from './NonTabNavigator';

export const AppNavigator = () => {
  const AppStack = createNativeStackNavigator<AppNavigatorProps>();
  return (
    <AppStack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <AppStack.Screen component={TabsNavigator} name={SCREENS.TABS} />
      <AppStack.Screen component={NonTabNavigator} name={SCREENS.NON_TABS} />
    </AppStack.Navigator>
  );
};

const styles = StyleSheet.create({});
