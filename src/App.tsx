import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootNavigator from './navigators/RootNavigator';
import {Provider} from 'react-redux';
import {store} from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
