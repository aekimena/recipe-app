import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RecipeProps} from '../../../types/bookmark.type';
import {textStyles, viewStyles} from '../../../constants/style';
import colors from '../../../constants/colors';
import {VSpacer} from '../Spacer';
import {useNavigation} from '@react-navigation/native';
import {RecipeScreenStack} from '../../../types/navigator.types';
import {SCREENS} from '../../../navigators/routes';

export const RecipeSearchView = ({recipe}: {recipe: RecipeProps}) => {
  const navigation = useNavigation<RecipeScreenStack>();
  return (
    <Pressable
      style={{...viewStyles.flexRow, gap: 10}}
      onPress={() => {
        navigation.navigate(SCREENS.NON_TABS, {
          screen: SCREENS.RECIPE_STACK,
          params: {
            screen: SCREENS.RECIPE,
            params: {recipe},
          },
        });
      }}>
      <Image
        source={{uri: recipe?.image[0]}}
        style={{height: 50, width: 50, borderRadius: 5}}
      />
      <View style={{flex: 1}}>
        <Text style={{...textStyles.font_14_medium, color: colors.black100}}>
          {recipe?.title}
        </Text>
        <VSpacer size={5} />
        <Text style={{...textStyles.font_12_regular, color: colors.black200}}>
          By {recipe?.author?.firstName} {recipe?.author?.lastName}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({});
