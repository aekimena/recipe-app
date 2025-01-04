import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {textStyles, viewStyles} from '../../../constants/style';
import colors from '../../../constants/colors';
import {ChevronRight} from '../../../assets/svgs';

interface Props {
  leftText?: string;
  rightText?: string | null;
  onRightPress?: () => void;
}

export const SeeMoreHeader = ({leftText, rightText, onRightPress}: Props) => {
  return (
    <View style={{...viewStyles.flexRowBtw, paddingHorizontal: 20}}>
      <Text style={{...textStyles.font_14_medium, color: colors.black100}}>
        {leftText}
      </Text>
      {rightText && (
        <View style={{...viewStyles.flexRow, gap: 5}}>
          <Text
            style={{...textStyles.font_14_medium, color: colors.forest100}}
            onPress={onRightPress}>
            {rightText}
          </Text>
          <ChevronRight color={colors.forest100} size={15} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});
