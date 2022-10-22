import React, {FC} from 'react';
import {colors} from '../../theme/theme';
import SignetHeader from '../../component/SignetHeader';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const DetailsScreen: FC<{navigation: any}> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <SignetHeader navigation={navigation} />
      <Text>: FC</Text>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
});
