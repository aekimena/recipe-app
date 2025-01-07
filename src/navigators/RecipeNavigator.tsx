import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RecipeScreen} from '../screens/nonTabs/recipe/RecipeScreen';
import {SCREENS} from './routes';
import {WriteReview} from '../screens/nonTabs/recipe/WriteReview';
import {RecipeNavigatorProp} from '../types/navigator.types';

export const RecipeNavigator = () => {
  const RecipeStack = createNativeStackNavigator<RecipeNavigatorProp>();
  return (
    <RecipeStack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <RecipeStack.Screen
        component={RecipeScreen}
        name={SCREENS.RECIPE}
        options={{}}
      />
      <RecipeStack.Screen component={WriteReview} name={SCREENS.WRITE_REVIEW} />
    </RecipeStack.Navigator>
  );
};

const styles = StyleSheet.create({});
