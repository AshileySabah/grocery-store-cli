import React from 'react';
import {Text, View, Image} from 'react-native';

import topo from '../../../mocks/topo';
import logo from '../../../assets/logo.png';

import styles from './styles';

const Topo = () => {
  return (
    <View style={styles.topo}>
      <Image style={styles.imagem} source={logo} />
      <Text style={styles.boasVindas}>{topo.boasVindas}</Text>
      <Text>{topo.legenda}</Text>
    </View>
  );
};

export default Topo;
