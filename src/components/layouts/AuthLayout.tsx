import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {
  showFooter?: boolean;
  headerText?: string;
  footer?: JSX.Element;
  body?: JSX.Element;
}

const {height} = Dimensions.get('window');

export const AuthLayout = ({
  showFooter = true,
  headerText,
  footer,
  body,
}: Props) => {
  return (
    <ScrollView keyboardShouldPersistTaps="always">
      <View style={{paddingHorizontal: 20}}>
        <View style={{height: height * 0.15}}></View>
        <View style={{height: height * 0.7}}>{body}</View>
        {showFooter && (
          <View
            style={{
              height: height * 0.15,
              justifyContent: 'center',
            }}>
            {footer}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
