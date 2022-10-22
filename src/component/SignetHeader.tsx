import React, {FC} from 'react';
import {colors} from '../theme/theme';
import {BackArrow, SignetHeaderLogo} from '../Icons/Icons';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const SignetHeader: FC<{navigation: any}> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.close}>
        <BackArrow />
      </TouchableOpacity>
      <View style={styles.logo}>
        <SignetHeaderLogo />
      </View>
      <View style={{flex: 0.2}} />
    </View>
  );
};

export default SignetHeader;

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.bgColor,
  },
  close: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
