import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MelhoresProdutores from '../pages/MelhoresProdutores';
import ProdutorRoutes from '../routes/ProdutorRoutes';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={ProdutorRoutes} />
        <Tab.Screen name="Melhores produtores" component={MelhoresProdutores} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default AppRoutes;
