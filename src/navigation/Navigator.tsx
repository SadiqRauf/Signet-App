import React, {useState, useEffect} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen';
import VerificationScreen from '../screens/verification/VerificationScreen';
import { Image } from 'react-native';
import CommunityScreen from '../screens/community/CommunityScreen';
import { colors } from '../theme/theme';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

 export const BottomTabs = () => {
  return (
    <Tab.Navigator
   
      tabBarOptions={{
        // showLabel: false,
        activeTintColor: colors.yellowPrimary,
    //     inactiveBackgroundColor:Colors.backgroundColor,
    //     style: {
    //   backgroundColor: Colors.backgroundColor,
    //   borderTopColor:Colors.backgroundColor, 
    // },
      }}>
      <Tab.Screen
        name="VERIFY"
        component={VerificationScreen}
        options={{
         
          tabBarIcon: ({focused}) => (
            focused ?
            <Image source={require('../assets/verifySelected.png')} style={{height:24, width:24}}/>
            :
            <Image source={require('../assets/verifySelected.png')} style={{height:21, width:21}}/>
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarLabel: 'Location',
          tabBarIcon: ({focused}) => (
            focused ?
            <Image source={require('../assets/community.png')} style={{height:24, width:25}}/>
            :
            <Image source={require('../assets/community.png')} style={{height:21, width:22}}/>
          ),
        }}
      />
  
  
    </Tab.Navigator>
  );
};

const Navigator = () => {

  return (
    <Stack.Navigator initialRouteName="LandingScreen">
       <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
    </Stack.Navigator>
  );
};

export default Navigator;