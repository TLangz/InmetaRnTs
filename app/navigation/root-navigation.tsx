import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native'
import {  createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../auth/LoginScreen';

const Stack = createStackNavigator();

export default function RootNavigation() {
    return (
        <NavigationNativeContainer theme={ naviTheme } >
            <Stack.Navigator>
                <Stack.Screen name="" component={ LoginScreen } />
            </Stack.Navigator>
        </NavigationNativeContainer>
    );
}

const naviTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: '#18121E',
      text: '#EAC67A',
      border: 'rgb(199, 199, 204)',
    },
  };