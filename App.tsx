import React, {type PropsWithChildren} from 'react';
import {
  LogBox,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Navigator from './src/navigation/Navigator';
import LandingScreen from './src/screens/LandingScreen';
import { colors } from './src/theme/theme';
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
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
  //  backgroundColor:colors.signetColor
  },
  
});

export default App;
