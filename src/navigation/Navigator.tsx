import React from 'react';
import {Image, Platform} from 'react-native';
import {colors} from '../theme/theme';
import LandingScreen from '../screens/LandingScreen';
import CommunityScreen from '../screens/community/CommunityScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VerificationScreen from '../screens/verification/VerificationScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import PeopleScreen from '../screens/people/PeopleScreen';
import { MainBottomTabParamList } from '../utils/navigationTypes';
import DetailsScreen from '../screens/verification/DetailsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator<MainBottomTabParamList>();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveTintColor: colors.white,
        activeTintColor: colors.yellowPrimary,
        inactiveBackgroundColor: colors.signetPrimary,
        activeBackgroundColor: colors.signetPrimary,
        style: {
          backgroundColor: colors.signetPrimary,
          borderTopColor: colors.signetPrimary,
        },
      }}>
      <Tab.Screen
        name="VERIFY"
        component={VerificationScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('../assets/verifySelected.png')}
              style={{height: 24, width: 24}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="COMMUNITY"
        component={CommunityScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('../assets/community.png')}
              style={{height: 21, width: 22}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PEOPLE"
        component={PeopleScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('../assets/people.png')}
              style={{height: 21, width: 22}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PROFILE"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('../assets/community.png')}
              style={{height: 21, width: 22}}
            />
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
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={BottomTabs}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
