import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {textStyles, viewStyles} from '../../constants/style';
import {VSpacer} from '../ui/Spacer';
import {dummyRecipeOfWeek} from '../../constants/data';
import colors from '../../constants/colors';

export const RecipeOfWeek = () => {
  return (
    <View>
      <View style={{...viewStyles.flexRowBtw, paddingHorizontal: 20}}>
        <Text>Recipes of the Week</Text>
        <Text>See all</Text>
      </View>
      <VSpacer size={20} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: 15, paddingHorizontal: 20}}>
        {dummyRecipeOfWeek.map((item, index) => (
          <Pressable key={index} style={{width: 220}}>
            <Image
              source={{uri: item.image}}
              style={{width: '100%', height: 180, borderRadius: 10}}
            />
            <VSpacer size={10} />
            <Text
              style={{...textStyles.font_16_medium, color: colors.black100}}>
              {item.title}
            </Text>
            <VSpacer size={3} />
            <Text
              style={{...textStyles.font_14_regular, color: colors.black200}}>
              By {item?.author}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
