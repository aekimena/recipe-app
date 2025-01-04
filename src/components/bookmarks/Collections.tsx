import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BookmarkCollectionProps} from '../../types/bookmark.type';
import {SeeMoreHeader} from '../ui/Headers/SeeMoreHeader';
import {ImageGallery} from './ImageGallery';
import {VSpacer} from '../ui/Spacer';

export const Collections = ({collection, recipes}: BookmarkCollectionProps) => {
  return (
    <View style={{}}>
      <SeeMoreHeader
        leftText={collection}
        rightText={recipes.length > 2 ? 'See all' : null}
      />
      <VSpacer size={20} />
      <View style={{paddingHorizontal: 20}}>
        <ImageGallery item={recipes} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
