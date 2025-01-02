import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabsNavigatorProps} from '../types/navigator.types';
import {HomeScreen} from '../screens/Tabs/Home/HomeScreen';
import {SCREENS} from './routes';
import {BookMarksScreen} from '../screens/Tabs/bookmarks/BookMarksScreen';
import {NotificationScreen} from '../screens/Tabs/notification/NotificationScreen';
import {ProfileScreen} from '../screens/Tabs/profile/ProfileScreen';

export const AppNavigator = () => {
  const TabsStack = createBottomTabNavigator<TabsNavigatorProps>();
  return (
    <TabsStack.Navigator
      screenOptions={{headerShown: false, animation: 'shift'}}>
      <TabsStack.Screen
        component={HomeScreen}
        name={SCREENS.HOME}
        options={{title: 'Home'}}
      />
      <TabsStack.Screen
        component={BookMarksScreen}
        name={SCREENS.BOOKMARKS}
        options={{title: 'Bookmarks'}}
      />
      <TabsStack.Screen
        component={NotificationScreen}
        name={SCREENS.NOTIFICATIONS}
        options={{title: 'Notifications'}}
      />
      <TabsStack.Screen
        component={ProfileScreen}
        name={SCREENS.PROFILE}
        options={{title: 'Profile'}}
      />
    </TabsStack.Navigator>
  );
};

const styles = StyleSheet.create({});
