import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RecipeProps} from '../../types/bookmark.type';
import {RecipeView} from '../ui/Blocks/RecipeView';
import {textStyles, viewStyles} from '../../constants/style';
import {useNavigation} from '@react-navigation/native';
import {RecipeScreenStack} from '../../types/navigator.types';
import {SCREENS} from '../../navigators/routes';

interface Props {
  item: Array<RecipeProps>;
}

const ExcludedItems = ({number}: {number: number}) => {
  return (
    <View style={styles.excluded}>
      <Text style={{...textStyles.font_14_regular, color: '#fff'}}>
        {number} +
      </Text>
      <Text style={{...textStyles.font_16_regular, color: '#fff'}}>
        {number == 1 ? 'Recipe' : 'Recipes'}
      </Text>
    </View>
  );
};

export const ImageGallery = ({item}: Props) => {
  const navigation = useNavigation<RecipeScreenStack>();

  const navigateTo = (item: RecipeProps) => {
    navigation.navigate(SCREENS.NON_TABS, {
      screen: SCREENS.RECIPE,
      params: {recipe: item},
    });
  };
  if (item.length == 1)
    return (
      <View>
        <RecipeView item={item[0]} width={'100%'} height={180} />
      </View>
    );

  if (item.length == 2)
    return (
      <View style={{...viewStyles.flexRow, gap: 15}}>
        {item.map((child, index) => (
          <View style={{flex: 1}} key={index}>
            <RecipeView item={child} width={'100%'} height={180} />
          </View>
        ))}
      </View>
    );

  if (item.length == 3)
    return (
      <View style={{...viewStyles.flexRow, gap: 15}}>
        <Pressable
          style={{flex: 1, height: 180}}
          onPress={() => navigateTo(item[0])}>
          <Image source={{uri: item[0].image[0]}} style={styles.image} />
        </Pressable>
        <View style={{height: 180, gap: 15, flex: 1}}>
          <Pressable style={{flex: 1}} onPress={() => navigateTo(item[1])}>
            <Image source={{uri: item[1].image[0]}} style={styles.image} />
          </Pressable>
          <Pressable style={{flex: 1}} onPress={() => navigateTo(item[2])}>
            <Image source={{uri: item[2].image[0]}} style={styles.image} />
          </Pressable>
        </View>
      </View>
    );

  return (
    <View style={{...viewStyles.flexRow, gap: 15}}>
      <Pressable
        style={{flex: 1, height: 180}}
        onPress={() => navigateTo(item[0])}>
        <Image source={{uri: item[0].image[0]}} style={styles.image} />
      </Pressable>
      <View style={{height: 180, gap: 15, flex: 1}}>
        <Pressable style={{flex: 1}} onPress={() => navigateTo(item[1])}>
          <Image source={{uri: item[1].image[0]}} style={styles.image} />
        </Pressable>
        <Pressable style={{flex: 1}}>
          <Image source={{uri: item[2].image[0]}} style={styles.image} />
          <ExcludedItems number={item?.length - 3} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
  excluded: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    ...viewStyles.allCenter,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
  },
});
