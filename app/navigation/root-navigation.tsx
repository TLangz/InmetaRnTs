import React from 'react';
import { NavigationNativeContainer, DefaultTheme } from '@react-navigation/native'
import { createAppContainer } from 'react-navigation';
import {  createStackNavigator } from '@react-navigation/stack';
import Login from '../auth/Login';

const Stack = createStackNavigator();

export default function RootNavigation() {
    return (
        <NavigationNativeContainer theme={ naviTheme }>
            <Stack.Navigator>
                <Stack.Screen name="" component={ Login } />
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
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
    },
  };