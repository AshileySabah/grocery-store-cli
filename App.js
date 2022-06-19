import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';

import AppRoutes from './src/routes/AppRoutes';

const App = () => {
  return (
    <SafeAreaView style={styles.tela}>
      <StatusBar />
      <AppRoutes />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  tela: {
    flex: 1,
  },
});
