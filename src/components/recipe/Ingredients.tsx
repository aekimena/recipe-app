import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RecipeProps} from '../../types/bookmark.type';
import {textStyles, viewStyles} from '../../constants/style';
import colors from '../../constants/colors';

interface Props {
  recipe?: RecipeProps;
}

export const Ingredients = ({recipe}: Props) => {
  return (
    <View style={{gap: 25}}>
      {recipe?.ingredients?.map((item, index) => (
        <View style={{...viewStyles.flexRowBtw, gap: 15}} key={index}>
          <View style={{...viewStyles.flexRow, gap: 10}}>
            <Image
              source={{
                uri: 'https://media.istockphoto.com/vectors/ingredient-composition-of-homemade-healthy-and-fresh-bakery-item-like-vector-id1241569277?k=6&m=1241569277&s=612x612&w=0&h=qpFPHG6n7o5uiY5zLS0Cn_XMJWG7nWKIO_AoC8epskc=',
              }}
              style={{height: 30, width: 30}}
            />
            <Text
              style={{...textStyles.font_14_medium, color: colors.black100}}>
              {item?.title}
            </Text>
          </View>
          <Text style={{...textStyles.font_14_regular, color: colors.black200}}>
            {item?.quantity}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});
