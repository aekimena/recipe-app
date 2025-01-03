import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {VSpacer} from '../Spacer';
import {RecipeProps} from '../../../types/bookmark.type';
import {textStyles} from '../../../constants/style';
import colors from '../../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {RecipeScreenStack} from '../../../types/navigator.types';
import {SCREENS} from '../../../navigators/routes';

interface Props {
  item: RecipeProps;
  width?: number | `${number}%`;
  height?: number;
}

export const RecipeView = ({item, width = 220, height = 180}: Props) => {
  const navigation = useNavigation<RecipeScreenStack>();
  return (
    <Pressable
      style={{width}}
      onPress={() =>
        navigation.navigate(SCREENS.NON_TABS, {
          screen: SCREENS.RECIPE,
          params: {recipe: item},
        })
      }>
      <Image
        source={{uri: item.image}}
        style={{width: '100%', height, borderRadius: 10}}
      />
      <VSpacer size={10} />
      <Text style={{...textStyles.font_16_medium, color: colors.black100}}>
        {item.title}
      </Text>
      <VSpacer size={3} />
      <Text style={{...textStyles.font_14_regular, color: colors.black200}}>
        By {item?.author}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({});
