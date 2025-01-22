import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
import {TitleHeader} from '../../components/shared';

const CompleteProfile = ({navigation, route}) => {
  return (
    <SafeAreaView style={[styles.p16, {flex: 1}]}>
      <TitleHeader onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default CompleteProfile;
