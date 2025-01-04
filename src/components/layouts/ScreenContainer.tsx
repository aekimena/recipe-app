import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';

interface Props {
  children: JSX.Element;
  statusBarBackground?: string;
  stausBarColor?: 'light-content' | 'dark-content';
  statusBarTranslucent?: boolean;
}

export const ScreenContainer = ({
  children,
  statusBarBackground,
  stausBarColor,
  statusBarTranslucent = false,
}: Props) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={stausBarColor ?? 'dark-content'}
        backgroundColor={statusBarBackground ?? colors.white}
        translucent={statusBarTranslucent}
        animated
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({});
