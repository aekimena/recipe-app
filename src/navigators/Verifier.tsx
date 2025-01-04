import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectUserProfile, setUserProfile} from '../store/profileStore';
import {AppDispatch} from '../store/store';
import {CodeScreen} from '../screens/Auth/CodeScreen';
import {SCREENS} from './routes';

export const Verifier = ({children}: {children: JSX.Element}) => {
  const userProfile = useSelector(selectUserProfile);
  const dispatch = useDispatch<AppDispatch>();
  const fetchUserProfile = () => {
    return new Promise((resolve, reject) => {
      console.log('validated.');
      dispatch(
        setUserProfile({
          firstName: 'Ae',
          lastName: 'Kimena',
          email: 'aekiemnawork@gmail.com',
          verified: false,
          followers: 4,
          following: 5,
          profileImageUrl: null,
        }),
      );
      resolve('');
    });
  };

  useEffect(() => {
    fetchUserProfile().then(() => {});
  }, []);

  if (!userProfile) return <View />;
  if (!userProfile.verified)
    return (
      <CodeScreen
        route={{params: {code: '1234'}, name: SCREENS.ENTER_CODE, key: '000'}}
      />
    );
  return <>{children}</>;
};

const styles = StyleSheet.create({});
