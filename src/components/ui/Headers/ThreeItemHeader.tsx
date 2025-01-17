import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {textStyles, viewStyles} from '../../../constants/style';
import {ChevronLeft} from '../../../assets/svgs';
import colors from '../../../constants/colors';
import {useNavigation} from '@react-navigation/native';

export const ThreeItemHeader = ({
  title,
  rightItem,
}: {
  title: string;
  rightItem: JSX.Element;
}) => {
  const navigation = useNavigation();
  return (
    <View style={{...viewStyles.flexRowCenter, gap: 15, paddingHorizontal: 20}}>
      <Pressable onPress={() => navigation.goBack()}>
        <ChevronLeft size={20} color={colors.black100} />
      </Pressable>
      <View style={{flex: 1}}>
        <Text
          style={{
            ...textStyles.font_16_medium,
            color: colors.black100,
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </View>

      {rightItem}
    </View>
  );
};

const styles = StyleSheet.create({});
