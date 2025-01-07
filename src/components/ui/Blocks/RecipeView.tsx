import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {VSpacer} from '../Spacer';
import {RecipeProps} from '../../../types/bookmark.type';
import {textStyles, viewStyles} from '../../../constants/style';
import colors from '../../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {RecipeScreenStack} from '../../../types/navigator.types';
import {SCREENS} from '../../../navigators/routes';
import {BookmarkOutline, LoveOutline} from '../../../assets/svgs';

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
          screen: SCREENS.RECIPE_STACK,
          params: {
            screen: SCREENS.RECIPE,
            params: {recipe: item},
          },
        })
      }>
      <View style={{width: '100%', height}}>
        <Image
          source={{uri: item.image[0]}}
          style={{width: '100%', height, borderRadius: 10}}
        />
        <View style={{...styles.actionIcons, height}}>
          <Pressable style={styles.iconContainer}>
            <LoveOutline size={17} color={colors.white} />
          </Pressable>
          <Pressable style={styles.iconContainer}>
            <BookmarkOutline size={17} color={colors.white} />
          </Pressable>
        </View>
      </View>

      <VSpacer size={10} />
      <Text
        style={{...textStyles.font_14_medium, color: colors.black100}}
        numberOfLines={1}>
        {item.title}
      </Text>
      <VSpacer size={3} />
      <Text style={{...textStyles.font_12_regular, color: colors.black200}}>
        By {item?.author?.firstName + ' ' + item?.author?.lastName}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    height: 25,
    width: 25,
    ...viewStyles.allCenter,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 50,
  },
  actionIcons: {
    justifyContent: 'space-between',

    position: 'absolute',
    right: 0,
    alignItems: 'flex-end',
    padding: 10,
  },
});
