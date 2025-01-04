import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ScreenContainer} from '../../components/layouts/ScreenContainer';
import colors from '../../constants/colors';
import {AuthLayout} from '../../components/layouts/AuthLayout';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {AuthRouteStack} from '../../types/navigator.types';
import {textStyles} from '../../constants/style';
import {VSpacer} from '../../components/ui/Spacer';
import {CustomButton} from '../../components/ui/Buttons/CustomButton';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store/store';
import {setUserProfile} from '../../store/profileStore';

export const CodeScreen = ({route}: {route: AuthRouteStack}) => {
  // states

  const [codeValue, setCodeValue] = useState('');
  const [timer, setTimer] = useState(60);

  const ref = useBlurOnFulfill({value: codeValue, cellCount: 4});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: codeValue,
    setValue: setCodeValue,
  });

  // redux

  const dispatch = useDispatch<AppDispatch>();

  const verifyCode = () => {
    dispatch(
      setUserProfile({
        firstName: 'Ae',
        lastName: 'Kimena',
        email: 'aekiemnawork@gmail.com',
        verified: true,
        followers: 4,
        following: 5,
        profileImageUrl: null,
      }),
    );
  };

  return (
    <ScreenContainer>
      <View style={{flex: 1, backgroundColor: colors.white}}>
        <AuthLayout
          body={
            <View>
              <VSpacer size={50} />
              <CodeField
                ref={ref}
                {...props}
                value={codeValue}
                onChangeText={setCodeValue}
                cellCount={4}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                  <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
              <VSpacer size={20} />
              <TouchableOpacity style={{}}>
                <Text
                  style={{
                    textAlign: 'right',
                    ...textStyles.font_14_regular,
                    color: colors.black100,
                  }}>
                  Recend code?
                </Text>
              </TouchableOpacity>
              <VSpacer size={40} />
              <CustomButton
                title="Verify Code"
                onPress={verifyCode}
                disabled={codeValue.length !== 4}
              />
            </View>
          }
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: 60,
    height: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 8,
    borderColor: colors.black200,
    borderWidth: 0.5,
    color: colors.black100,
    ...textStyles.font_18_bold,
  },
  focusCell: {
    borderColor: colors.black100,
    borderWidth: 0.8,
  },
});
