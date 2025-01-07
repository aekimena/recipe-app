import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ScreenContainer} from '../../../components/layouts/ScreenContainer';
import colors from '../../../constants/colors';
import {WriteReviewRoute} from '../../../types/navigator.types';
import {VSpacer} from '../../../components/ui/Spacer';
import {GoBackHeader} from '../../../components/ui/Headers/GoBackHeader';
import {useSafeTops} from '../../../hooks/useSafeTops';
import {textStyles, viewStyles} from '../../../constants/style';
import {CustomButton} from '../../../components/ui/Buttons/CustomButton';
import {StarRating} from '../../../components/bookmarks/StarRating';

export const WriteReview = ({route}: {route: WriteReviewRoute}) => {
  const recipe = route?.params?.recipe;

  // states

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  return (
    <ScreenContainer statusBarTranslucent={true}>
      <View style={{flex: 1, backgroundColor: colors.white}}>
        <VSpacer size={useSafeTops(30 + (StatusBar.currentHeight ?? 20))} />
        <View style={{paddingBottom: 20}}>
          <GoBackHeader title="Write a Review" />
        </View>

        <VSpacer size={20} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 20}}>
          <View
            style={{...viewStyles.flexRow, gap: 15, alignItems: 'flex-start'}}>
            <Image
              source={{uri: recipe?.image[0]}}
              style={{height: 80, width: 80, borderRadius: 10}}
            />
            <View style={{flex: 1}}>
              <Text
                style={{...textStyles.font_16_medium, color: colors.black100}}>
                {recipe?.title}
              </Text>
              <VSpacer size={10} />
              <Text
                style={{
                  ...textStyles.font_14_regular,
                  color: colors.black100,
                  lineHeight: 20,
                }}>
                {recipe?.description}
              </Text>
            </View>
          </View>
          <VSpacer size={35} />
          <View style={styles.inputContainer}>
            <TextInput
              style={{
                color: colors.black100,
                minHeight: 70,
                ...textStyles.font_14_regular,
              }}
              placeholder="Write a review..."
              placeholderTextColor={colors.black200}
              textAlignVertical="top"
              multiline
              maxLength={300}
              onChangeText={setComment}
            />
          </View>
          <VSpacer size={30} />
          <View style={{alignItems: 'center'}}>
            <StarRating defaultRated={rating} onPressStar={setRating} />
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Submit Review"
            disabled={comment == '' || rating == 0}
            onPress={() => null}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.black200,
    paddingHorizontal: 15,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
});
