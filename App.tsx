import React, {type PropsWithChildren} from 'react';
import {
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

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={colors.signetColor}
      />
       <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
   flex:1,
   backgroundColor:colors.signetColor
  },
  
});

export default App;
