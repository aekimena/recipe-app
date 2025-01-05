import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NotificationProps} from '../../types/notifications.types';
import {textStyles, viewStyles} from '../../constants/style';
import {NotificationType} from '../../types/enums';
import getProfileImage from '../../functions/getProfileImage';
import getTimePassed from '../../functions/getTimePassed';
import colors from '../../constants/colors';
import {ChevronRight} from '../../assets/svgs';
import {VSpacer} from '../ui/Spacer';

export const NotificationBlock = ({item}: {item: NotificationProps}) => {
  const displayImage = () => {
    switch (item?.type) {
      case NotificationType.NEW_FOLLOWER:
      case NotificationType.RECIPE_LIKED:
      case NotificationType.NEW_REVIEW:
        return (
          <Image
            source={getProfileImage({url: item?.user?.profileImageUrl})}
            style={styles.userImage}
          />
        );
      case NotificationType.NEW_RECIPE:
      case NotificationType.RECIPE_OF_WEEK:
        return (
          <Image
            source={{uri: item?.recipe?.image[0]}}
            style={styles.postImage}
          />
        );
    }
  };

  const displayAction = () => {
    switch (item?.type) {
      case NotificationType.NEW_FOLLOWER:
      case NotificationType.RECIPE_LIKED:
      case NotificationType.NEW_REVIEW:
        return 'View Profile';
      case NotificationType.NEW_RECIPE:
      case NotificationType.RECIPE_OF_WEEK:
        return 'View Recipe';
    }
  };
  return (
    <Pressable
      style={{
        padding: 20,
        backgroundColor: !item?.seen ? colors.forest200 : 'transparent',
      }}>
      <View
        style={{
          ...viewStyles.flexRow,
          gap: 15,
          alignItems: 'flex-start',
        }}>
        <View>{displayImage()}</View>
        <View style={{flex: 1}}>
          <Text style={{...textStyles.font_14_medium, color: colors.black100}}>
            {item?.title}
          </Text>
          <VSpacer size={5} />
          <View style={{...viewStyles.flexRow, gap: 2}}>
            <Text
              style={{...textStyles.font_12_regular, color: colors.forest100}}>
              {displayAction()}
            </Text>
            <ChevronRight size={12} color={colors.forest100} />
          </View>
        </View>
        <View>
          <Text style={{...textStyles.font_12_regular, color: colors.black200}}>
            {getTimePassed(item?.timeStamp)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  userImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  postImage: {
    height: 40,
    width: 40,
  },
});
