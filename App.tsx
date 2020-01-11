/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import RootNavigation from './app/navigation/root-navigation';

declare var global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <RootNavigation></RootNavigation>
    </>
  );
};

const myStyles = StyleSheet.create({
  body: {
    color: 'black'
  }
})

export default App;
