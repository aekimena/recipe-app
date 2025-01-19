import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {UserProfileProps} from '../../../types/profile.types';
import {textStyles, viewStyles} from '../../../constants/style';
import getProfileImage from '../../../functions/getProfileImage';
import colors from '../../../constants/colors';
import {VSpacer} from '../Spacer';

export const UserSearchView = ({user}: {user: UserProfileProps}) => {
  return (
    <Pressable style={{...viewStyles.flexRow, gap: 10}}>
      <Image
        source={getProfileImage({url: user?.profileImageUrl})}
        style={{height: 50, width: 50, borderRadius: 40}}
      />
      <View style={{flex: 1}}>
        <Text style={{...textStyles.font_14_medium, color: colors.black100}}>
          {user?.firstName} {user?.lastName}
        </Text>
        <VSpacer size={3} />
        <Text style={{...textStyles.font_12_regular, color: colors.black200}}>
          @{user.username}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({});
