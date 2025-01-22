import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
import { Button, TitleInput } from '../../components/shared';

const ForgotPassword = ({navigation , route}) => {
  return (
    <SafeAreaView style={[styles.p16]}>
      <View style={[{alignItems: 'center'}, styles.mt20]}>
        <Text style={[styles.h1, styles.mb12]}>New Password</Text>
        <Text style={[{color: colors.black400}, styles.ts14]}>
          Your new password must be different
        </Text>
        <Text style={[{color: colors.black400}, styles.ts14]}>
          from previously used passwords
        </Text>
      </View>
      <View style={[styles.mt48]}>
        <TitleInput
          placeholder={'Enter new password'}
          title={'New Password'}
          secureTextEntry={true}
        />
        <TitleInput
          placeholder={'Confirm Password'}
          title={'Confirm Password'}
          secureTextEntry={true}
        />  
      </View>
      <Button label={'Create New Password'} buttonStyle={[styles.mt20, styles.mb24]} onPress={() => navigation.navigate("VerifyOtp")}/>
    </SafeAreaView>
  );
};

export default ForgotPassword;
