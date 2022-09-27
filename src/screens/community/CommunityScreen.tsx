import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../theme/theme';
import {SignetHeaderLogo} from '../../Icons/Icons';
import PostCard from '../../component/PostCard';

const data = [
  {
    id: 0,
  },
  {
    id: 0,
  },
  {
    id: 0,
  },
];
const CommunityScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <SignetHeaderLogo />
      </View>
      <View style={{padding: 10}}>
        <FlatList
          data={data}
          renderItem={() => {
            return <PostCard />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CommunityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.signetColor,
  },
  logoContainer: {
    alignItems: 'center',
  },
});
