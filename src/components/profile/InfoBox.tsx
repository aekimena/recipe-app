import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import {textStyles, viewStyles} from '../../constants/style';
import getActivityLength from '../../functions/getActivityLength';
import {VSpacer} from '../ui/Spacer';
import getProfileImage from '../../functions/getProfileImage';
import {MailOutline} from '../../assets/svgs';

interface Props {
  username: string;
  bio: string;
  followers: number;
  following: number;
  likes: number;
  profileImage: string;
}

export const InfoBox = ({
  username,
  followers,
  following,
  likes,
  bio,
  profileImage,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageSection}>
        <Image
          source={getProfileImage({url: profileImage})}
          style={{height: 60, width: 60, borderRadius: 50, borderWidth: 1}}
        />
        <View style={{...viewStyles.flexRow, gap: 15}}>
          <Pressable style={styles.mailContainer}>
            <MailOutline size={20} color={colors.black100} />
          </Pressable>
          <TouchableOpacity style={styles.followBtn}>
            <Text style={{...textStyles.font_14_regular, color: colors.white}}>
              Follow
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: -10}}>
        <Text>@{username}</Text>
        <VSpacer size={10} />
        <Text style={{...textStyles.font_14_regular, color: colors.black200}}>
          {bio}
        </Text>
        <VSpacer size={15} />
        <View style={{...viewStyles.flexRow, gap: 20}}>
          <View style={{}}>
            <Text style={{...textStyles.font_16_bold, color: colors.black100}}>
              {getActivityLength(followers)}
            </Text>
            <Text
              style={{...textStyles.font_14_regular, color: colors.black200}}>
              Followers
            </Text>
          </View>
          <View style={{}}>
            <Text style={{...textStyles.font_16_bold, color: colors.black100}}>
              {getActivityLength(following)}
            </Text>
            <Text
              style={{...textStyles.font_14_regular, color: colors.black200}}>
              Following
            </Text>
          </View>
          <View style={{}}>
            <Text style={{...textStyles.font_16_bold, color: colors.black100}}>
              {getActivityLength(likes)}
            </Text>
            <Text
              style={{...textStyles.font_14_regular, color: colors.black200}}>
              Likes
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    borderTopColor: colors.black200,
    borderTopWidth: 0.25,
  },
  mailContainer: {
    height: 35,
    width: 35,
    borderRadius: 40,
    borderWidth: 0.5,
    borderColor: colors.black100,
    ...viewStyles.allCenter,
  },

  followBtn: {
    paddingHorizontal: 20,
    height: 35,
    ...viewStyles.allCenter,
    borderRadius: 50,
    backgroundColor: colors.black100,
  },
  separator: {
    height: 0.5,
    width: '100%',
    backgroundColor: colors.black200,
    marginVertical: 25,
  },
  imageSection: {
    height: 60,
    top: -30,
    ...viewStyles.flexRowBtw,
  },
});
