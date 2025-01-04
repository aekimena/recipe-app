import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RecipeProps} from '../../types/bookmark.type';

import {Reviews} from './Reviews';
import {Instructions} from './Instructions';
import {Ingredients} from './Ingredients';

interface Props {
  activeTab?: number;
  recipe?: RecipeProps;
}

export const TabsContent = ({recipe, activeTab}: Props) => {
  return (
    <View style={{paddingHorizontal: 20}}>
      {activeTab == 1 && <Ingredients recipe={recipe} />}
      {activeTab == 2 && <Instructions recipe={recipe} />}
      {activeTab == 3 && <Reviews />}
    </View>
  );
};

const styles = StyleSheet.create({});
