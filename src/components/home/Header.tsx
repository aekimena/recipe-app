import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {textStyles, viewStyles} from '../../constants/style';
import {useSelector} from 'react-redux';
import {selectUserProfile} from '../../store/profileStore';
import getProfileImage from '../../functions/getProfileImage';
import {VSpacer} from '../ui/Spacer';

export const Header = () => {
  const userProfile = useSelector(selectUserProfile);
  return (
    <View style={{...viewStyles.flexRow, paddingHorizontal: 20, gap: 20}}>
      <View style={{flex: 1}}>
        <Text>Hello, {userProfile?.firstName}</Text>
        <VSpacer size={5} />
        <Text style={{...textStyles.font_20_medium}}>
          What would you like to cook today?
        </Text>
      </View>
      <TouchableOpacity>
        <Image
          style={{height: 40, width: 40}}
          source={getProfileImage({url: userProfile?.profileImageUrl})}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
