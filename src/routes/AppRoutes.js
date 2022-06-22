import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProdutorRoutes from '../routes/ProdutorRoutes';
import MelhoresProdutoresRoutes from './MelhoresProdutoresRoutes';

import Coracao from '../assets/coracao.svg';
import Home from '../assets/home.svg';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: '#2a9f85',
          tabBarInactiveTintColor: '#c7c7c7',
          tabBarIcon: ({color}) => {
            let Icon = Home;
            if (route.name === 'Melhores Produtores') {
              Icon = Coracao;
            }

            return <Icon color={color} />;
          },
        })}>
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
