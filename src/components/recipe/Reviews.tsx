import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ReviewSummaryBlock} from './ReviewSummaryBlock';
import {VSpacer} from '../ui/Spacer';
import {SeeMoreHeader} from '../ui/Headers/SeeMoreHeader';
import {dummyRatings} from '../../constants/data';
import {ReviewBlock} from '../ui/Blocks/ReviewBlock';
import {CustomButton} from '../ui/Buttons/CustomButton';
import {RecipeProps} from '../../types/bookmark.type';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RecipeNavigatorProp} from '../../types/navigator.types';
import {SCREENS} from '../../navigators/routes';

interface Props {
  recipe: RecipeProps;
}

export const Reviews = ({recipe}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RecipeNavigatorProp>>();

  return (
    <View>
      <ReviewSummaryBlock />
      <VSpacer size={30} />
      <SeeMoreHeader
        leftText={'1,092 Reviews'}
        rightText={'See all'}
        padHorizontal={false}
      />
      <VSpacer size={20} />
      <View style={{gap: 20}}>
        {dummyRatings.slice(0, 3).map((item, index) => (
          <ReviewBlock item={item} key={index} />
        ))}
      </View>
      <VSpacer size={20} />
      <CustomButton
        title="Write a Review"
        onPress={() => navigation.navigate(SCREENS.WRITE_REVIEW, {recipe})}
        buttonStyle={{width: '70%', alignSelf: 'center'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
