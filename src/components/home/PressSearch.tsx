import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import {textStyles, viewStyles} from '../../constants/style';
import {SearchOutline} from '../../assets/svgs';
import {useNavigation} from '@react-navigation/native';
import {SearchAllStack} from '../../types/navigator.types';
import {SCREENS} from '../../navigators/routes';

export const PressSearch = () => {
  const navigation = useNavigation<SearchAllStack>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate(SCREENS.NON_TABS, {screen: SCREENS.SEARCH_ALL})
      }>
      <SearchOutline color={colors.black200} size={20} />

      <Text style={{...textStyles.font_14_regular, color: colors.black200}}>
        Search any recipe, chef
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: '100%',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.black100,
    ...viewStyles.flexRow,
    gap: 15,
    paddingHorizontal: 15,
  },
});
