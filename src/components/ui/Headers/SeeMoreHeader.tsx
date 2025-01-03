import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {viewStyles} from '../../../constants/style';

interface Props {
  leftText?: string;
  rightText?: string | null;
  onRightPress?: () => void;
}

export const SeeMoreHeader = ({leftText, rightText, onRightPress}: Props) => {
  return (
    <View style={{...viewStyles.flexRowBtw, paddingHorizontal: 20}}>
      <Text>{leftText}</Text>
      {rightText && <Text onPress={onRightPress}>{rightText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({});
