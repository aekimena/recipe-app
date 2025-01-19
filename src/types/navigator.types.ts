import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SCREENS} from '../navigators/routes';
import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {RecipeProps} from './bookmark.type';

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

export type NonTabsNavigatorProps = {
  RECIPE_STACK: NavigatorScreenParams<RecipeNavigatorProp>;
  [SCREENS.SEARCH_ALL]: undefined;
};

export type AppNavigatorProps = {
  TABS: undefined;
  NON_TABS: NavigatorScreenParams<NonTabsNavigatorProps>;
};
export type AuthNavigatorParam = {
  [SCREENS.LOGIN]: undefined;
  [SCREENS.SIGN_UP]: undefined;
  [SCREENS.ENTER_CODE]: {
    code: string;
  };
};

export type RecipeNavigatorProp = {
  [SCREENS.RECIPE]: {recipe: RecipeProps};
  [SCREENS.WRITE_REVIEW]: {recipe: RecipeProps};
};

export type RecipeStackNavigatorProp = {
  [SCREENS.RECIPE_STACK]: NavigatorScreenParams<RecipeNavigatorProp>;
};
export type SearchAllStackNavigatorProp = {
  [SCREENS.SEARCH_ALL]: undefined;
};

export type RecipeNavigatorParam = {
  [SCREENS.NON_TABS]: {
    screen: keyof RecipeStackNavigatorProp;
    params?: {
      screen: keyof RecipeNavigatorProp;
      params?: RecipeNavigatorProp[keyof RecipeNavigatorProp];
    };
  };
};

export type AuthScreenStack = NativeStackNavigationProp<AuthNavigatorParam>;
export type AuthRouteStack = RouteProp<AuthNavigatorParam>;
export type RecipeScreenStack = NativeStackNavigationProp<RecipeNavigatorParam>;
export type RecipeRouteStack = RouteProp<{
  [SCREENS.RECIPE]: {
    recipe: RecipeProps;
  };
}>;

export type WriteReviewRoute = RouteProp<{
  [SCREENS.WRITE_REVIEW]: {
    recipe: RecipeProps;
  };
}>;

export type SearchAllStack = NativeStackNavigationProp<{
  [SCREENS.NON_TABS]: {
    screen: keyof SearchAllStackNavigatorProp;
  };
}>;
