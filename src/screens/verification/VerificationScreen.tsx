import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { FC } from 'react';
import {colors} from '../../theme/theme';
import {SignetHeaderLogo, YellowLogo} from '../../Icons/Icons';
import {SignetButton, SignetButtonOutline} from '../../component/SignetButton';
import OwnerDetailsCard from '../../component/OwnerDetailsCard';

const VerificationScreen:FC<{navigation:any}> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:12}}>
        <View style={styles.logosContainer}>
          <SignetHeaderLogo />
        </View>
        <View style={styles.logosContainer}>
          <Image
            source={require('../../assets/shirt.png')}
            style={styles.shirt}
          />
        </View>
        <View style={styles.logosContainer}>
          <YellowLogo />
          <Text style={styles.verifiedText}>{'VERIFIED'}</Text>
        </View>
        <View style={styles.logosContainer}>
          <Text style={styles.subText}>
            {'This is an authentic product from SIgnet Tags'}
          </Text>
        </View>
        <View style={styles.cardContainer}>
          <OwnerDetailsCard />
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.btnBox}>
            <SignetButtonOutline onPress={()=>navigation.navigate('Details')} title='DETAILS'/>
          </View>
          <View style={styles.btnBox}>
            <SignetButton title='VIEW ON METAVERSE'/>
          </View>
        </View>
        <View style={styles.box}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.bgColor
  },
  shirt: {
    height: 103,
    width: 90,
  },
  verifiedText: {
    marginTop: 9,
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.greenColor,
    fontFamily: 'Poppins-Bold',
  },
  logosContainer: {
    padding: 6,
    alignItems: 'center',
  },
  subText: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '400',
    textAlign: 'center',
    color: colors.white,
    fontFamily: 'Poppins-Regular',
  },
  cardContainer: {
    width: '100%',
    marginBottom: 10,
  },
  btnBox: {
    paddingVertical: 10,
  },
  box:{
    height:30
  }
});
