import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ReviewProps} from '../../../types/bookmark.type';
import colors from '../../../constants/colors';
import {VSpacer} from '../Spacer';
import {textStyles, viewStyles} from '../../../constants/style';
import {StarSolid} from '../../../assets/svgs';
import getProfileImage from '../../../functions/getProfileImage';

const Header = ({item}: {item: ReviewProps}) => {
  return (
    <View style={{...viewStyles.flexRow, gap: 15}}>
      <View style={{flex: 1, ...viewStyles.flexRow, gap: 10}}>
        <Image
          source={getProfileImage({url: item?.user?.profileImageUrl})}
          style={{height: 40, width: 40, borderRadius: 50}}
        />
        <View>
          <Text>
            {item?.user?.firstName} {item?.user?.lastName}
          </Text>
          <Text style={{...textStyles.font_12_regular, color: colors.black200}}>
            Professional chef
          </Text>
        </View>
      </View>
      <View style={{...viewStyles.flexRow, gap: 3}}>
        <StarSolid size={15} color={colors.gold100} />
        <Text style={{...textStyles.font_14_medium, color: colors.black100}}>
          {item?.rating.toFixed(1)}
        </Text>
      </View>
    </View>
  );
};

export const ReviewBlock = ({item}: {item: ReviewProps}) => {
  return (
    <View style={styles.container}>
      <Header item={item} />
      <Text
        style={{
          ...textStyles.font_14_regular,
          color: colors.black100,
          lineHeight: 20,
        }}>
        {item?.comment}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.black200,
    gap: 10,
  },
});
