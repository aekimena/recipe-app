import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {textStyles, viewStyles} from '../../../constants/style';
import {ChevronLeft} from '../../../assets/svgs';
import colors from '../../../constants/colors';
import {useNavigation} from '@react-navigation/native';

interface Props {
  title?: string;
}

const GoBackHeader = ({title}: Props) => {
  const navigation = useNavigation();
  return (
    <View style={{...viewStyles.flexRowCenter}}>
      <Pressable
        style={{position: 'absolute', left: 20}}
        onPress={() => navigation.goBack()}>
        <ChevronLeft size={25} color={colors.black100} />
      </Pressable>
      <Text style={{...textStyles.font_16_medium, color: colors.black100}}>
        {title}
      </Text>
    </View>
  );
};

export {GoBackHeader};

const styles = StyleSheet.create({});
