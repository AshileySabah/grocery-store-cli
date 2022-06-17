import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import Home from './src/pages/Home';

const App = () => {
  return (
    <SafeAreaView style={styles.tela}>
      <StatusBar />
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  tela: {
    flex: 1,
  },
});
