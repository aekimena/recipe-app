import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import {VSpacer} from '../ui/Spacer';
import {useSafeTops} from '../../hooks/useSafeTops';

interface Props {
  children: JSX.Element;
  statusBarBackground?: string;
  stausBarColor?: 'light-content' | 'dark-content';
  statusBarTranslucent?: boolean;
}

export const ScreenContainer = ({
  children,
  statusBarBackground = colors.white,
  stausBarColor = 'dark-content',
  statusBarTranslucent = true,
}: Props) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={stausBarColor}
        backgroundColor={statusBarBackground ?? colors.white}
        translucent={statusBarTranslucent}
        animated
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({});
