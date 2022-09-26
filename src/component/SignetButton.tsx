import React from 'react';
import {colors} from '../theme/theme';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
  onPress?: () => void;
}
export const SignetButton: React.FC<ButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button1}>
      <Text style={styles.text1}>SCAN A TAG</Text>
    </TouchableOpacity>
  );
};

export const SignetButtonOutline: React.FC<ButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button2}>
      <Text style={styles.text2}>SCAN A TAG</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button1: {
    backgroundColor: colors.yellowPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 55,
  },
  button2: {
    borderColor: colors.yellowPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1.5,
    height: 55,
  },
  text1: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: colors.signetColor,
  },
  text2: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: colors.yellowSecondary,
  },
});
