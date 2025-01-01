import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../constants/colors';
import {ScreenContainer} from '../../components/layouts/ScreenContainer';
import {AuthLayout} from '../../components/layouts/AuthLayout';
import {AuthInput} from '../../components/ui/inputs/AuthInput';
import {VSpacer} from '../../components/ui/Spacer';
import {textStyles, viewStyles} from '../../constants/style';
import {CustomButton} from '../../components/ui/Buttons/CustomButton';
import {IMAGES} from '../../assets';
import {AuthRouteStack} from '../../types/navigator.types';
import {SCREENS} from '../../navigators/routes';
// import IonIcons from 'react-native-vector-icons/ionIcons';

export const LoginScreen = ({navigation}: {navigation: AuthRouteStack}) => {
  // states

  const [passwordVisible, setPasswordVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ScreenContainer>
      <View style={{flex: 1, backgroundColor: colors.white}}>
        <AuthLayout
          body={
            <>
              <VSpacer size={50} />

              <View style={{gap: 30}}>
                <AuthInput label="Email" />
                <AuthInput
                  label="Password"
                  secureText={!passwordVisible}
                  // rightIcon={
                  //   <IonIcons name="eye" color={colors.black200} size={20} />
                  // }
                />
              </View>
              <VSpacer size={20} bottom={0} />
              <TouchableOpacity onPress={() => null}>
                <Text
                  style={{
                    ...textStyles.font_14_medium,
                    color: colors.black100,
                    textAlign: 'right',
                  }}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
              <VSpacer size={20} bottom={0} />
              <CustomButton title="Login" disabled />
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
