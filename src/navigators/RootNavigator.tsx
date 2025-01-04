import {SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Authenticator} from './Authenticator';
import {AppNavigator} from './AppNavigator';
import {Verifier} from './Verifier';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

type Props = {};

const RootNavigator = (props: Props) => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Authenticator>
            <Verifier>
              <AppNavigator />
            </Verifier>
          </Authenticator>
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default RootNavigator;
