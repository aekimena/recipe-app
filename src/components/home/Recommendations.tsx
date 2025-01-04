import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

import {dummyRecommendations} from '../../constants/data';

import {VSpacer} from '../ui/Spacer';

import {SeeMoreHeader} from '../ui/Headers/SeeMoreHeader';
import {RecipeView} from '../ui/Blocks/RecipeView';

export const Recommendations = () => {
  return (
    <View>
      <SeeMoreHeader
        leftText="Recommendations"
        rightText="See all"
        onRightPress={() => null}
      />
      <VSpacer size={20} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: 15, paddingHorizontal: 20}}>
        {dummyRecommendations.map((item, index) => (
          <RecipeView item={item} width={150} height={180} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
