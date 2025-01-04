import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {textStyles} from '../../constants/style';
import colors from '../../constants/colors';

export const Header = () => {
  return (
    <View style={{paddingHorizontal: 20}}>
      <Text style={{...textStyles.font_20_bold, color: colors.black100}}>
        Bookmark
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
