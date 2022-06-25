import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Produtor from '../pages/Produtor';
import Cesta from '../pages/Cesta';

const Stack = createNativeStackNavigator();

const ProdutorRoutes = ({ComponentePrincipal = Home}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={ComponentePrincipal} />
      <Stack.Screen name="Produtor" component={Produtor} />
      <Stack.Screen name="Cesta" component={Cesta} />
    </Stack.Navigator>
  );
};

export default ProdutorRoutes;
