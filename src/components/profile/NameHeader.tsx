import {Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {VSpacer, VSpacerSafe} from '../ui/Spacer';
import {ThreeItemHeader} from '../ui/Headers/ThreeItemHeader';
import colors from '../../constants/colors';
import {EllipsisH} from '../../assets/svgs';
import {viewStyles} from '../../constants/style';

export const NameHeader = ({name}: {name: string}) => {
  return (
    <View>
      <VSpacerSafe />
      <ThreeItemHeader
        title={name}
        rightItem={
          <Pressable style={styles.leftIcon}>
            <EllipsisH size={20} color={colors.black100} />
          </Pressable>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  leftIcon: {
    height: 35,
    width: 35,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: colors.black100,
    ...viewStyles.allCenter,
  },
});
