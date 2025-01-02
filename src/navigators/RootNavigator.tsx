import {SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Authenticator} from './Authenticator';
import {AppNavigator} from './AppNavigator';
import {Verifier} from './Verifier';

type Props = {};

const RootNavigator = (props: Props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Authenticator>
          <Verifier>
            <AppNavigator />
          </Verifier>
        </Authenticator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigator;
