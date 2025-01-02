import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {textStyles, viewStyles} from '../../constants/style';
import {dummyRecommendations} from '../../constants/data';
import {Image} from 'react-native';
import {VSpacer} from '../ui/Spacer';
import colors from '../../constants/colors';

const {width: screenW} = Dimensions.get('window');

export const Recommendations = () => {
  return (
    <View>
      <View style={{...viewStyles.flexRowBtw, paddingHorizontal: 20}}>
        <Text>Recomendations</Text>
        <Text>See all</Text>
      </View>
      <VSpacer size={20} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: 15, paddingHorizontal: 20}}>
        {dummyRecommendations.map((item, index) => (
          <Pressable key={index} style={{width: 150}}>
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
