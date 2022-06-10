import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Home from './src/pages/Home';

const App = () => {
  return (
    <SafeAreaView style={styles.tela}>
      <Home />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  tela: {
    flex: 1,
  },
});
