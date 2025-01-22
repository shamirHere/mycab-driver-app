import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
import icons from '../../assets/icons';
import {TitleInput, Button} from '../../components/shared';

const SignIn = ({navigation, route}) => {
  return (
    <SafeAreaView style={[styles.p16]}>
      <View style={[{alignItems: 'center'}, styles.mt20]}>
        <Text style={[styles.h1, styles.mb12]}>Sign In</Text>
        <Text style={[{color: colors.black400}, styles.ts14]}>
          Hi Welcome back, you've been missed
        </Text>
      </View>
      <View style={[styles.mt48]}>
        <TitleInput
          placeholder={'Enter email or phone number'}
          title={'Email or Phone'}
        />
        <TitleInput
          placeholder={'Enter Password'}
          title={'Password'}
          secureTextEntry={true}
        />

        <Text
          style={[
            {
              color: colors.primary,
              textDecorationLine: 'underline',
              textAlign: 'right',
            },
          ]}
          onPress={() => navigation.navigate('ForgotPassword')} 
          >
          Forgot Password
        </Text>

        <Button label={'Sign In'} buttonStyle={[styles.mt20, styles.mb24]} onPress={() => navigation.navigate("VerifyOtp")} />

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.white,
          }}>
          <View
            style={[
              {
                flexDirection: 'row',
                alignItems: 'center',
                height: 50,
              },
              styles.mv20,
            ]}>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: colors.grey100,
              }}
            />
            <Text
              style={{
                marginHorizontal: 10,
                fontSize: 14,
                color: '#787675',
                textAlign: 'center',
              }}>
              Or sign in with
            </Text>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: colors.grey200,
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          style={[
            styles.mt24,
            {
              alignSelf: 'center',
              borderWidth: 0.5,
              borderRadius: 50,
              borderColor: colors.grey200,
            },
            styles.p8,
          ]}>
          <Image source={icons.google_icon} style={[styles.icon24]} />
        </TouchableOpacity>
        <Text style={[{color: colors.black, textAlign: 'center'}, styles.mt20]}>
          Don't have an account ?{'  '}
          <Text
            style={[{color: colors.primary, textDecorationLine: 'underline'}]}
            onPress={() => navigation.navigate('SignIn')}>
            Sign Up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
