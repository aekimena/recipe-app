import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import colors from '../../../constants/colors';
import {textStyles, viewStyles} from '../../../constants/style';

interface Props {
  label?: string;
  secureText?: boolean;
  disabled?: boolean;
  onChangeText?: (value: string) => void;
  rightIcon?: JSX.Element;
  onRightIconPress?: () => void;
}

export const AuthInput = ({
  label,
  secureText,
  disabled,
  onChangeText,
  rightIcon,
  onRightIconPress,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text style={{...textStyles.font_14_regular, color: colors.black200}}>
          {label}
        </Text>
      </View>
      <TextInput
        editable={!disabled}
        secureTextEntry={secureText}
        onChangeText={onChangeText}
        style={{flex: 1, height: '100%', color: colors.black100}}
      />
      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress}>
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.black200,
    ...viewStyles.flexRow,
    gap: 10,
    paddingHorizontal: 10,
  },
  label: {
    height: 20,
    paddingHorizontal: 10,
    position: 'absolute',
    top: -10,
    left: 0,
    backgroundColor: colors.white,
  },
});
