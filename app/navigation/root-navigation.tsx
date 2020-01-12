import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native'
import {  createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../auth/LoginScreen';
import { theme } from '../styles/theme';
import TodoListScreen from '../todos/screens/TodoListScreen';

const Stack = createStackNavigator();

export default function RootNavigation() {
    return (
        <NavigationNativeContainer theme={ theme } >
            <Stack.Navigator>
                <Stack.Screen name="" component={ LoginScreen } />
                <Stack.Screen name="todoListScreen" component={ TodoListScreen } options={{ title: "Todo's" }} />
            </Stack.Navigator>
        </NavigationNativeContainer>
    );
}