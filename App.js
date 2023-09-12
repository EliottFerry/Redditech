/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './pages/authentificate';
import HomeNavigator from './navigators/homeNavigator';
import { Button } from 'react-native-paper';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Oauth">
      <Stack.Screen name="Oauth" component={ AuthScreen }/>
      <Stack.Screen name="Redditech" component={ HomeNavigator }/>
    </Stack.Navigator>
  );
}

export default function App()
{
  return (
  <NavigationContainer>
    <MainNavigator/>
  </NavigationContainer>
  );
}