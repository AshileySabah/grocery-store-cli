import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProdutorRoutes from '../routes/ProdutorRoutes';
import MelhoresProdutoresRoutes from './MelhoresProdutoresRoutes';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={ProdutorRoutes} />
        <Tab.Screen
          name="Melhores Produtores"
          component={MelhoresProdutoresRoutes}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default AppRoutes;
