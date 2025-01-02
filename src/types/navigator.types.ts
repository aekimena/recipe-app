import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SCREENS} from '../navigators/routes';
import {RouteProp} from '@react-navigation/native';

export type AuthNavigatorType = {
  LOGIN: undefined;
  SIGN_UP: undefined;
  ENTER_CODE: undefined;
};

export type TabsNavigatorProps = {
  HOME: undefined;
  PROFILE: undefined;
  NOTIFICATIONS: undefined;
  BOOKMARKS: undefined;
};
export type AuthNavigatorParam = {
  [SCREENS.LOGIN]: undefined;
  [SCREENS.SIGN_UP]: undefined;
  [SCREENS.ENTER_CODE]: {
    code: string;
  };
};

export type AuthScreenStack = NativeStackNavigationProp<AuthNavigatorParam>;

export type AuthRouteStack = RouteProp<AuthNavigatorParam>;
