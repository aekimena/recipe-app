import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../../constants/colors';
import {ScreenContainer} from '../../components/layouts/ScreenContainer';
import {AuthLayout} from '../../components/layouts/AuthLayout';
import {AuthInput} from '../../components/ui/inputs/AuthInput';
import {VSpacer} from '../../components/ui/Spacer';
import {textStyles, viewStyles} from '../../constants/style';
import {CustomButton} from '../../components/ui/Buttons/CustomButton';
import {IMAGES} from '../../assets/images';
import {AuthScreenStack} from '../../types/navigator.types';
import {SCREENS} from '../../navigators/routes';
import {REGEX} from '../../utils/regex';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store/store';
import {setUserToken} from '../../store/authStore';

export const LoginScreen = ({navigation}: {navigation: AuthScreenStack}) => {
  // states

  const [passwordVisible, setPasswordVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // redux

  const dispatch = useDispatch<AppDispatch>();

  const login = () => {
    dispatch(setUserToken('12344'));
  };
  return (
    <ScreenContainer>
      <View style={{flex: 1, backgroundColor: colors.white}}>
        <AuthLayout
          body={
            <>
              <VSpacer size={50} />

              <View style={{gap: 30}}>
                <AuthInput label="Email" onChangeText={setEmail} />
                <AuthInput
                  label="Password"
                  secureText={!passwordVisible}
                  rightIcon={<Text>//</Text>}
                  onChangeText={setPassword}
                />
              </View>
              <VSpacer size={20} bottom={0} />
              <TouchableOpacity onPress={() => null}>
                <Text
                  style={{
                    ...textStyles.font_14_regular,
                    color: colors.black100,
                    textAlign: 'right',
                  }}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
              <VSpacer size={20} bottom={0} />
              <CustomButton
                title="Login"
                disabled={
                  !REGEX.emailRegex.test(email) ||
                  !REGEX.passwordRegex.test(password)
                }
                onPress={login}
              />
              <VSpacer size={30} />
              <View
                style={{
                  ...viewStyles.flexRow,
                  gap: 10,
                  paddingHorizontal: 30,
                }}>
                <View style={styles.horizontalLine} />
                <Text style={{...textStyles.font_14_regular}}>Or</Text>
                <View style={styles.horizontalLine} />
              </View>
              <VSpacer size={30} />
              <CustomButton
                buttonStyle={styles.googleButton}
                leftIcon={
                  <Image
                    source={IMAGES.googleIcon}
                    style={{height: 20, width: 20}}
                  />
                }
                title="Google"
                textStyle={{
                  color: colors.black100,
                }}
              />
            </>
          }
          footer={
            <View>
              <Text
                style={{
                  ...textStyles.font_14_regular,
                  color: colors.black200,
                  textAlign: 'center',
                }}>
                Don't have an account?{' '}
                <Text
                  onPress={() => navigation.navigate(SCREENS.SIGN_UP)}
                  style={{
                    ...textStyles.font_16_medium,
                    color: colors.black100,
                  }}>
                  Register
                </Text>
              </Text>
            </View>
          }
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  horizontalLine: {
    backgroundColor: colors.black200,
    height: 0.5,
    flex: 1,
  },
  googleButton: {
    borderWidth: 0.5,
    borderColor: colors.black200,
    backgroundColor: 'transparent',
    gap: 10,
  },
});
