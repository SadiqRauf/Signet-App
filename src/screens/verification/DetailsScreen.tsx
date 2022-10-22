import React, {FC} from 'react';
import {colors} from '../../theme/theme';
import SignetHeader from '../../component/SignetHeader';
import {FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Card from './components/Card';
import OwnerDetailsCard from '../../component/OwnerDetailsCard';
import { SignetButton, SignetButtonOutline } from '../../component/SignetButton';

const data = [
  {
    id: 0,
    title: 'Tag Scans',
    count: 23,
  },
  {
    id: 1,
    title: 'RARITY',
    count: 100,
  },
  {
    id: 2,
    title: 'CLAIMED',
    count: 57,
  },
  {
    id: 3,
    title: 'RESALE',
    count: 123,
  },
];

interface Data{
    id: number;
    title: string;
    count: number;
}

const DetailsScreen: FC<{navigation: any}> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <SignetHeader navigation={navigation} />
      <ScrollView style={styles.subContainer}>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return <Card title={item.title} count={item.count} />;
          }}
          numColumns={2}
          keyExtractor={ (item: any) => item.id }
          columnWrapperStyle={{justifyContent: 'space-between'}}
        />
        <View>
          <Text style={styles.aboutTxt}>{'About'}</Text>
          <Text style={styles.description}>
            The photographs describes the fight of young souls seeking escape
            from old rituals in order to build their own story and future.
          </Text>
        </View>
        <View style={styles.cardContainer}>
            <OwnerDetailsCard/>
        </View>
        <View style={styles.cardContainer}>
            <OwnerDetailsCard/>
        </View>

        <View style={styles.itemActivity}>

        </View>

        <View style={styles.buttonContainer}>
            <SignetButtonOutline title='VERIFY ON POLYGON'/>
        </View>
        <View style={styles.buttonContainer}>
            <SignetButton title='TRANSFER OWNERSHIP'/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  subContainer: {
    paddingHorizontal: 12,
  },
  aboutTxt: {
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 5,
    fontWeight: '400',
    textAlign: 'left',
    color: colors.signetSecondary,
    fontFamily: 'Poppins-Regular',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    textAlign: 'left',
    color: colors.white,
    fontFamily: 'Poppins-Regular',
  },
  cardContainer: {
    width: '100%',
    marginBottom: 10,
  },
  buttonContainer:{
    marginVertical:5
  },
  itemActivity:{
    height:400
  }
});
