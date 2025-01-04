import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {textStyles, viewStyles} from '../../constants/style';
import {RecipeProps} from '../../types/bookmark.type';
import colors from '../../constants/colors';
import {ClockOutline} from '../../assets/svgs';
import {VSpacer} from '../ui/Spacer';

export const SheetHeader = ({recipe}: {recipe: RecipeProps}) => {
  return (
    <View style={{paddingHorizontal: 20}}>
      <View>
        <Text style={{...textStyles.font_18_bold, color: colors.black100}}>
          {recipe?.title}
        </Text>
        <VSpacer size={7} />
        <Text
          style={{
            ...textStyles.font_14_regular,
            color: colors.black200,
            lineHeight: 18,
            fontSize: 13,
          }}>
          {recipe?.description}
        </Text>
      </View>
      <VSpacer size={10} />
      <View style={{...viewStyles.flexRow, gap: 25}}>
        <View style={{...viewStyles.flexRow, gap: 3}}>
          <ClockOutline size={15} color={colors.black200} />
          <Text style={{...textStyles.font_12_regular, color: colors.black200}}>
            {recipe?.duration}m
          </Text>
        </View>
        <View style={{...viewStyles.flexRow, gap: 3}}>
          <ClockOutline size={15} color={colors.black200} />
          <Text style={{...textStyles.font_12_regular, color: colors.black200}}>
            {recipe?.duration}m
          </Text>
        </View>
        <View style={{...viewStyles.flexRow, gap: 3}}>
          <ClockOutline size={15} color={colors.black200} />
          <Text style={{...textStyles.font_12_regular, color: colors.black200}}>
            {recipe?.duration}m
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
