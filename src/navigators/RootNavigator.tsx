import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator} from './AuthNavigator';

type Props = {};

const RootNavigator = (props: Props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigator;
