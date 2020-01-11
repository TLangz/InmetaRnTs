import React from 'react';
import { createAppContainer } from 'react-navigation';
import {  createStackNavigator } from 'react-navigation-stack';
import Login from '../auth/Login';

const MainNavigator = createStackNavigator({
    login: {
        screen: Login,
        navigationOptions: {
            title: "",
            headerStyle: {
                backgroundColor: "#18121E",
            },
            headerTitleStyle: {
                color: "#984B43"
            }
        }
    },

}, { initialRouteName: 'login' })

const RootNavigation = createAppContainer(MainNavigator);

export default RootNavigation;