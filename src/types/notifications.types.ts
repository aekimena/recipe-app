import {RecipeProps} from './bookmark.type';
import {NotificationType} from './enums';
import {UserProfileProps} from './profile.types';

export type NotificationProps = {
  title: string;
  message?: string;
  timeStamp: string;
  seen: boolean;
  type: NotificationType;
  user?: UserProfileProps;
  recipe?: RecipeProps;
};
