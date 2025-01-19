import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {SearchOutline} from '../../../assets/svgs';
import colors from '../../../constants/colors';
import {textStyles, viewStyles} from '../../../constants/style';

interface Props {
  placeholder?: string;
  onChangeText?: (value: string) => void;
  includePad?: boolean;
}

export const SearchInput = ({
  placeholder,
  onChangeText,
  includePad = true,
}: Props) => {
  return (
    <View style={{paddingHorizontal: includePad ? 20 : 0}}>
      <View style={styles.container}>
        <SearchOutline color={colors.black200} size={20} />
        <TextInput
          onChangeText={onChangeText}
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor={colors.black200}
        />
      </View>
    </View>
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
  textInput: {
    height: '100%',
    flex: 1,
    color: colors.black100,
    ...textStyles.font_14_regular,
  },
});
