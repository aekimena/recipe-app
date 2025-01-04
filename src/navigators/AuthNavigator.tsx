import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNavigatorType} from '../types/navigator.types';
import {LoginScreen} from '../screens/Auth/LoginScreen';
import {SCREENS} from './routes';
import {SignUpScreen} from '../screens/Auth/SignUpScreen';
import {CodeScreen} from '../screens/Auth/CodeScreen';

export const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator<AuthNavigatorType>();
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <AuthStack.Screen component={LoginScreen} name={SCREENS.LOGIN} />
      <AuthStack.Screen component={SignUpScreen} name={SCREENS.SIGN_UP} />
      <AuthStack.Screen component={CodeScreen} name={SCREENS.ENTER_CODE} />
    </AuthStack.Navigator>
  );
};

const styles = StyleSheet.create({});
