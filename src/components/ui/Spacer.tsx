import React, {FC} from 'react';
import {View} from 'react-native';

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
