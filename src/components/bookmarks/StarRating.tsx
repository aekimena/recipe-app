import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {viewStyles} from '../../constants/style';
import {StarOutline, StarSolid} from '../../assets/svgs';
import colors from '../../constants/colors';

interface Props {
  numberOfStars?: number;
  disabled?: boolean;
  defaultRated?: number;
  onPressStar: (rating: number) => void;
}

export const StarRating = ({
  numberOfStars = 5,
  defaultRated = 3,
  disabled,
  onPressStar,
}: Props) => {
  const [rating, setRating] = useState(defaultRated);

  const checkRatedStar = (index: number) => {
    if (index + 1 <= rating) return true;
    return false;
  };
  return (
    <View style={{gap: 5, ...viewStyles.flexRow}}>
      {[...Array(numberOfStars)].map((_, index) => (
        <TouchableOpacity
          key={index}
          disabled={disabled}
          onPress={() => {
            setRating(index + 1);
            onPressStar(index + 1);
          }}>
          {checkRatedStar(index) ? (
            <StarSolid size={30} color={colors.gold100} />
          ) : (
            <StarOutline size={30} color={colors.black300} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});
