import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectUserToken} from '../store/authStore';
import {AuthNavigator} from './AuthNavigator';

export const Authenticator = ({children}: {children: JSX.Element}) => {
  const userToken = useSelector(selectUserToken);

  if (!userToken) return <AuthNavigator />;

  if (userToken) return <>{children}</>;
};

const styles = StyleSheet.create({});
