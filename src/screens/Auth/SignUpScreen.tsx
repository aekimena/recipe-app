import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../../constants/colors';
import {ScreenContainer} from '../../components/layouts/ScreenContainer';
import {AuthLayout} from '../../components/layouts/AuthLayout';
import {AuthInput} from '../../components/ui/inputs/AuthInput';
import {VSpacer} from '../../components/ui/Spacer';
import {textStyles} from '../../constants/style';
import {CustomButton} from '../../components/ui/Buttons/CustomButton';
import {AuthScreenStack} from '../../types/navigator.types';
import {SCREENS} from '../../navigators/routes';
import {REGEX} from '../../utils/regex';

export const SignUpScreen = ({navigation}: {navigation: AuthScreenStack}) => {
  // states

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const register = () => {
    if (password !== confirmPass) {
      return;
    }
    navigation.navigate('ENTER_CODE', {code: '4567'});
  };

  return (
    <ScreenContainer>
      <View style={{flex: 1, backgroundColor: colors.white}}>
        <AuthLayout
          body={
            <>
              <VSpacer size={50} />

              <View style={{gap: 30}}>
                <AuthInput label="Full Name" onChangeText={setName} />
                <AuthInput label="Email" onChangeText={setEmail} />
                <AuthInput
                  label="Password"
                  secureText={!passwordVisible}
                  onChangeText={setPassword}
                  rightIcon={<Text>//</Text>}
                  onRightIconPress={() => setPasswordVisible(!passwordVisible)}
                />
                <AuthInput
                  label="Confirm Password"
                  onChangeText={setConfirmPass}
                  rightIcon={<Text>//</Text>}
                  secureText={!confirmVisible}
                  onRightIconPress={() => setConfirmVisible(!confirmVisible)}
                />
              </View>

              <VSpacer size={30} bottom={0} />

              <CustomButton
                title="Register"
                disabled={
                  name == '' ||
                  !REGEX.emailRegex.test(email) ||
                  !REGEX.passwordRegex.test(password)
                }
                onPress={register}
              />
              <VSpacer size={30} />
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
                Already have an account?{' '}
                <Text
                  onPress={() => navigation.navigate(SCREENS.LOGIN)}
                  style={{
                    ...textStyles.font_16_medium,
                    color: colors.black100,
                  }}>
                  Log In
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
