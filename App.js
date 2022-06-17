import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/pages/Home';
import MelhoresProdutores from './src/pages/MelhoresProdutores';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.tela}>
      <StatusBar />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen
            name="Melhores produtores"
            component={MelhoresProdutores}
          />
        </Tab.Navigator>
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
