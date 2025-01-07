import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StarRating} from '../bookmarks/StarRating';
import {textStyles, viewStyles} from '../../constants/style';
import colors from '../../constants/colors';

export const ReviewSummaryBlock = () => {
  return (
    <View style={styles.container}>
      <StarRating onPressStar={rating => null} disabled defaultRated={5} />
      <Text style={{...textStyles.font_16_bold, color: colors.black100}}>
        5.0 (1,092 Reviews)
      </Text>
      <Text
        style={{
          ...textStyles.font_12_regular,
          color: colors.black200,
          textAlign: 'center',
        }}>
        Outstanding: Rated 5.0 with 1,092 Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    ...viewStyles.allCenter,
    borderWidth: 0.5,
    borderColor: colors.black200,
    gap: 10,
  },
});
