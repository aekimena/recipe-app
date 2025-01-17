import React, {FC} from 'react';
import {StatusBar, View} from 'react-native';
import {useSafeTops} from '../../hooks/useSafeTops';

type Spacer = {
  size?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export const VSpacer: FC<Spacer> = ({size = 0, bottom = 0}) => {
  return <View style={{marginVertical: size, marginBottom: bottom}} />;
};
export const VSpacerSafe = () => {
  return (
    <View
      style={{marginTop: useSafeTops(20 + (StatusBar.currentHeight ?? 20))}}
    />
  );
};
