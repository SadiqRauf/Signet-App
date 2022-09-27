import React from 'react';
import {
  LogBox,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Navigator from './src/navigation/Navigator';
import { colors } from './src/theme/theme';
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  LogBox.ignoreAllLogs()

  return (
    <View style={styles.sectionContainer}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={colors.signetColor}
      />
       <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
   flex:1,
  },
  
});

export default App;
