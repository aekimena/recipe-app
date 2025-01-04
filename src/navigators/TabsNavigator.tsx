import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabsNavigatorProps} from '../types/navigator.types';
import {HomeScreen} from '../screens/Tabs/Home/HomeScreen';
import {SCREENS} from './routes';
import {BookMarksScreen} from '../screens/Tabs/bookmarks/BookMarksScreen';
import {NotificationScreen} from '../screens/Tabs/notification/NotificationScreen';
import {ProfileScreen} from '../screens/Tabs/profile/ProfileScreen';
import {viewStyles} from '../constants/style';
import colors from '../constants/colors';
import {
  BellOutline,
  BookmarkOutline,
  HomeOutline,
  UserOutline,
} from '../assets/svgs';

const TabBar = ({state, descriptors, navigation}: any) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label = options.title;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {label == 'Home' && (
              <HomeOutline
                size={20}
                color={isFocused ? colors.black100 : colors.black200}
              />
            )}
            {label == 'Bookmarks' && (
              <BookmarkOutline
                size={20}
                color={isFocused ? colors.black100 : colors.black200}
              />
            )}
            {label == 'Notifications' && (
              <BellOutline
                size={20}
                color={isFocused ? colors.black100 : colors.black200}
              />
            )}
            {label == 'Profile' && (
              <UserOutline
                size={20}
                color={isFocused ? colors.black100 : colors.black200}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export const TabsNavigator = () => {
  const TabsStack = createBottomTabNavigator<TabsNavigatorProps>();
  return (
    <TabsStack.Navigator
      tabBar={props => <TabBar {...props} />}
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

const styles = StyleSheet.create({
  tabBar: {
    ...viewStyles.flexRow,
    gap: 10,
    backgroundColor: colors.white,
    height: 50,
  },
});
