import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SCREENS} from '../navigators/routes';

export type AuthNavigatorType = {
  LOGIN: undefined;
  SIGN_UP: undefined;
};
export type AuthNavigatorParam = {
  [SCREENS.LOGIN]: undefined;
  [SCREENS.SIGN_UP]: undefined;
};

export type AuthRouteStack = NativeStackNavigationProp<AuthNavigatorParam>;
