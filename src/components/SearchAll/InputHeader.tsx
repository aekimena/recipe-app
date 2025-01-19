import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {viewStyles} from '../../constants/style';
import {ChevronLeft} from '../../assets/svgs';
import colors from '../../constants/colors';
import {SearchInput} from '../ui/inputs/SearchInput';

interface Props {
  onChangeText: (val: string) => void;
}

const InputHeader = ({onChangeText}: Props) => {
  return (
    <View style={{...viewStyles.flexRow, gap: 15}}>
      <Pressable>
        <ChevronLeft size={15} color={colors.black100} />
      </Pressable>
      <View style={{flex: 1}}>
        <SearchInput
          onChangeText={onChangeText}
          placeholder="Search..."
          includePad={false}
        />
      </View>
    </View>
  );
};

export {InputHeader};

const styles = StyleSheet.create({});
