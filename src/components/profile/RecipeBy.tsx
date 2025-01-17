import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {textStyles, viewStyles} from '../../constants/style';
import colors from '../../constants/colors';
import {FireOutline} from '../../assets/svgs';

const RecipeBy = ({name}: {name: string}) => {
  return (
    <View style={{paddingHorizontal: 20, ...viewStyles.flexRow, gap: 5}}>
      <FireOutline size={15} color={colors.black100} />
      <Text
        style={{
          ...textStyles.font_14_regular,
          color: colors.black100,
        }}>
        Recipe by {name}
      </Text>
    </View>
  );
};

export {RecipeBy};

const styles = StyleSheet.create({});
