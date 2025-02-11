import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
import {TitleHeader, TitleInput} from '../../components/shared';
import icons from '../../assets/icons';

const DocumentCard = ({label, onPress}) => {
  return (
    <TouchableOpacity
      style={[
        styles.fdRow,
        {
          borderRadius: 10,
          backgroundColor: colors.white,
          alignItems: 'center',
          justifyContent: 'space-between',
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 2,
        },
        styles.pdv16,
        styles.pdh20,
        styles.mb12,
      ]}
      onPress={onPress}>
      <Text style={[styles.ts16, {fontWeight: '500', color: colors.black}]}>
        {label}
      </Text>
      <Image
        source={icons.icon_forward}
        style={[styles.icon20, {tintColor: colors.primary}]}
      />
    </TouchableOpacity>
  );
};

const Documents = ({navigation, route}) => {
  const data = [
    {
      id: 1,
      label: 'Profile Picture',
      onPress: () => navigation.navigate('ProfilePicture'),
    },
    {
      id: 2,
      label: 'Bank Account Details',
      onPress: () => navigation.navigate('BankDetails'),
    },
    {
      id: 3,
      label: 'Driving Details',
      onPress: () => navigation.navigate('DrivingDetails'),
    },
    {
      id: 4,
      label: 'Goverment Id',
      onPress: () => navigation.navigate('GovermentId'),
    },
  ];

  return (
    <SafeAreaView style={[styles.p16, {flex: 1}]}>
      <TitleHeader onPress={() => navigation.goBack()} />
      <View style={[{alignItems: 'center'}, styles.mt20]}>
        <Text style={[styles.h1, styles.mb12]}>Welcome! Esther</Text>
      </View>
      <View style={[styles.mt20]}>
        <Text style={[styles.h4]}>Required Steps</Text>

        <View style={[styles.mt16]}>
          {data.map((item, index) => (
            <DocumentCard
              key={index}
              label={item.label}
              onPress={item.onPress}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Documents;
