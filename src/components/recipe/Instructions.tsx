import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RecipeProps} from '../../types/bookmark.type';
import {textStyles, viewStyles} from '../../constants/style';
import colors from '../../constants/colors';
import {VSpacer} from '../ui/Spacer';

interface Props {
  recipe?: RecipeProps;
}

export const Instructions = ({recipe}: Props) => {
  return (
    <View style={{gap: 25}}>
      {recipe?.instructions?.map((item, index) => (
        <View key={index} style={styles.box}>
          <Text style={{...textStyles.font_16_medium, color: colors.black100}}>
            {(recipe?.instructions?.indexOf(item) + 1)
              .toString()
              .padStart(2, '0')}
          </Text>
          <View style={{flex: 1}}>
            <Text
              style={{...textStyles.font_16_medium, color: colors.black100}}>
              {item?.title}
            </Text>
            <VSpacer size={10} />
            <View style={{left: 5, gap: 15}}>
              {item?.instruction?.map((child, childIndex) => (
                <View style={{...viewStyles.flexRow, gap: 10}} key={childIndex}>
                  <View style={styles.dot} />
                  <Text
                    style={{
                      ...textStyles.font_14_regular,
                      color: colors.black200,
                    }}>
                    {child}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    ...viewStyles.flexRow,
    alignItems: 'flex-start',
    width: '100%',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.forest100,
    padding: 15,
    gap: 10,
  },
  dot: {
    height: 3,
    width: 3,
    borderRadius: 5,
    backgroundColor: colors.black200,
  },
});
