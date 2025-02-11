import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {Button, Checkbox, TitleInput} from '../../components/shared';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
import icons from '../../assets/icons';

const Welcome = ({navigation, route}) => {
  return (
    <SafeAreaView style={[styles.p16, {flex: 1}]}>
      <View style={[{alignItems: 'center'}, styles.mt20]}>
        <Text style={[styles.h1, styles.mb12]}>Create Account</Text>
        <Text style={[{color: colors.black400}, styles.ts14]}>
          Fill your information below or register
        </Text>
        <Text style={[{color: colors.black400}, styles.ts14]}>
          with your social account
        </Text>
      </View>
      <View style={[styles.mt36]}>
        <TitleInput placeholder={'Enter your name'} title={'Name'} />
        <TitleInput placeholder={'Enter email'} title={'Email'} />
        <TitleInput
          placeholder={'Phone number'}
          title={'Enter phone number'}
          keyboardType='numeric'
        />
        <TitleInput
          placeholder={'Enter Password'}
          title={'Password'}
          secureTextEntry={true}
        />
        <Checkbox label={'Agree with Terms & Condition'} />
        <Button
          label={'Sign Up'}
          buttonStyle={[styles.mt20, styles.mb24]}
          onPress={() => navigation.navigate('Documents')}
        />

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
              Or sign up with
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
          Already have an acccount ?{'  '}
          <Text
            style={[{color: colors.primary, textDecorationLine: 'underline'}]}
            onPress={() => navigation.navigate('SignIn')}>
            Sign In
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
