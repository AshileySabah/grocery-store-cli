import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';

const Produtor = ({nome, imagem, distancia, estrelas}) => {
  return (
    <View style={styles.cartao}>
      <Image style={styles.imagem} source={imagem} accessibilityLabel={nome} />
      <View style={styles.informacoes}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.distancia}>{distancia}</Text>
      </View>
    </View>
  );
};

export default Produtor;
