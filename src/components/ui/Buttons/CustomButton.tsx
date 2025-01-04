import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {textStyles, viewStyles} from '../../../constants/style';
import colors from '../../../constants/colors';

interface Props {
  loading?: boolean;
  title?: string;
  disabled?: boolean;
  onPress?: () => void;
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  rounded?: boolean;
}

export const CustomButton = ({
  loading,
  disabled,
  title,
  onPress,
  rightIcon,
  buttonStyle,
  textStyle,
  leftIcon,
  rounded,
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        ...styles.container,

        ...buttonStyle,
        // borderRadius: rounded ? 50 : 0,
        opacity: disabled ? 0.8 : 1,
      }}>
      {loading ? (
        <ActivityIndicator color={colors.white} size={40} />
      ) : (
        <>
          {leftIcon && leftIcon}
          <Text
            style={{
              ...textStyles.font_14_regular,
              color: colors.white,
              textAlign: 'center',
              ...textStyle,
            }}>
            {title}
          </Text>

          {rightIcon && rightIcon}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...viewStyles.flexRowCenter,
    gap: 15,
    borderRadius: 10,
    backgroundColor: colors.black100,
    height: 50,
    width: '100%',
  },
});
