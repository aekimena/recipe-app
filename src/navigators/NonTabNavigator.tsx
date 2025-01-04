import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RecipeScreen} from '../screens/nonTabs/RecipeScreen';
import {SCREENS} from './routes';

export const NonTabNavigator = () => {
  const NonTabStack = createNativeStackNavigator();
  return (
    <NonTabStack.Navigator screenOptions={{headerShown: false}}>
      <NonTabStack.Screen
        component={RecipeScreen}
        name={SCREENS.RECIPE}
        options={{}}
      />
    </NonTabStack.Navigator>
  );
};

const styles = StyleSheet.create({});
