import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../theme/theme';

const PostCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Image
          source={require('../assets/user.png')}
          style={{height: 40, width: 40, borderRadius:20}}
        />
        <Text style={styles.text}>1 DAY AGO</Text>
      </View>
      <Image
        source={require('../assets/postImage.png')}
        style={{height: 380, width: '100%'}}
      />
      <View style={styles.cardHeader}>
        <View>
          <Image
            source={require('../assets/heart.png')}
            style={{height: 30, width: 30}}
          />
          <Text style={styles.text}>15 Likes</Text>
        </View>

        <View style={{alignItems:'flex-end'}}>
          <Image
            source={require('../assets/message.png')}
            style={{height: 30, width: 30}}
          />
          <Text style={styles.text}>16 Comments</Text>
        </View>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    marginVertical:10,
    backgroundColor: colors.signetPrimary,
  },
  cardHeader: {
    padding: 9,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal:13,
    justifyContent: 'space-between',
  },
  text:{
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
    textAlign: 'center',
    color: colors.signetSecondary,
    fontFamily: 'Poppins-Regular',
  }
});
