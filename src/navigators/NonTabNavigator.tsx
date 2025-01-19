import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from './routes';
import {RecipeNavigator} from './RecipeNavigator';
import {NonTabsNavigatorProps} from '../types/navigator.types';
import {SearchScreen} from '../screens/nonTabs/SearchScreen';

export const NonTabNavigator = () => {
  const NonTabStack = createNativeStackNavigator<NonTabsNavigatorProps>();
  return (
    <NonTabStack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <NonTabStack.Screen
        component={RecipeNavigator}
        name={SCREENS.RECIPE_STACK}
      />
      <NonTabStack.Group>
        <NonTabStack.Screen
          component={SearchScreen}
          name={SCREENS.SEARCH_ALL}
        />
      </NonTabStack.Group>
    </NonTabStack.Navigator>
  );
};

const styles = StyleSheet.create({});
