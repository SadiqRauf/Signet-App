import React from 'react';
import {colors} from '../theme/theme';
import {SignetLogo} from '../Icons/Icons';
import {SignetButton, SignetButtonOutline} from '../component/SignetButton';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

const LandingScreen: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{backgroundColor: colors.signetColor}} />
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.signetColor}
        />
        <View style={styles.logoContainer}>
          <SignetLogo />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.textBox}>
            <Text style={styles.text}>Welcome to Signet Tags. </Text>
            <Text style={styles.text}>Scan a tag to get started</Text>
          </View>
          <View style={{marginBottom: 20}}>
            <SignetButton onPress={() => navigation.navigate('Home')} />
          </View>
          <SignetButtonOutline />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.signetColor,
  },
  logoContainer: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 0.3,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  textBox: {
    marginBottom: 10,
    paddingBottom: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'center',
    color: colors.white,
  },
});
