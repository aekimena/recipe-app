import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {VSpacer} from '../ui/Spacer';
import {SeeMoreHeader} from '../ui/Headers/SeeMoreHeader';
import {RecipeView} from '../ui/Blocks/RecipeView';
import {dummyRecommendations} from '../../constants/data';

export const RecipeOfWeek = () => {
  return (
    <View>
      <SeeMoreHeader
        leftText="Recipes of the Week"
        rightText="See all"
        onRightPress={() => null}
      />
      <VSpacer size={20} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: 15, paddingHorizontal: 20}}>
        {dummyRecommendations.map((item, index) => (
          <RecipeView item={item} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
