import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {textStyles} from '../../constants/style';
import colors from '../../constants/colors';
import {dummyCategories} from '../../constants/data';
import {VSpacer} from '../ui/Spacer';

export const Categories = () => {
  return (
    <View>
      <Text
        style={{
          ...textStyles.font_14_bold,
          color: colors.black100,
          paddingLeft: 20,
        }}>
        Categories
      </Text>
      <VSpacer size={15} />
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap: 15, paddingHorizontal: 20}}>
          {dummyCategories.map((item, index) => (
            <Pressable key={index} style={styles.box}>
              <Image
                source={{uri: item.image}}
                style={{height: 20, width: 20}}
              />
              <Text
                style={{
                  ...textStyles.font_12_regular,
                  color: colors.black100,
                }}>
                {item.name}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 60,
    width: 60,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: colors.black100,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
});
