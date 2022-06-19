import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import MelhoresProdutores from '../pages/MelhoresProdutores';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Melhores produtores" component={MelhoresProdutores} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default AppRoutes;
