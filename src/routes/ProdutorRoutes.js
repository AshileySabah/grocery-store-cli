import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Produtor from '../pages/Produtor';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

const ProdutorRoutes = ({componentePrincipal = Home}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={componentePrincipal} />
      <Stack.Screen name="Produtor" component={Produtor} />
    </Stack.Navigator>
  );
};

export default ProdutorRoutes;
