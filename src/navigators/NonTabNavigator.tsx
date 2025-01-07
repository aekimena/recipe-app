import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from './routes';
import {RecipeNavigator} from './RecipeNavigator';
import {NonTabsNavigatorProps} from '../types/navigator.types';

export const NonTabNavigator = () => {
  const NonTabStack = createNativeStackNavigator<NonTabsNavigatorProps>();
  return (
    <NonTabStack.Navigator screenOptions={{headerShown: false}}>
      <NonTabStack.Screen
        component={RecipeNavigator}
        name={SCREENS.RECIPE_STACK}
      />
    </NonTabStack.Navigator>
  );
};

const styles = StyleSheet.create({});
