import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RecipeProps} from '../../types/bookmark.type';
import {textStyles, viewStyles} from '../../constants/style';
import getProfileImage from '../../functions/getProfileImage';
import colors from '../../constants/colors';
import {VSpacer} from '../ui/Spacer';
import {PlusSign} from '../../assets/svgs';

export const AuthorBlock = ({recipe}: {recipe: RecipeProps}) => {
  return (
    <View style={{paddingHorizontal: 20, ...viewStyles.flexRow, gap: 20}}>
      <View style={{...viewStyles.flexRow, gap: 15, flex: 1}}>
        <Image
          source={getProfileImage({url: recipe?.author?.profileImage})}
          style={{height: 40, width: 40, borderRadius: 50}}
        />
        <View>
          <Text style={{...textStyles.font_14_medium, color: colors.black100}}>
            {recipe?.author?.firstName} {recipe?.author?.lastName}
          </Text>
          <VSpacer size={2} />
          <Text style={{...textStyles.font_12_regular, color: colors.black200}}>
            Professional Chef
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.followBtn}>
        <PlusSign color={colors.black100} size={15} />
        <Text style={{...textStyles.font_12_regular, color: colors.black100}}>
          Follow
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  followBtn: {
    ...viewStyles.flexRow,
    gap: 5,
    borderWidth: 0.5,
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderColor: colors.black200,
  },
});
