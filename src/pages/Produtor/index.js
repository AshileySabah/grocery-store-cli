import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';

const Produtor = () => {
  const route = useRoute();
  console.log(route.params);

  return <Text>Produtor</Text>;
};

export default Produtor;
