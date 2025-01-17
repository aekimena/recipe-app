import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {textStyles, viewStyles} from '../../../constants/style';
import {ChevronLeft} from '../../../assets/svgs';
import colors from '../../../constants/colors';
import {useNavigation} from '@react-navigation/native';

export const LeftCenterHeader = ({title}: {title: string}) => {
  const navigation = useNavigation();
  return (
    <View style={{...viewStyles.flexRowCenter}}>
      <Pressable
        style={{position: 'absolute', left: 20}}
        onPress={() => navigation.goBack()}>
        <ChevronLeft size={20} color={colors.black100} />
      </Pressable>
      <Text style={{...textStyles.font_16_medium, color: colors.black100}}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
