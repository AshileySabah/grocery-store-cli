import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import logo from '../../assets/logo.png';

const Home = () => {
  return (
    <View style={styles.topo}>
      <Image style={styles.imagem} source={logo} />
      <Text style={styles.boasVindas}>Olá, Maria</Text>
      <Text>Encontre os melhores produtores</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  topo: {
    backgroundColor: '#f6f6f6',
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
  },
});
